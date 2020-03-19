import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "tachyons";
import { Alert } from "react-bootstrap";
import { getFromStorage, setInStorage } from "../../utils/storage";
import { CircularProgress } from "@material-ui/core";

class Login extends Component {
  state = {
    email: "",
    password: "",
    requireError: "",
    isLoggedIn: true,
    error: "",
    flag: true
  };

  whenChangeHandler = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value, requireError: "", error: "" });
  };

  loginHandler = e => {
    if (!getFromStorage(process.env.REACT_APP_TOKEN_KEY)) {
      if (this.state.email.trim() === "" && this.state.password.trim() === "") {
        this.setState({ requireError: "Todos los campos requeridos" });
      } else {
        this.setState({ flag: false }, () => {
          this.loginPostRequest();
        });
      }
    } else {
      this.authenticateUser();
    }
  };

  signupHandler = () => {
    this.props.history.push("/Regístrate");
  };

  loginPostRequest = () => {
    fetch(process.env.REACT_APP_LOGIN_PROFILE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ flag: true }, () => {
          if (json.success) {
            setInStorage(process.env.REACT_APP_TOKEN_KEY, json.token);
            this.props.history.replace("/Tablero");
          } else {
            this.setState({ error: "Correo electrónico o contraseña incorrecta" });
          }
        });
      })
      .catch(err => {
        this.setState({ error: "Algo salió mal", flag: true });
      });
  };

  authenticateUser = () => {
    fetch(process.env.REACT_APP_AUTHENTICATE_PROFILE_API, {
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
          this.props.history.push("/Tablero");
        }
      })
      .catch(err => {
        this.setState({ error: "Usuario no autenticado", isLoggedIn: false });
      });
  };

  componentDidMount() {
    if (getFromStorage(process.env.REACT_APP_TOKEN_KEY)) {
      this.authenticateUser();
    } else {
      this.setState({ isLoggedIn: false });
    }
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div className="login">
          <section
            className="pa4 dib shadow-4"
            style={{
              position: "fixed",
              top: "50%",
              width: "360px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#f7f7f7",
              borderRadius: "5px"
            }}
          >
            <h2>Iniciar sesión</h2>
            <br />
            {(this.state.requireError !== "" || this.state.error !== "") && (
              <Alert variant="danger" style={{ fontSize: "12px" }}>
                {this.state.error}
                {this.state.requireError}
              </Alert>
            )}
            <Form style={{ textAlign: "left" }}>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.whenChangeHandler}
                  placeholder="Email"
                  style={{ width: "300px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.whenChangeHandler}
                  placeholder="Password"
                  style={{ width: "300px" }}
                />
              </Form.Group>
              <br />
              {this.state.flag ? (
                <Form.Group>
                  <Button
                    variant="success"
                    style={{ width: "300px" }}
                    onClick={this.loginHandler}
                  >
                    Iniciar sesión
                  </Button>
                </Form.Group>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <CircularProgress />
                </div>
              )}
              <br />
              <h4 style={{ textAlign: "center" }}>OR</h4>
              <br />
              <Form.Group>
                <Button
                  variant="danger"
                  style={{ width: "300px" }}
                  onClick={this.signupHandler}
                >
                  Regístrate
                </Button>
              </Form.Group>
            </Form>
          </section>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(Login);
