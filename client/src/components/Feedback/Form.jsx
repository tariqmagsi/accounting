import React, { Component } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";

export default class FeedbackForm extends Component {
  state = { name: "", comment: "", requireError: "" };

  whenChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, requireError: "" });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.name !== "" && this.state.comment !== "") {
    } else {
      this.setState({ requireError: "Todos los campos requeridos" });
    }
  };

  render() {
    return (
      <div style={{ padding: "100px" }}>
        <Card style={{ background: "rgba(255,255,255,0.8)" }}>
          <Card.Body>
            <React.Fragment>
              {this.state.requireError !== "" && (
                <Alert variant="danger" style={{ fontSize: "12px" }}>
                  {this.state.requireError}
                </Alert>
              )}
              <Form onSubmit={this.submitHandler}>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="Nombre"
                    onChange={this.whenChangeHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Realimentación</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="comment"
                    value={this.state.comment}
                    placeholder="Escribe tus comentarios..."
                    onChange={this.whenChangeHandler}
                  />
                </Form.Group>
                <Form.Group style={{ textAlign: "center" }}>
                  <Button variant="success" type="submit">
                    Enviar
                  </Button>
                </Form.Group>
              </Form>
            </React.Fragment>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
