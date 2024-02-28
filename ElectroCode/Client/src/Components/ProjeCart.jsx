import React from 'react'
import {Link} from "react-router-dom"
function ProjeCart(props) {
  return (
    <div className="projectCard">
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="content">
        <Link to={"/project/:id"} className="link">
          <h1 className="title">{props.title}</h1>
        </Link>
        <p>{props.des}</p>
        <Link to={"/project/:id"} className="link">
          <button className="projectCard__button"> Read More </button>
        </Link>
      </div>
      
    </div>
  )
}

export default ProjeCart