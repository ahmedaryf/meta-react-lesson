import {useState} from "react";

function TestTextComponent() {
   
    const [text, setText] = useState("Test");

    function textUpdate(){
        setText(() =>  "Updated text");
    }
    return ( 
        <div style={{border: "2px purple solid", margin: "10px", padding: "10px"}}>
            <div>

                <h3>{new Date().toLocaleTimeString()}</h3>
                <h3>{new Date().toLocaleDateString()}</h3>
                <h3>{new Date().toLocaleString()}</h3>
                <h2>{text}</h2>
                <button onClick={textUpdate}>Click</button>
            </div>
        </div>
     );
}

export default TestTextComponent;