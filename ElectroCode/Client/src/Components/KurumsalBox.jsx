import React from 'react'
import {faFlag} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function KurumsalBox(props) {
  return (
    <div className="kurumsalBox">
      <FontAwesomeIcon icon={faFlag} className='icon' />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default KurumsalBox