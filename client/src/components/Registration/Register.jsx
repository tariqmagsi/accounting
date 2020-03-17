import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Form, Button, Card, Alert } from "react-bootstrap";

class Register extends Component {
  state = {
    name: "",
    email: "",
    contact: "",
    description: "",
    requireError: ""
  };

  whenChangeHandler = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value, requireError: "" });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.contact !== "" &&
      this.state.description !== ""
    ) {
    } else {
      this.setState({ requireError: "Todos los campos requeridos" });
    }
  };

  render() {
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
                  {this.state.requireError !== "" && (
                    <Alert variant="danger" style={{ fontSize: "12px" }}>
                      {this.state.requireError}
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
  }
}

export default Register;
