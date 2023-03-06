
import React, { useState, useEffect } from 'react';

function TimeComponent() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{border: "2px gold solid", margin: "10px", padding: "10px", color: "maroon"}}>
      <h2>Clock: {date.toLocaleTimeString()}</h2>
      {/* <h2>{date.toLocaleTimeString()}</h2> */}
    </div>
  );
}

export default TimeComponent;