import React from "react";
import type { ExLog } from "../components/LogicTutor/Tools/ExcerciseType2";
import { useRouter } from "next/router";
import DynamicTutorLogic from "../components/LogicTutor/DynamicTutorLogic";

import Inter1 from "../components/LogicTutor/LogicaJson/Inter1.json";
import Inter2 from "../components/LogicTutor/LogicaJson/Inter2.json";
import Inter3 from "../components/LogicTutor/LogicaJson/Inter3.json";
import Inter4 from "../components/LogicTutor/LogicaJson/Inter4.json";
import Inter5 from "../components/LogicTutor/LogicaJson/Inter5.json";
import Inter6 from "../components/LogicTutor/LogicaJson/Inter6.json";
import Inter7 from "../components/LogicTutor/LogicaJson/Inter7.json";
import Inter8 from "../components/LogicTutor/LogicaJson/Inter8.json";
import Inters1 from "../components/LogicTutor/LogicaJson/Intersection.json";
import Inters2 from "../components/LogicTutor/LogicaJson/Intersection2.json";
import Inters3 from "../components/LogicTutor/LogicaJson/Intersection3.json";
import Inters4 from "../components/LogicTutor/LogicaJson/Intersection4.json";
import Suc1 from "../components/LogicTutor/LogicaJson/Sucesion1.json";
import Suc2 from "../components/LogicTutor/LogicaJson/Sucesion2.json";
import Suc3 from "../components/LogicTutor/LogicaJson/Sucesion3.json";
import Suc4 from "../components/LogicTutor/LogicaJson/Sucesion4.json";
import Table1 from "../components/LogicTutor/LogicaJson/Tabla1.json";
import Table2 from "../components/LogicTutor/LogicaJson/Tabla2.json";
import Table3 from "../components/LogicTutor/LogicaJson/Tabla3.json";
import Union1 from "../components/LogicTutor/LogicaJson/Union.json";
import Union2 from "../components/LogicTutor/LogicaJson/Union2.json";
import Union3 from "../components/LogicTutor/LogicaJson/Union3.json";
import Union4 from "../components/LogicTutor/LogicaJson/Union4.json";
import Prop1 from "../components/LogicTutor/LogicaJson/Prop1.json";
import Prop2 from "../components/LogicTutor/LogicaJson/Prop2.json";
import Prop3 from "../components/LogicTutor/LogicaJson/Prop3.json";
import Prop4 from "../components/LogicTutor/LogicaJson/Prop4.json";
import Conj1 from "../components/LogicTutor/LogicaJson/Conj1.json";
import Conj2 from "../components/LogicTutor/LogicaJson/Conj2.json";
import Conj3 from "../components/LogicTutor/LogicaJson/Conj3.json";
import Conj4 from "../components/LogicTutor/LogicaJson/Conj4.json";
import "katex/dist/katex.min.css";

const jsonMappings: { [key: string]: ExLog } = {
  Inter1: Inter1 as ExLog,
  Inter2: Inter2 as ExLog,
  Inter3: Inter3 as ExLog,
  Inter4: Inter4 as ExLog,
  Inter5: Inter5 as ExLog,
  Inter6: Inter6 as ExLog,
  Inter7: Inter7 as ExLog,
  Inter8: Inter8 as ExLog,
  Inters1: Inters1 as ExLog,
  Inters2: Inters2 as ExLog,
  Inters3: Inters3 as ExLog,
  Inters4: Inters4 as ExLog,
  Sucesion: Suc1 as ExLog,
  Sucesion2: Suc2 as ExLog,
  Sucesion3: Suc3 as ExLog,
  Sucesion4: Suc4 as ExLog,
  Table1: Table1 as ExLog,
  Table2: Table2 as ExLog,
  Table3: Table3 as ExLog,
  Union1: Union1 as ExLog,
  Union2: Union2 as ExLog,
  Union3: Union3 as ExLog,
  Union4: Union4 as ExLog,
  Prop1: Prop1 as ExLog,
  Prop2: Prop2 as ExLog,
  Prop3: Prop3 as ExLog,
  Prop4: Prop4 as ExLog,
  Conj1: Conj1 as ExLog,
  Conj2: Conj2 as ExLog,
  Conj3: Conj3 as ExLog,
  Conj4: Conj4 as ExLog,
};

function App() {
  const router = useRouter();
  const { pid } = router.query;

  const exc = pid ? jsonMappings[pid as string] : null;

  if (!exc) {
    return <div>Invalid exercise ID</div>;
  }

  return (
    <div>
      <DynamicTutorLogic exc={exc} topicId={"38"} />
    </div>
  );
}

export default App;
