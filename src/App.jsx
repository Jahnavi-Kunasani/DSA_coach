import "./App.css";
import "./components/sidebar.jsx";
import "./components/input.jsx";
import "./components/aianalysis.jsx";
import SideBar from "./components/sidebar.jsx";
import AiAnalysis from "./components/aianalysis.jsx";
import Input from "./components/input.jsx";
import {useState} from "react";
import { analyze } from "./utils/analyzer.js";
function App() {
  const [problemstatement,setProblemstatement]=useState("");
  const [approach,setApproach]=useState("");
  const [code,setCode]=useState("");
  const [analysis,setAnalysis]=useState({ correctness:"",
    complexity:"",
    missingPattern:"",
    concepts:"",
    hint:"",
    similarProblems:""
  }
    );
  return (
    <>
      <header className="topbar">
        <h2>DSA Coach AI</h2>
      </header>
      <div className="container">
        <div className="SideBar"><SideBar /></div>
        <div className="Input">
          <Input 
            problemstatement={problemstatement}
            setProblemstatement={setProblemstatement}

            approach={approach}
            setApproach={setApproach}

            code={code}
            setCode={setCode}

            analysis={analysis}
            setAnalysis={setAnalysis}

          /></div>
        <div className="AiAnalysis">
          <AiAnalysis
            analysis={analysis}
          /></div>
      </div>
    </> 
  )
}

export default App