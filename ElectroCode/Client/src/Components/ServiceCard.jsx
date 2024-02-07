import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceCard(props) {
  return (
    <div className='serviceCard'>
      <FontAwesomeIcon icon={props.icon} className='serviceCard--icon'/>
      <h4>{props.title} </h4>
      <p> {props.text}</p>
    </div>
  )
}

export default ServiceCard