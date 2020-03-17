import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../images/logo2.png";
import { slide as Menu } from "react-burger-menu";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar" style={{ zIndex: "1" }}>
        <Menu style={{ position: "absolute" }} right={true}>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: this.props.location.pathname === "/" ? "silver" : "white"
            }}
            activeStyle={{
              color: this.props.location.pathname === "/" ? "silver" : "white"
            }}
          >
            Hogar
          </NavLink>
          <NavLink
            to="/acerca_da"
            style={{ textDecoration: "none", color: "white" }}
            activeStyle={{ color: "silver" }}
          >
            Acerca de
          </NavLink>
          <NavLink
            to="/servicios"
            style={{ textDecoration: "none", color: "white" }}
            activeStyle={{ color: "silver" }}
          >
            Servicios
          </NavLink>
          <NavLink
            to="/comentarios"
            style={{ textDecoration: "none", color: "white" }}
            activeStyle={{ color: "silver" }}
          >
            Comentarios
          </NavLink>
          <NavLink
            to="/registro"
            style={{ textDecoration: "none", color: "white" }}
            activeStyle={{ color: "silver" }}
          >
            Registro de citas
          </NavLink>
        </Menu>
        <ul>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: this.props.location.pathname === "/" ? "silver" : "white"
            }}
            activeStyle={{
              color: this.props.location.pathname === "/" ? "silver" : "white"
            }}
          >
            <li>
              <img
                src={logo}
                alt="logo"
                style={{
                  height: "90px",
                  position: "absolute",
                  marginTop: "-33px"
                }}
              />
            </li>
          </NavLink>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: this.props.location.pathname === "/" ? "silver" : "white"
            }}
            activeStyle={{
              color: this.props.location.pathname === "/" ? "silver" : "white"
            }}
          >
            <li style={{ marginLeft: "100px" }}>
              <span>Hogar</span>
            </li>
          </NavLink>
          <NavLink
            to="/acerca_da"
            style={{ textDecoration: "none", color: "white" }}
            activeStyle={{ color: "silver" }}
          >
            <li>
              <span>Acerca de</span>
            </li>
          </NavLink>
          <NavLink
            to="/servicios"
            style={{ textDecoration: "none", color: "white" }}
            activeStyle={{ color: "silver" }}
          >
            <li>
              <span>Servicios</span>
            </li>
          </NavLink>
          <NavLink
            to="/comentarios"
            style={{ textDecoration: "none", color: "white" }}
            activeStyle={{ color: "silver" }}
          >
            <li>
              <span>Comentarios</span>
            </li>
          </NavLink>
          <NavLink
            to="/registro"
            style={{ textDecoration: "none", color: "white" }}
            activeStyle={{ color: "silver" }}
          >
            <li>
              <span>Registro de citas</span>
            </li>
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default withRouter(Navbar);
