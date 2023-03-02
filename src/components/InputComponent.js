import { useState } from "react";

function InputComponent() {
    const [inputText, setText] = useState("Hello")

    function handleChange(e){
        setText(e.target.value);
    }
    return ( 
        <div>
            <input value={inputText} onChange={handleChange} />
            <h5>You typed: {inputText}</h5>
            <button onClick={() => setText('Hellooo')}>Reset</button>
        </div>
     );
}

export default InputComponent;