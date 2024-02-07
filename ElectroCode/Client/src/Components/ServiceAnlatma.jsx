import React from "react";

function ServiceAnlatma(props) {
  return (
    <section className="services--explain">
      <img src={props.img} alt="" />
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </section>
  );
}

export default ServiceAnlatma;
