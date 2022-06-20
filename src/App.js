import {useState} from 'react';
import './App.css';
function App() {
  const [calc, setCalc]= useState("")

  const updateCalc = value =>{
    setCalc(calc + value);

  }

  const clear =()=>{
    setCalc("")
  }

  const del = ()=>{
    setCalc(calc.slice(0, -1))
  }

  const calculate=()=>{
    try{
      setCalc(eval(calc).toString())
    }

    catch(err){
      setCalc("invalid input")
    }
  }
  return (
    <div className="container">
      <div className="calculator">

        <input type="text" placeholder="0"  onChange={updateCalc} value={calc}/>

        <button onClick={clear}>CL</button>
        <button onClick={del}>DEL</button>
        <button onClick={()=>updateCalc("%")}>%</button>
        <button onClick={()=>updateCalc("/")}>/</button>
        <button onClick={()=>updateCalc("7")}>7</button>
        <button onClick={()=>updateCalc("8")}>8</button>
        <button onClick={()=>updateCalc("9")}>9</button>
        <button onClick={()=>updateCalc("*")}>*</button>
        <button onClick={()=>updateCalc("4")}>4</button>
        <button onClick={()=>updateCalc("5")}>5</button>
        <button onClick={()=>updateCalc("6")}>6</button>
        <button onClick={()=>updateCalc("-")}>-</button>
        <button onClick={()=>updateCalc("1")}>1</button>
        <button onClick={()=>updateCalc("2")}>2</button>
        <button onClick={()=>updateCalc("3")}>3</button>
        <button onClick={()=>updateCalc("+")}>+</button>
        <button onClick={()=>updateCalc(".")}>.</button>
        <button onClick={()=>updateCalc("0")}>0</button>
        <button className="equal" onClick={calculate}>=</button>
      </div>
      
    </div>
  );
}

export default App;
