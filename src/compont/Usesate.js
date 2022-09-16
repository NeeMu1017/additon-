import React,{useState} from "react";

const State=()=>{
    const [count,setcount] =useState(0);
  

    return(
        <>
        <button onClick={()=>{setcount (prives => prives +1 )}} >Increment</button>
        <span>{count}</span>
        <button onClick={()=>{setcount (prives => prives - 1 )}} >DIncrement</button>
        </>
    )
        
    
}

export default State;