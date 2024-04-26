import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function KurumsalLayout() {
  function linkClick(e) {
    console.log(e.target);
    e.target.style.setProperty("--heigh", "100%");
    e.target.style.setProperty("--clk", "#da702c");
  }

  let activeLink = {
    boxShadow: "inset 4px 0 0px 0px #da702c,inset 0 -5em 2px 2px #090d38",

    color:"#da702c"
  }


  return (
    <section className="kurumsalPage">
      <nav className="kurumsal__nav">
        <div>
          <NavLink
            to="."
            end
            className="kurumsal__link"
            style={({isActive})=> isActive?activeLink:null}
          >
            Vizyonumuz
          </NavLink>
        </div>
        <div>
          <NavLink
            to="misyon"
            style={({isActive})=> isActive?activeLink:null}            className={"kurumsal__link"}
          >
            Misyonumuz
          </NavLink>
        </div>
        <div>
          <NavLink
            to="isOrtaklarimiz"
            className={"kurumsal__link"}
            style={({isActive})=> isActive?activeLink:null}          >
            is ortaklarmiz
          </NavLink>
        </div>
      </nav>
      <Outlet/>
    </section>
  );







}

export default KurumsalLayout;
