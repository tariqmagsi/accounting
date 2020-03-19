import React, { Component } from "react";
import {
  Home,
  QuestionAnswer,
  Person,
  ExitToApp,
  Dashboard,
  Lock,
  Email
} from "@material-ui/icons";
import { Link, withRouter } from "react-router-dom";
import { removeFromStorage, getFromStorage } from "../../../utils/storage";

class Sidebar extends Component {
  logoutPostRequest = () => {
    fetch(process.env.REACT_APP_LOGOUT_PROFILE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getFromStorage(
          process.env.REACT_APP_TOKEN_KEY
        )}`
      }
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          removeFromStorage(process.env.REACT_APP_TOKEN_KEY);
          this.props.history.replace("/Login");
        } else {
          alert("Algo salió mal");
        }
      })
      .catch(err => {
        alert("Algo salió mal");
      });
  };

  logoutHandler = () => {
    this.logoutPostRequest();
  };
  render() {
    return (
      <div className="sidebar">
        <div
          style={{
            paddingLeft: "15px",
            paddingTop: "12px",
            paddingBottom: "12px",
            backgroundColor: "teal"
          }}
        >
          <Link
            to="/Tablero"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Dashboard />
          </Link>
        </div>

        <ul>
          <Link
            to="/Tablero"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>
              <Home />
              <span> Tablero</span>
            </li>
          </Link>
          <Link
            to="/Equipo"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>
              <QuestionAnswer />
              <span> Equipo</span>
            </li>
          </Link>
          <Link
            to="/Email"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>
              <Email />
              <span> Email</span>
            </li>
          </Link>
          <Link
            to="/Llave"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>
              <Lock />
              <span> Llave</span>
            </li>
          </Link>
          <Link
            to="/Perfil"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>
              <Person />
              <span> Perfil</span>
            </li>
          </Link>

          <li onClick={this.logoutHandler}>
            <ExitToApp />
            <span> Cerrar sesión</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
