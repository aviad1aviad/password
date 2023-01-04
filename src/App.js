import './App.css';
import { useState } from 'react';

function App() {
  const [password, setPassword] = useState('')
  const [preventSubmit, setPreventSubmit] = useState(true)
  
  function handlePassword(e) {
    setPassword(e.target.value)
  }
  
  return (
    <div className="App">
     <input value = {password} onChange = {handlePassword}></input>
    <button disabled = {preventSubmit}> Submit </button>
    <checkPassword password = {password} prevent = {setPreventSubmit}></checkPassword>
    </div>
  );
}

export default App;
