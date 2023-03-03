import { useState } from "react";

function InputComponent() {
    const [inputText, setText] = useState("Hello")

    function handleChange(event){
        setText(event.target.value);
    }
    return ( 
        <div style={{border:"2px green solid", margin:"10px", padding:"10px"}}>
            <input value={inputText} onChange={handleChange} />
            <h5>You typed: {inputText}</h5>
            <button onClick={() => setText('')}>Reset</button>
        </div>
     );
}

export default InputComponent;