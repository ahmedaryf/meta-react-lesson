function Btn(props) {
    
    return ( 
        <div>
            <button type="button" onClick={props.onClick}>{props.lable}</button>
        </div>
     );
}

export default Btn;