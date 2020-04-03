import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Form, Button,  Alert, Col, Row } from "react-bootstrap";
import validator from "validator"
import Loading from 'react-fullscreen-loading';
import Footer from "../Footer/Footer";
import image from "../../images/image.jpg"
import ScrollAnimation from 'react-animate-on-scroll';

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
          <Navbar />
          <div className="register" style={{paddingBottom: "-200px"}}>
            <div
              className="main-home"
              style={{
                marginLeft: "50px",
                color: "white",
                marginRight: "50px",
                
              }}
            >
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
              <h1 style={{ fontWeight: "bold", color: "rgb(15, 131, 131)" }}>Registro de citas</h1>
              </ScrollAnimation>
              <br />
              <br />
            </div>
          </div>
          <div>
            <Row className="quote" style={{ background: "rgba(15,131,131,0.8)" }}>
              <Col style={{
                paddingTop: "100px", 
                paddingBottom: "100px", 
                paddingLeft: "100px", 
                color: "white",
                marginRight: "-20px"
              }}
            >
                <h1>Formulario de Cita</h1>
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
                <br />
                <Form onSubmit={this.onSubmitHandler}>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      className="width-input"
                      style={{
                        width: "400px",
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
                        width: "400px",
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
                        width: "400px",
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
                        width: "400px",
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
              </Col>
              <Col>
               <img alt="image1" src={image} style={{ position: "relative", left: 0, float: "right", width: "700px", height: "100%", top: 0, bottom: 0, right: 0, marginRight: 0}}/>
              </Col> 
            </Row> 

            <Col className="quote1" 
              style={{
                paddingTop: "100px", 
                paddingBottom: "100px", 
                paddingLeft: "20px",
                paddingRight: "20px", 
                background: "rgba(15,131,131,0.8)",
                color: "white",
                marginRight: "-20px",
                display: "none"
              }}
            >
              <h1>Formulario de Cita</h1>
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
                <br />
                <Form onSubmit={this.onSubmitHandler}>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      className="width-input"
                      style={{
                        width: "400px",
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
                        width: "400px",
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
                        width: "400px",
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
                        width: "400px",
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
            </Col>
          </div>
          <Footer/>
        </div>
      );
    } else {
      return <Loading loading background="#eee" loaderColor="rgb(15,131,131)" />;
    }
  }
}

export default Register;
