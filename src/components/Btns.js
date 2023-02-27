function Btn(props) {
    
    return ( 
        <div>
            <button onClick={props.onClick}>{props.lable}</button>
        </div>
     );
}

export default Btn;