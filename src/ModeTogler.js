function ModeTogle() {
    let  darkMode = false;
        const darkMode1 = <h2>Dark mode is on</h2>;
        const lightMode1 = <h2>Light mode is on</h2>;

        function toggler(){
            darkMode = !darkMode;
            if(darkMode === true){
                console.log("Dark Mode on");
            } else{
                console.log("Light Mode on");
            }
        }
    return ( 
        <div style={{border:"2px red solid", margin:"10px", padding:"10px"}}>
            {darkMode ? darkMode1 : lightMode1};
            <button onClick={toggler}>Mode Toggler</button>
        </div>
     );
}

export default ModeTogle;