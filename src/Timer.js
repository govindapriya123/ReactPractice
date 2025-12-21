import React, { useEffect } from "react";
import { useState,useRef } from "react";
export const Timer=()=>{
    const [count,setCount]=useState(0);
    let intervalRef=useRef(null);
    useEffect(()=>{
        return ()=>{
            clearInterval(intervalRef);
        }
    },[])
    const startTimer=()=>{
        if(intervalRef.current){
            return;
        }
       intervalRef.current=setInterval(()=>setCount(prev=>prev+1),1000);
    }
    const stopTimer=()=>{
     clearInterval(intervalRef.current);
     intervalRef.current=null;
    };
    const resetTimer=()=>{
    clearInterval(intervalRef.current);
     intervalRef.current=null;
     setCount(0);
    }
    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={startTimer}>start</button>
            <button onClick={stopTimer}>stop</button>
            <button onClick={resetTimer}>reset</button>
        </div>
    )
}