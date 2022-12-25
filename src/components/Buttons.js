import React from 'react'
import './Buttons.css'
function Buttons(props) {
  return (
    <div className = "buttons" style={{backgroundColor:props.color}}>
        {props.actionName}
    </div>
  )
}

export default Buttons
