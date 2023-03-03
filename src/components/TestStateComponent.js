import { useState } from "react";

function TestStateComponent() {
    const [count, setCount] = useState(2);

    function increase(){
        // check previous count value and incease by one using Arrow function
        setCount(prevCount => prevCount + 1)
        
    }
    return ( 
        <div style={{border:"1px black solid", margin:"10px", padding:"10px"}}>
            <h2>{count}</h2>
            <button onClick={increase}>Click to Increase</button>
        </div>
     );
}

export default TestStateComponent;
