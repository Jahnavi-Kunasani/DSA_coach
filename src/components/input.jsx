import {useState} from "react";

function Input({problemstatement,setProblemstatement,approach,setApproach,code,setCode,analysis,setAnalysis}){
    // async is used to tell that function may wait for smtg without this await does not work
        async function Analyzesolution(){
            // response is the res that is sent by the backend
            const response = await fetch("http://localhost:8000/analyze",{
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    problemStatement:problemstatement,
                    approach:approach,
                    code:code
                })
            });
            const result = await response.json();
            setAnalysis(result);
        }
    return <>
    <h2><b>Analyze your DSA solution</b></h2>
    <h1>Paste the problem, your approach and your code</h1>
    <label>
        Problem Statement
        <textarea 
            rows="6" 
            placeholder="Place the problem statement here" 
            className="problemstatement"
            value={problemstatement}
            onChange={(e)=>setProblemstatement(e.target.value)}>
        </textarea>
    </label>
    <label>
        Your Approach(What were you thinking)
        <textarea 
            rows="4" 
            placeholder="What is your thinking process??" 
            className="approach"
            value={approach}
            onChange={(e)=>setApproach(e.target.value)}>
        </textarea>
    </label>
    <label>
        Your Code
        <textarea 
            rows="10" 
            placeholder="Paste your code here"
            value={code}
            onChange={(e)=>setCode(e.target.value)}>
        </textarea>
    </label>
    <button
        onClick={Analyzesolution}>Analyze Solution</button>
    </>
}
export default Input