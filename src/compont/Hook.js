import React, {useState} from "react";

const Counter = () =>{
    const [count, setCount] = useState(0);

    function handaling(){
        setCount(count+1);
    }
    

    return(<>
    <p>counter is {count} </p>
    <button onClick={handaling} > Incariment </button>
    </>);
}

export default Counter
