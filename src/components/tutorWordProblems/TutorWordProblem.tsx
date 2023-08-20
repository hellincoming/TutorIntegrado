import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Flex,
  Heading,
  Box,
  Image,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Table,
  TableCaption,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Center,
  useColorModeValue,
  useMediaQuery,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

import type { wpExercise, GraphMeta, MathComponentMeta, SelectionMeta, textAlign } from "./types";
import { components } from "./types.d";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { CardInfo } from "./infCard/informationCard";
//import JSXGraphComponent from "./Components/jsxGraphComponent";
import { useExerciseStore, useStore } from "./store/store";
import { useEffect } from "react";
import { useAction } from "../../utils/action";
import { LoadContent } from "./LoadExercise";
import { useRouter } from "next/router";
import { useAuth } from "../Auth";

const SelectionComponent = dynamic(() => import("./Components/answerSelection"), {
  ssr: false,
});
const MathComponent = dynamic(() => import("./Components/mathComponent"), {
  ssr: false,
});

const JSXGraphComponent = dynamic(() => import("./Components/jsxGraphComponent"), {
  ssr: false,
});
export const TutorWordProblem = ({
  exercise,
  topicId,
}: {
  exercise: wpExercise;
  topicId: string;
}) => {
  //console.log("render tutorWordProblem")
  const textColor = useColorModeValue("dark", "white");
  const itemBgColor = useColorModeValue("#bde3f8", "#1A202C");
  const bgContentColor = useColorModeValue("white", "#2D3748");
  const explanationBgColor = useColorModeValue("#feebc8", "#080E1B");
  const bg = useColorModeValue("#2B4264", "#1A202C");
  const bgQuestion = useColorModeValue("#F5F5F5", "gray.600");
  const currentButtonColor = "#2B4264";
  const currentStepColor = "#2B4264";
  const rounded = 5;
  const [isScreenLarge] = useMediaQuery("(min-width: 768px)");

  const reportAction = useAction();
  const { user } = useAuth();
  const isTesting = user.tags.includes("wp-test-user");

  const {
    currentQuestionIndex,
    currentStepIndex,
    questions,
    expandedIndices,
    expandedStepIndices,
    setQuestions,
    setCurrentStep,
    setCurrentQues,
    toggleQuestionExpansion,
    resetExpandedIndices,
    resetExpandedStepIndices,
    toggleStepExpansion,
  } = useStore();

  useEffect(() => {
    setCurrentQues(0); // Reset currentQuestionIndex to 0 for the new exercise
    setCurrentStep(0); // Reset currentStepIndex to 0 for the new exercise
    resetExpandedIndices();
    resetExpandedStepIndices();
    const initialQuestions = exercise.questions.map((ques, quesIndex) => ({
      ...ques,
      isBlocked: quesIndex !== 0,
      steps: ques.steps.map((step, stepIndex) => ({
        ...step,
        isBlocked: quesIndex !== 0 && stepIndex !== 0,
      })),
    }));
    setQuestions(initialQuestions);
  }, [exercise]);

  const { nextExercise, currentExercise, exerciseIds } = useExerciseStore();

  const router = useRouter();

  const handleNextButtonClick = async () => {
    await nextExercise();
    router.replace("/showContent");
    //await router.push("/showContent")
    //router.push("/showContent");
  };

  return (
    <>
      <Tabs isFitted variant="enclosed" width="100%">
        <TabList>
          {!isTesting && (
            <>
              <Tab>Presentación</Tab>
              <Tab>Aprendizajes</Tab>
              <Tab>Ejercicio</Tab>
            </>
          )}
        </TabList>

        <TabPanels>
          {!isTesting && (
            <TabPanel>
              <Center flexDirection="column">
                <Heading size="lg" pb="12">
                  {" "}
                  {exercise?.presentation.title}
                </Heading>
                <Image
                  w={["sm", "md"]}
                  src={exercise.presentation.urlImg}
                  alt="Imagen de presentación"
                />
              </Center>
            </TabPanel>
          )}
          {!isTesting && (
            <TabPanel>
              <Center width="100%" flexDirection="column">
                {exercise.learningObjetives.title}
                <br />

                <Box width="100%" bg="green" display="flex" justifyContent="center">
                  hola
                </Box>
              </Center>
            </TabPanel>
          )}

          <TabPanel>
            <Flex flexDirection="column" alignItems="center">
              <Heading size="lg" pb="12">
                {" "}
                {exercise?.presentation.title}
              </Heading>
              {exercise.statement && (
                <Box overflowX="auto" whiteSpace="normal" textOverflow="ellipsis" maxW="100%">
                  <Latex strict>{exercise.statement}</Latex>
                </Box>
              )}
              {exercise.table && (
                <Box marginY={5} shadow="sm" rounded="lg" w="auto" overflowX="auto">
                  <Table variant="striped" size="sm" borderColor={textColor}>
                    <TableCaption>
                      <Latex>{exercise.table.tableCaption}</Latex>
                    </TableCaption>
                    <Thead bgColor={bg}>
                      <Tr>
                        {exercise.table.header.map((head, index) => {
                          return (
                            <Th
                              key={index}
                              textAlign={head.align as textAlign}
                              color="white"
                              fontWeight="bold"
                            >
                              <Latex>{head.value}</Latex>
                            </Th>
                          );
                        })}
                      </Tr>
                    </Thead>
                    <Tbody>
                      {exercise.table.rows.map((row, index) => {
                        return (
                          <Tr key={index}>
                            {row.data?.map((value, i) => {
                              return (
                                <Td key={i} textAlign={exercise.table.alignRows}>
                                  {<Latex strict>{value}</Latex>}
                                </Td>
                              );
                            })}
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </Box>
              )}
              {exercise.img && (
                <Image src={exercise.img} w="md" paddingY={5} alt="Imagen del ejercicio" />
              )}
              {exercise.text && (
                <Box width="100%" textAlign="left">
                  <Latex>{exercise.text}</Latex>
                </Box>
              )}

              <Accordion
                allowMultiple
                allowToggle
                pt="12px"
                w="100%"
                maxWidth="100%"
                index={expandedIndices}
              >
                {questions &&
                  questions.map((ques, quesIndex) => {
                    const isCurrentQuestion = quesIndex === currentQuestionIndex;
                    const stepExpandedIndices = expandedStepIndices[quesIndex] || [];

                    return (
                      <>
                        <AccordionItem key={quesIndex} isDisabled={ques.isBlocked} marginBottom={2}>
                          <h2>
                            <AccordionButton
                              bgColor={isCurrentQuestion && currentButtonColor}
                              color={isCurrentQuestion ? "white" : textColor}
                              _hover={{}}
                              onClick={() => toggleQuestionExpansion(quesIndex)}
                            >
                              <Box as="span" flex="1" textAlign="left">
                                <Latex>{ques.questionId + 1 + ". " + ques.question}</Latex>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel bgColor={bgQuestion} rounded={rounded}>
                            <Accordion
                              allowMultiple
                              allowToggle
                              marginLeft={isScreenLarge ? 10 : 0}
                              marginRight={5}
                              marginY={2}
                              index={stepExpandedIndices}
                            >
                              {ques.steps.map((step, stepIndex) => {
                                const isCurrent =
                                  stepIndex === currentStepIndex &&
                                  quesIndex === currentQuestionIndex;
                                //console.log("meta s",step.componentToAnswer.nameComponent,step.componentToAnswer.meta);
                                //const arratIndex = expandedStepIndices[quesIndex]
                                return (
                                  <Box key={stepIndex}>
                                    {step.stepExplanation && (
                                      <CardInfo
                                        text={step.stepExplanation.explanation}
                                        srcImg={step.stepExplanation.srcImg}
                                        bgColor={explanationBgColor}
                                        hideCard={step.isBlocked}
                                      ></CardInfo>
                                    )}

                                    <AccordionItem
                                      rounded={rounded}
                                      bgColor={isCurrent ? currentStepColor : itemBgColor}
                                      isDisabled={step.isBlocked}
                                    >
                                      <h2>
                                        <AccordionButton
                                          rounded={rounded}
                                          color={isCurrent ? "white" : textColor}
                                          _expanded={
                                            isCurrent
                                              ? { bg: currentStepColor }
                                              : { bg: itemBgColor }
                                          }
                                          onClick={() => {
                                            toggleStepExpansion(quesIndex, stepIndex);
                                            reportAction({
                                              verbName: "openStep",
                                              stepID: "" + step.stepId,
                                              contentID: exercise.code,
                                              topicID: topicId,
                                            });
                                          }}
                                        >
                                          <Box as="span" flex="1" textAlign="left">
                                            <Latex>{step.stepTitle}</Latex>
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel bg={bgContentColor}>
                                        <Box paddingTop={2}>
                                          {step.componentToAnswer.nameComponent ===
                                          components.SLC ? (
                                            <SelectionComponent
                                              correctMsg={step.correctMsg ?? "Muy bien!"}
                                              hints={step.hints}
                                              meta={step.componentToAnswer.meta as SelectionMeta}
                                            />
                                          ) : step.componentToAnswer.nameComponent ===
                                            components.MLC ? (
                                            <MathComponent
                                              correctMsg={step.correctMsg ?? "Muy bien!"}
                                              hints={step.hints}
                                              meta={
                                                step.componentToAnswer.meta as MathComponentMeta
                                              }
                                            />
                                          ) : step.componentToAnswer.nameComponent ===
                                            components.GHPC ? (
                                            <JSXGraphComponent
                                              hints={step.hints}
                                              meta={step.componentToAnswer.meta as GraphMeta}
                                            ></JSXGraphComponent>
                                          ) : (
                                            <p>otro componente</p>
                                          )}
                                        </Box>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Box>
                                );
                              })}
                            </Accordion>
                          </AccordionPanel>
                        </AccordionItem>
                      </>
                    );
                  })}
              </Accordion>
            </Flex>
            {isTesting && (
              <Flex justifyContent="end" paddingY={10}>
                <ButtonGroup>
                  <Button
                    size="lg"
                    colorScheme="facebook"
                    onClick={() => {
                      handleNextButtonClick();
                      console.log("currentExercise:", currentExercise);
                    }}
                  >
                    Siguiente
                  </Button>
                </ButtonGroup>
              </Flex>
            )}
            {exerciseIds.length > 0 && <LoadContent code={exerciseIds[currentExercise]} />}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
