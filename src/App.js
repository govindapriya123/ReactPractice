import React, { useState } from "react";
import { Timer } from "./Timer";
import { TodoApp } from "./TodoApp";
function App() {
  const [count,setCount]=useState(0);
  const handleIncrement=()=>{
   setCount(prev=>prev+1);
  }
  const handleDecrement=()=>{
  if(count>0)
{   setCount(prev=>prev-1);
}
  }
  const handleReset=()=>{
    setCount(0);
  }
  return (
    <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
     <h1>Counter App</h1>
     <p>Count Value:{count}</p>
     <button onClick={handleIncrement}>+</button>
     <button onClick={handleDecrement} disabled={count===0}>-</button>
     <button onClick={handleReset}>Reset</button>
     <Timer/>
     <TodoApp/>
    </div>
  );
}

export default App;
