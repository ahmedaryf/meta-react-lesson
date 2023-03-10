import React from 'react'

function Button({name}) {
  return (
    <div style={{margin: "15px"}}>
        <button style={{padding: "5px 15px", borderRadius: "10px"}}>{name}</button>
    </div>
  )
}

export default Button