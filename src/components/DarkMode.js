import { useState } from 'react';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{border:"2px red solid", margin:"10px", padding:"10px"}} className={darkMode ? "App-dark" : "App-light"}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <h1>Hello World</h1>
      <p>This is a paragraph.</p>
    </div>
  );
}

export default DarkMode;