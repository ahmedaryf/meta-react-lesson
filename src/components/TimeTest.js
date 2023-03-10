import React from 'react'
import WeekEnd from './WeekEnd';
import WorkDay from './WorkDay';

function TimeTest() {
    const time = new Date().getDay();

    const timeCulc = () => {
        if(time >= 0 && time <= 4){
            return <WorkDay />
        } else if(time >= 5 && time <= 6){
            return <WeekEnd />
        } else {
            return <h3 style={{color: "red", marginLeft: "10px"}}>Invalid value!!</h3>
        }
    }
    
  return (
    <div>
        <div>{timeCulc()}</div>
       
    </div>
  )
}

export default TimeTest