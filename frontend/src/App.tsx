import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  function goPrettyPrint(){
    try{
      var prettyJson = JSON.stringify(JSON.parse(input), null, 2);
      setResult(prettyJson);
    }
    catch(error){
      setResult(`${error.name}: ${error.message}`);
    }
  }

  return (
    <>
      DataInspector
      <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
      <button onClick={goPrettyPrint}>pretty print</button>
      <pre style={{textAlign:'left'}}>{result}</pre>
    </>
  )
}

export default App