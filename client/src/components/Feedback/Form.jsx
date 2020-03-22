import React, { Component } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";

export default class FeedbackForm extends Component {
  state = { name: "", comment: "", requireError: "", error: "", successfully: "" };

  whenChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, requireError: "", error:"", successfully:"" });
  };

  feedbackRequest = () => {
    fetch(process.env.REACT_APP_CREATE_FEEDBACK_API,{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        feedback: this.state.comment
      })
    })
    .then(res => res.json())
    .then(json => {
        if (json.success) {
          this.setState({successfully: "Gracias por tus comentarios", name: "", comment: ""})
        } else {
          this.setState({error: "Algo salió mal (500)", successfully: ""})
        }
    })
    .catch(err => {
      this.setState({error: "Algo salió mal (500)", successfully: ""})
    })
}

  submitHandler = e => {
    e.preventDefault();
    if (this.state.name !== "" && this.state.comment !== "") {
      this.feedbackRequest()
    } else {
      this.setState({ requireError: "Todos los campos requeridos", successfully: "" });
    }
  };

  render() {
    return (
      <div style={{ padding: "30px" }}>
        <Card style={{ background: "rgba(255,255,255,0.8)" }}>
          <Card.Body>
            <React.Fragment>
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
