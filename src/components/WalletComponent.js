import { useReducer } from "react";

function WalletComponent() {
    const reducer = (state, action) => {
        if(action.type === "ride") return {money: state.money + 10};
        if(action.type === "fuel" && state.money >=0) return {money: state.money - 30};
        return new Error();
    }
    
    const initialState = {money: 100};
    const [state, dispatch] = useReducer(reducer, initialState);
    const colorUpdate = state.money >= 100 ? "green" : "red";
    
    return ( 
        <div style={{border:"2px orange solid", margin:"10px", padding:"10px", color: colorUpdate}}>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button style={{backgroundColor: "green", padding: "5px 10px", color: "#ffffff", marginRight: "3px", borderRadius: "5px"}} onClick={() => dispatch({type: "ride"})}>New customer</button>
                <button style={{backgroundColor: "red", padding: "5px 10px", color: "#ffffff", marginLeft: "3px", borderRadius: "5px"}} onClick={() => dispatch({type: "fuel"})}>Refill</button>
            </div>
        </div>
     );
}

export default WalletComponent;