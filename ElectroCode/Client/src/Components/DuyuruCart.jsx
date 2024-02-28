import React from "react";

function DuyuruCart(props) {
  return (
    <div className="duyuruCart">
      <div className="duyuruCart--imgUp">
        <img src={props.img} alt="" />
      </div>
      <div className="duyuruCart--textDown">
        <h5>{props.title}</h5>
        <p>{props.text}</p>
        <div className="duyuruCart--date">
          <span>{props.date.toLocaleDateString('tr')}</span>
    {/* TODO : ADD 'LINK' TO SINGLE READ SAYFASINA  on the button  */}
          <button className="readMore">ReadMore</button>
        </div>
      </div>
    </div>

    // <div className="duyuruCart">
    //   <div className="duyuruCart--imgUp">
    //     <img src="https://via.placeholder.com/350x150" alt="" />
    //   </div>
    //   <div className="duyuruCart--textDown">
    //     <h3>The first project</h3>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
    //       nobis etur, kloremadipisicing accusamus aperiam eligendi eum,
    //       voluptatibus possimus excepturi a?
    //     </p>
    //     <div className="duyuruCart--date">
    //       <span>02.01.2024</span>
    //       <button>ReadMore</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default DuyuruCart;
