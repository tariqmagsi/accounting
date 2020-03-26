import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../images/logo2.png";
import { slide as Menu } from "react-burger-menu";
import { Phone, Facebook, WhatsApp, Mail,  } from "@material-ui/icons";


class Navbar extends Component {
  render() {
    return (
      <div>
        <div 
          style={{
            backgroundColor: "rgb(15, 131, 131)", 
            position: "fixed", right: 0, 
            left: 0, zIndex: 4, color: "white", 
            fontSize: "12px", paddingLeft: "30px"
          }}
        >
          <a href="tel:5115620663" style={{ color: "white", paddingLeft: "20px"}}>
            <Phone style={{fontSize: "16px"}}/>
            <span style={{marginLeft: "5px"}}>(51)1-562-0663</span>
          </a>
          <a href="tel:5115620657" style={{color: "white", paddingLeft: "40px"}} className="start-bar">
            <Phone style={{fontSize: "18px"}}/>
            <span style={{marginLeft: "5px"}}>(51)1-562-0657</span>
          </a>
          <a href="tel:986617069" style={{color: "white", paddingLeft: "40px"}} className="start-bar">
            <Phone style={{fontSize: "18px"}}/>
            <span style={{marginLeft: "5px"}}>986 617 069</span>
          </a>
          <a href="tel:991696527" style={{color: "white", paddingLeft: "40px"}} className="start-bar">
            <Phone style={{fontSize: "18px"}}/>
            <span style={{marginLeft: "5px"}}>991 696 527</span>
          </a>
          <span style={{float: "right", marginRight: "30px"}}>
            <a href="https://www.facebook.com/Consultoria-contable-tributario-bermudez-SAC-100667508250436/" target="_blank" rel="noopener noreferrer">
              <Facebook style={{color: "white",fontSize: "18px"}} className="fb"/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+923003750521&text=" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{marginLeft: "10px"}}
            >
              <WhatsApp style={{color: "white",fontSize: "18px"}} className="whatsapp"/>
            </a>
            <a href="mailto:contabletributariobermudez@gmail.com" 
              style={{marginLeft: "10px"}}
            >
              <Mail style={{color: "white",fontSize: "18px"}} className="whatsapp"/>
            </a>
          </span>
        </div>
        <div className="navbar">
          <Menu style={{ position: "absolute" }} right={true}>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "white"
              }}
              activeStyle={{
                backgroundColor: this.props.location.pathname === "/" ? "rgb(15, 131, 131)" : "none",
                paddingLeft:  this.props.location.pathname === "/" ? "20px":"0px",
                paddingTop: this.props.location.pathname === "/" ?"20px":"0px"
              }}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/quienes_somos"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ 
                backgroundColor: "rgb(15, 131, 131)",
                paddingLeft: "20px",
                paddingTop: "20px"
              }}
            >
              Quienes Somos
            </NavLink>
            <NavLink
              to="/servicios"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ 
                backgroundColor: "rgb(15, 131, 131)",
                paddingLeft: "20px",
                paddingTop: "20px"
              }}
            >
              Servicios
            </NavLink>
            <NavLink
              to="/comentarios"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ 
                backgroundColor: "rgb(15, 131, 131)",
                paddingLeft: "20px",
                paddingTop: "20px"
              }}
            >
              Comentarios
            </NavLink>
            <NavLink
              to="/registro"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ 
                backgroundColor: "rgb(15, 131, 131)",
                paddingLeft: "20px",
                paddingTop: "20px"
              }}
            >
              Registro de citas
            </NavLink>
          </Menu>
          <ul>
            <NavLink
              to="/"
              className="image-link"
            >
              <li>
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    height: "60px",
                    position: "absolute",
                    marginTop: "-18px"
                  }}
                />
              </li>
            </NavLink>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "white"
              }}
              activeStyle={{
                marginLeft: "100px",
                backgroundColor: this.props.location.pathname === "/" ? "rgb(15, 131, 131)" : "none",
                paddingBottom: "18px",
                paddingTop: "20px"
              }}
              className="links"
            >
              <li>
                <span>Inicio</span>
              </li>
            </NavLink>
            <NavLink
              to="/quienes_somos"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ 
              backgroundColor: "rgb(15, 131, 131)",
              paddingBottom: "18px",
              paddingTop: "20px"
             }}
             className="links"
            >
              <li>
                <span>Quienes Somos</span>
              </li>
            </NavLink>
            <NavLink
              to="/servicios"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ 
                backgroundColor: "rgb(15, 131, 131)",
                paddingBottom: "18px",
                paddingTop: "20px"
              }}
              className="links"
            >
              <li>
                <span>Servicios</span>
              </li>
            </NavLink>
            <NavLink
              to="/comentarios"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ 
                backgroundColor: "rgb(15, 131, 131)",
                paddingBottom: "18px",
                paddingTop: "20px"
              }}
              className="links"
            >
              <li>
                <span>Comentarios</span>
              </li>
            </NavLink>
            <NavLink
              to="/registro"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ 
                backgroundColor: "rgb(15, 131, 131)",
                paddingBottom: "18px",
                paddingTop: "20px"
              }}
              className="links"
            >
              <li>
                <span>Registro de citas</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
