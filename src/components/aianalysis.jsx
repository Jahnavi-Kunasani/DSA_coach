function AiAnalysis({analysis}){
    return <>
    <h2>AI Analysis and feed back</h2>
    <label>
        Correctness
        <textarea
            rows="3" 
            placeholder="Correctness of your solution"
            value={analysis.correctness}
            readOnly>
        </textarea>
    </label>
    <label>
        Complexitiy Analysis
        <textarea
            rows="3" 
            placeholder="Complexitiy"
            value={analysis.complexity}
            readOnly>
        </textarea>
    </label>
    <label>
        Missing Pattern
        <textarea
            rows="3" 
            placeholder="Missing Pattern"
            value={analysis.missingPattern}
            readOnly>
        </textarea>
    </label>
    <label>
       Concepts to learn
        <textarea
            rows="3" 
            placeholder="Cocepts to learn"
            value={analysis.concepts}
            readOnly>
        </textarea>
    </label>
    <label>
        Optimized Approach(Hint)
        <textarea
            rows="3" 
            placeholder="Hint"
            value={analysis.hint}
            readOnly>
        </textarea>
    </label>
    <label>
        Similiar Problems
        <textarea
            rows="3" 
            placeholder="Similar Problems"
            value={analysis.similarProblems}
            readOnly>
        </textarea>
    </label>
    </>
}
export default AiAnalysis