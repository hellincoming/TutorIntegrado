import React, { useState, useMemo } from "react";
import { Button, Stack, Alert, AlertIcon, Center } from "@chakra-ui/react";
import { MathfieldElement } from "mathlive";
import dynamic from "next/dynamic";
import MQPostfixSolver from "../../utils/MQPostfixSolver";
import MQPostfixparser from "../../utils/MQPostfixparser";
import Hint from "../../components/Hint";
import { convertirNotacion } from "./convertirNotacion";
import { useAction } from "../../utils/action";
import type { ExLog } from "./Tools/ExcerciseType2";
import type { value } from "../../components/lvltutor/Tools/ExcerciseType";

const Mathfield = dynamic(() => import("./Tools/mathLive"), {
  ssr: false,
});

const MultiplePlaceholders = ({
  exc,
  nStep,
  setCompleted,
  topic,
}: {
  exc: ExLog;
  nStep: number;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  topic: string;
}) => {
  const action = useAction();
  const [isCorrectValue, setIsCorrectValue] = useState(false);
  const [ValuesArray, setValuesArray] = useState<Array<any>>([]);
  const [error, setError] = useState(false);
  const [hints, setHints] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [_, setLastHint] = useState(0);

  const evaluar = () => {
    setError(false); // Resetear el estado de error antes de la evaluación
    interface values {
      values: Array<value>;
    }

    const answer = exc.steps[nStep].answers[0].answer;
    let respuesta = false;
    const evaluation: {
      input1: string;
      answer: values;
      values: [];
    } = {
      input1: "",
      answer: { values: [] },
      values: [],
    };

    if (exc.steps[nStep].validation === "evaluate") {
      if (
        ValuesArray.every(
          (value, index) =>
            MQPostfixSolver(MQPostfixparser(convertirNotacion(value)), evaluation.answer) ===
            MQPostfixSolver(MQPostfixparser(convertirNotacion(answer[index])), evaluation.answer),
        )
      ) {
        setIsCorrectValue(true);
        respuesta = true;
      } else {
        setError(true);
        setHints(hints + 1);
      }
    } else {
      if (ValuesArray.every((value, index) => value === answer[index])) {
        setIsCorrectValue(true);
        respuesta = true;
      } else {
        setError(true);
        setHints(hints + 1);
      }
    }

    setAttempts(attempts + 1);

    action({
      verbName: "tryStep",
      stepID: "" + exc.steps[nStep].stepId,
      contentID: exc.code,
      topicID: topic,
      result: respuesta ? 1 : 0,
      kcsIDs: exc.steps[nStep].KCs,
      extra: {
        response: [ValuesArray],
        attempts: attempts,
        hints: hints,
      },
    });
  };

  function test(_, prompsValues) {
    let newValuesArray = [];
    for (let key in prompsValues) {
      newValuesArray.push(prompsValues[key]);
    }
    setValuesArray(newValuesArray);
  }

  const mfe = useMemo(() => new MathfieldElement(), []);

  return (
    <>
      <Center>
        <Mathfield
          readOnly={true}
          mfe={mfe}
          value={`\\large ${exc.steps[nStep].displayResult[0]}\\;`}
          onChange={test}
        ></Mathfield>
      </Center>

      <Stack spacing={4} m={2} direction="row" justifyContent={"center"}>
        <Button colorScheme="blue" size="sm" onClick={() => evaluar()}>
          enviar
        </Button>
        <Hint
          hints={exc.steps[nStep].hints}
          contentId={exc.code}
          topicId={topic}
          stepId={exc.steps[nStep].stepId}
          matchingError={exc.steps[nStep].matchingError}
          response={ValuesArray}
          error={error}
          setError={setError}
          hintCount={hints}
          setHints={setHints}
          setLastHint={setLastHint}
        ></Hint>
      </Stack>
      {error && (
        <Alert status="error">
          <AlertIcon />
          Tu respuesta no es la esperada, intentalo de nuevo.
        </Alert>
      )}
      {isCorrectValue && (
        <Alert status="success">
          <AlertIcon />
          {exc.steps[nStep].correctMsg}
          {setCompleted(true)}
        </Alert>
      )}
    </>
  );
};

export default MultiplePlaceholders;
