import React from 'react';
import type {ExLog}   from '../components/lvltutor/Tools/ExcerciseType2';
import Inter from "../components/LogicTutor/Logica/Inter1.json";
import Inter1 from "../components/LogicTutor/Logica/Inter2.json";
import Inters from "../components/LogicTutor/Logica/Intersection.json";
import Suc from "../components/LogicTutor/Logica/Sucesion1.json";
import Table1 from "../components/LogicTutor/Logica/Tabla1.json";
import Union1 from "../components/LogicTutor/Logica/Union.json";

import 'katex/dist/katex.min.css';
import { useRouter } from 'next/router';
import DynamicTutorLogic from '../components/LogicTutor/DynamicTutorLogic';


function App() {
    let exc: ExLog = Suc as ExLog; // 
    const router = useRouter();
    const { pid } = router.query;
    console.log(pid)
    if (pid === 'Inter') {
        exc = Inter as ExLog; 
    } else if (pid === 'Inter1') {
        exc = Inter1 as ExLog;
    } else if (pid === 'Inters') {
        exc = Inters as ExLog; 
    } else if (pid === 'Table1') {
        exc = Table1 as ExLog; 
    }
     else if (pid === 'Union1') {
        exc = Union1 as ExLog; 
    }
    
    return (
        
        <div>
            <DynamicTutorLogic exc={exc} />
        </div>
    )
}

export default App;