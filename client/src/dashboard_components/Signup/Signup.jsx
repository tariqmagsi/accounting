import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "tachyons";
import validator from "validator";
import { withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { setInStorage, getFromStorage } from "../../utils/storage";
import { CircularProgress } from "@material-ui/core";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    retypePassword: "",
    requireError: "",
    emailError: "",
    passwordLengthError: "",
    passwordContainError: "",
    nameError: "",
    passwordEqualError: "",
    error: "",
    isLoggedIn: true,
    isLoading: true,
    secretKey: ""
  };

  whenChangeHanlder = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      requireError: "",
      passwordLengthError: "",
      passwordContainError: "",
      emailError: "",
      nameError: "",
      passwordEqualError: "",
      error: ""
    });
  };

  nameError = () => {
    for (let i = 0; i < 10; i++) {
      if (this.state.name.includes(i)) {
        this.setState({
          nameError: "El nombre no puede ser un número"
        });
        return false;
      }
    }
    return true;
  };

  signupHandler = (e) => {
    e.preventDefault()
    if (!getFromStorage(process.env.REACT_APP_TOKEN_KEY)) {
      if (
        this.state.name.trim() === "" ||
        this.state.email.trim() === "" ||
        this.state.password.trim() === "" ||
        this.state.retypePassword.trim() === "" ||
        (this.state.secretKey.trim() === "" &&
          window.location.pathname === "/Regístrate")
      ) {
        this.setState({ requireError: "Todos los campos requeridos" });
      } else if (!validator.isEmail(this.state.email)) {
        this.setState({ emailError: "Por favor proporcione un correo electrónico válido" });
      } else if (this.state.password.length < 8) {
        this.setState({
          passwordLengthError:
            "La contraseña debe ser mayor o igual a 8 caracteres"
        });
      } else if (this.state.password.length >= 8) {
        let flag = false;
        if (
          this.state.password.match(/[A-Z]/) &&
          this.state.password.match(/[0-9]/)
        ) {
          flag = true;
          this.setState({
            passwordContainError: ""
          });
          if (this.state.password !== this.state.retypePassword) {
            this.setState({
              passwordEqualError: "Las nuevas contraseñas no son iguales"
            });
          }
        } else if (
          !(
            this.state.password.match(/[A-Z]/) &&
            this.state.password.match(/[0-9]/)
          )
        ) {
          flag = false;
          this.setState({
            passwordContainError:
              "La nueva contraseña debe contener 1 valor numérico y 1 letra mayúscula"
          });
        }
        if (flag) {
          this.setState({ isLoading: false }, () => {
            this.checkOldsecretKey();
          });
        }
      }
    } else {
      this.authenticateUser();
    }
  };

  backToLoginHandler = () => {
    this.props.history.push("/Login");
  };

  signupPostRequest = () => {
    fetch(process.env.REACT_APP_CREATE_PROFILE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoading: true }, () => {
          if (json.success) {
            setInStorage(process.env.REACT_APP_TOKEN_KEY, json.token);
            this.props.history.replace("/Tablero");
          } else {
            this.setState({ error: "El Email ya existe" });
          }
        });
      })
      .catch(err => {
        this.setState({ error: "El Email ya existe", isLoading: true });
      });
  };

  checkOldsecretKey = () => {
    fetch(process.env.REACT_APP_OLD_KEY_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: this.state.secretKey
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.signupPostRequest();
        } else {
          this.setState({ error: "Clave secreta incorrecta", isLoading: true });
        }
      })
      .catch(err => {
        this.setState({
          error: "Algo salió mal",
          isLoading: true
        });
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
          this.setState({ isLoggedIn: true }, () => {
            this.props.history.push("/Tablero");
          });
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
        <div className="signup">
          <section
            className="pa4 shadow-4"
            style={{
              position: "fixed",
              width: "360px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#f7f7f7",
              borderRadius: "5px"
            }}
          >
            <Button
              variant="success"
              onClick={this.backToLoginHandler}
              style={{ width: "300px" }}
            >
              {" "}
              {"<-"} Atrás para iniciar sesión
            </Button>
            {window.location.pathname !== "/Regístrate" && (
              <React.Fragment>
                <br />
                <br />
              </React.Fragment>
            )}
            <h2>Regístrate</h2>
            {window.location.pathname !== "/Regístrate" && <br />}
            {(this.state.requireError !== "" ||
              this.state.nameError !== "" ||
              this.state.emailError !== "" ||
              this.state.passwordLengthError !== "" ||
              this.state.passwordContainError !== "" ||
              this.state.passwordEqualError !== "" ||
              this.state.error !== "") && (
              <Alert variant="danger" style={{ fontSize: "12px" }}>
                {this.state.error}
                {this.state.requireError}
                {this.state.nameError}
                {this.state.emailError}
                {this.state.passwordLengthError}
                {this.state.passwordContainError}
                {this.state.passwordEqualError}
              </Alert>
            )}

            <Form style={{ textAlign: "left" }}  onSubmit={this.signupHandler}>
              <Form.Group>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.whenChangeHanlder}
                  placeholder="Nombre*"
                  style={{ width: "300px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.whenChangeHanlder}
                  placeholder="Email*"
                  style={{ width: "300px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.whenChangeHanlder}
                  placeholder="Contraseña*"
                  style={{ width: "300px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Vuelva a escribir la contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  name="retypePassword"
                  value={this.state.retypePassword}
                  onChange={this.whenChangeHanlder}
                  placeholder="Vuelva a escribir la contraseña*"
                  style={{ width: "300px" }}
                />
              </Form.Group>
              {window.location.pathname === "/Regístrate" && (
                <Form.Group>
                  <Form.Label>Llave secreta:</Form.Label>
                  <Form.Control
                    type="password"
                    name="secretKey"
                    value={this.state.secretKey}
                    onChange={this.whenChangeHanlder}
                    placeholder="Llave secreta*"
                    style={{ width: "300px" }}
                  />
                </Form.Group>
              )}
              {window.location.pathname !== "/Regístrate" && <br />}
              {this.state.isLoading ? (
                <Form.Group>
                  <Button
                    variant="danger"
                    style={{ width: "300px" }}
                    type="submit"
                  >
                    Regístrate
                  </Button>
                </Form.Group>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <CircularProgress />
                </div>
              )}
            </Form>
          </section>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(Signup);
