import { useState } from "react";
import { Link } from "react-router-dom";

// * Import
import logo from "../assets/logo.png";
import humImg from "../assets/burger-menu.png";
import closeImg from "../assets/icons8-x-100.png";
// TODO : BIR LINKE TIKLADIKTAN SONRA NAVBARI OTOMATIK KAPAT
function NavBar(props) {
  let [isOpen, setIsOpen] = useState(false);
  let [subOpen, setSubOpen] = useState(false);
  // console.log(isOpen)

  function handleMenuClick() {
    console.log("clicked");
    setIsOpen((prev) => !prev);
  }
  function subClick() {
    setSubOpen((prev) => !prev);
    console.log("im clicked canim");
    console.log(subOpen);
  }

  // HERE : we make an object that we can put data attribute inside of it than give it to jsx
  // ! it's doesn't work so i give two different classes
  // const dataobject = {'data-after':subOpen?uparrow:downarrow}

  return (
    <nav className="navbar">
      <div className="navbar--logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar--ham">
        {props.width < 768 && (
          <img
            onClick={handleMenuClick}
            src={isOpen ? closeImg : humImg}
            alt=""
          />
        )}
        <ul
          className={
            props.width > 768
              ? "navbar--list"
              : isOpen && props.width < 768
              ? "show navbar--list"
              : "hide navbar--list"
          }
        >
          <li className="list--item">
            <Link to="/">AnaSayfa</Link>
          </li>
          <li
            className={subOpen ? "uparrow list--item" : "downarrow list--item"}
            id="kurumsal"
            onClick={subClick}
          >
            <a href="#">Kurumsal</a>
            <ul
              className={
                props.width > 768
                  ? "sublist--navbar transitionProp "
                  : subOpen
                  ? "sublist--navbar open"
                  : "sublist--navbar close"
              }
            >
              <li>
                <Link to="/vizyon">Vizyonumuz</Link>
              </li>
              <li>
                <Link to="/hakkimizda">Hakkimizda</Link>
              </li>
              <li>
                <Link to="/isOrtaklarimiz">Is ortaklarimiz</Link>
              </li>
            </ul>
          </li>
          <li className="list--item">
            <Link to="/duyurular"> Duyurular </Link>
          </li>
          <li className="list--item">
            <Link to="/projelerimiz">Projelerimiz</Link>
          </li>
          <li className="list--item">
            <Link to="/iletisim">Iletisim</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
