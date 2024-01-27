import { useState } from "react";
import { Link } from "react-router-dom";

// * Import
import logo from "../assets/logo.png";
import hum from "../assets/burger-menu.png";
import close from "../assets/icons8-x-100.png";
import uparrow from "../assets/up-arrow-svgrepo-com.svg";
import downarrow from "../assets/icon-arrow-down.svg";
// TODO : BIR LINKE TIKLADIKTAN SONRA NAVBARI OTOMATIK KAPAT
function NavBar() {
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
        <img onClick={handleMenuClick} src={isOpen ? close : hum} alt="" />
        <ul className={isOpen ? "show navbar--list" : "hide navbar--list"}>
          <li>
            <Link to="/">Ana Sayfa</Link>
          </li>
          <li
            className={subOpen ? "uparrow" : "downarrow"}
            id="kurumsal"
            onClick={subClick}
          >
            <a href="#">Kurumsal</a>
            <ul
              className={
                subOpen ? "sublist--navbar open" : "sublist--navbar close"
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
          <li>
            <Link to="/duyurular"> Duyurular </Link>
          </li>
          <li>
            <Link to="/projelerimiz">Projelerimiz</Link>
          </li>
          <li>
            <Link to="/iletisim">Iletisim</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
