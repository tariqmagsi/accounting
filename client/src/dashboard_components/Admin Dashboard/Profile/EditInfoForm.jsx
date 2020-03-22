import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { getFromStorage } from "../../../utils/storage";
import { withRouter } from "react-router";
import { CircularProgress } from "@material-ui/core";
import validator from "validator";

class EditInfoForm extends Component {
  state = {
    name: "",
    email: "",
    requireError: "",
    emailError: "",
    nameError: "",
    error: "",
    success: "",
    isLoading: true
  };

  whenChangeHanlder = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      requireError: "",
      emailError: "",
      nameError: "",
      error: "",
      success: ""
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

  updatePostRequest = () => {
    fetch(process.env.REACT_APP_UPDATE_PROFILE_API, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getFromStorage(
          process.env.REACT_APP_TOKEN_KEY
        )}`
      },
      body: JSON.stringify({ name: this.state.name, email: this.state.email })
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoading: true }, () => {
          if (json.success) {
            this.setState(
              { success: "Actualizado con éxito", error: "" },
              () => {
                this.props.authenticateUser();
              }
            );
          } else {
            this.setState({
              error: "El Email ya existe",
              success: ""
            });
          }
        });
      })
      .catch(err => {
        this.setState({
          error: "Algo salió mal",
          success: "",
          isLoading: true
        });
      });
  };

  updateHandler = (e) => {
    e.preventDefault()
    if (getFromStorage(process.env.REACT_APP_TOKEN_KEY)) {
      if (this.state.name.trim() === "" || this.state.email.trim() === "") {
        this.setState({ requireError: "Todos los campos requeridos" });
      } else if (!validator.isEmail(this.state.email)) {
        this.setState({ emailError: "Por favor proporcione un correo electrónico válido" });
      } else if (this.nameError()) {
        this.setState({ isLoading: false }, () => {
          this.updatePostRequest();
        });
      }
    } else {
      this.props.history.push("/Login");
    }
  };

  componentDidMount() {
    this.setState({ name: this.props.name, email: this.props.email });
  }

  render() {
    return (
      <div>
        {(this.state.requireError !== "" ||
          this.state.nameError !== "" ||
          this.state.emailError !== "" ||
          this.state.error) && (
          <Alert variant="danger" style={{ fontSize: "12px" }}>
            {this.state.requireError}
            {this.state.nameError}
            {this.state.emailError}
            {this.state.error}
          </Alert>
        )}
        {this.state.success !== "" && (
          <Alert variant="success" style={{ fontSize: "12px" }}>
            {this.state.success}
          </Alert>
        )}

        <Form style={{ textAlign: "left" }} onSubmit={this.updateHandler}>
          <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.whenChangeHanlder}
              placeholder="Nombre*"
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
            />
          </Form.Group>
          <br />
          {this.state.isLoading ? (
            <Form.Group style={{ textAlign: "center" }}>
              <Button
                variant="danger"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%"
                }}
                align="center"
                type="submit"
              >
                Actualizar
              </Button>
            </Form.Group>
          ) : (
            <div style={{ textAlign: "center" }}>
              <CircularProgress />
            </div>
          )}
        </Form>
      </div>
    );
  }
}

export default withRouter(EditInfoForm);
