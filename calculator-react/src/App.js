import{useState} from "react";
import{evaluate} from "mathjs" ;
import './App.css';

const App = () => {

  const buttons =["Clear","+","-","/","0","*","1","2","3","4","5","6","7","8","9","="]

  const [value,setValue]= useState("")

  const calculate=(button)=>{
    if(button === "Clear"){
      setValue("")
    }else if(button=== "="){
      setValue(evaluate(value))
    } else{
      setValue(value + button)
      
    }

  }
  return (
    <div className="App">
      <h2>Calculator</h2>
      <div className="wrapper">
      <h3>{value}</h3>
      {buttons.map((button,index)=>{
        return<button key={index} value={button} onClick={()=> calculate(button)} className="buttons">{button}</button>
      })}
  </div>
    </div>
  );
}

export default App;
