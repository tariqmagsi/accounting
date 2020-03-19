import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Form, Button, Card, Alert } from "react-bootstrap";
import validator from "validator"
import Loading from 'react-fullscreen-loading';

class Register extends Component {
  state = {
    name: "",
    email: "",
    contact: "",
    description: "",
    requireError: "",
    successfully: "",
    error: "",
    emailAdmin: "",
    passwordAdmin: "",
    flag: false
  };

  whenChangeHandler = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value, requireError: "",error:"", successfully:"" });
  };

  registerRequest = () => {
      fetch(process.env.REACT_APP_CREATE_APPOINTMENT_API+`?email=${this.state.emailAdmin}&password=${this.state.passwordAdmin}`,{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          number: this.state.contact,
          description: this.state.description
        })
      })
      .then(res => res.json())
      .then(json => {
          if (json.success) {
            this.setState({successfully: "Usted es exitosamente registrado. Estén atentos y le enviaremos un correo con la fecha y hora de la cita. Para consultas adicionales no dude en contactarnos",
                            name: "", email: "", contact: "", description: ""})
          } else {
            this.setState({error: "Algo salió mal (500)", successfully: ""})
          }
      })
      .catch(err => {
        this.setState({error: "Algo salió mal (500)", successfully: ""})
      })
  }

  onSubmitHandler = e => {
    e.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.contact !== "" &&
      this.state.description !== ""
    ) {
      if (validator.isEmail(this.state.email)){
        this.registerRequest()
      } else {
        this.setState({ requireError: "Correo electrónico no válido", successfully: "" });
      }
    } else {
      this.setState({ requireError: "Todos los campos requeridos", successfully: "" });
    }
  };

  getEmail = () => {
    fetch(process.env.REACT_APP_GET_EMAIL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          if (json.email) {
            this.setState({emailAdmin: json.email.email, passwordAdmin: json.email.password, flag: true})
          }
        }
      })
      .catch(err => { 
                console.log(err) 
                this.setState({ flag: true })
            });
  };

  componentDidMount(){
    this.getEmail()
  }

  render() {
    if (this.state.flag) {
      return (
        <div>
          <div className="register">
            <Navbar />
            <div
              className="main-home"
              style={{
                marginLeft: "50px",
                color: "white",
                marginRight: "50px",
                textAlign: "center"
              }}
            >
              <div style={{ marginTop: "120px", overflowX: "auto" }}>
                <Card style={{ background: "rgba(0,0,0,0.5)" }}>
                  <Card.Body>
                    {(this.state.requireError !== "" || this.state.error !== "") && (
                      <Alert variant="danger" style={{ fontSize: "12px" }}>
                        {this.state.requireError}
                        {this.state.error}
                      </Alert>
                    )}
                    {(this.state.successfully !== "") && (
                      <Alert variant="success" style={{ fontSize: "12px" }}>
                        {this.state.successfully}
                      </Alert>
                    )}
                    <div style={{ fontSize: "35px" }}>Formulario de Cita</div>
                    <br />
                    <Form onSubmit={this.onSubmitHandler}>
                      <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          className="width-input"
                          style={{
                            width: "350px",
                            marginLeft: "auto",
                            marginRight: "auto"
                          }}
                          placeholder="Nombre"
                          align="center"
                          type="text"
                          value={this.state.name}
                          name="name"
                          onChange={this.whenChangeHandler}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          className="width-input"
                          style={{
                            width: "350px",
                            marginLeft: "auto",
                            marginRight: "auto"
                          }}
                          placeholder="Email"
                          align="center"
                          type="email"
                          value={this.state.email}
                          name="email"
                          onChange={this.whenChangeHandler}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Número de teléfono móvil</Form.Label>
                        <Form.Control
                          className="width-input"
                          style={{
                            width: "350px",
                            marginLeft: "auto",
                            marginRight: "auto"
                          }}
                          placeholder="Número de teléfono móvil"
                          align="center"
                          type="text"
                          pattern="[0-9+]*"
                          value={this.state.contact}
                          name="contact"
                          onChange={e => {
                            if (e.target.validity.valid) {
                              this.setState({
                                contact: e.target.value,
                                requireError: ""
                              });
                            }
                          }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                          className="width-input"
                          style={{
                            width: "350px",
                            marginLeft: "auto",
                            marginRight: "auto"
                          }}
                          placeholder="Descripción del tipo..."
                          align="center"
                          as="textarea"
                          rows={3}
                          value={this.state.description}
                          name="description"
                          onChange={this.whenChangeHandler}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Button variant="success" type="submit">
                          Registrar cita
                        </Button>{" "}
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>{" "}
                <br />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Loading loading background="#eee" loaderColor="rgba(0,0,0,0.5)" />;
    }
  }
}

export default Register;
