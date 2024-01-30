import {useState} from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faShareNodes,faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faYoutube,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  let [yil,setYil] = useState(new Date())
  return (
    <footer>
      <div className="footer--logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer--phone">
        <FontAwesomeIcon icon={faPhone} className="footer--icon" />
        <div className="footer--phone--info">
          <b>Phone</b>
          <p>+905389305515</p>
        </div>
      </div>
      <div className="footer--socialMedia">
        <FontAwesomeIcon icon={faShareNodes} className="footer--icon" />
        <div className="footer--socialMedia--info">
          <b>SOCIAL MEDIA </b>
          <div className="footer--icons">
            <FontAwesomeIcon
              icon={faFacebook}
              className="footer--icon__social"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="footer--icon__social"
            />
            <FontAwesomeIcon
              icon={faTelegram}
              className="footer--icon__social"
            />
          </div>
        </div>
      </div>
        <div className="footer--copyRights">
         <p>
         {yil.getFullYear()} ElectroCode | All rights reserved. 
         <FontAwesomeIcon  className="footer--icon" icon={faCopyright}/>
         </p>
        </div>
    </footer>
  );
}

export default Footer;
