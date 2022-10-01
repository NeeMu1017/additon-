import React, { useReducer } from "react";

function reduce (state,action){
    switch(action.type){
        case 'increment'  :  
        return {count:state.count+1}
        case 'decrement':
            return{count:state.count-1}
        case 'ADDODD':
            return{ }
    }
      
}

const HookReucer = ()=>{
    const [state,dispatch] =useReducer (reduce,{count : 0});
    function increment (){
        dispatch({type : 'increment'})
    }
    function decrement (){
        dispatch ({type:'decrement'})
    }
    return(
        <>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
        </>
    )
}

export default HookReucer