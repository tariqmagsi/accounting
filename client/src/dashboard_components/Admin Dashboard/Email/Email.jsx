import React, { Component } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { getFromStorage } from "../../../utils/storage";
import { CircularProgress } from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import validator from 'validator'

class Email extends Component {
  state = {
    email: "",
    password: "",
    requireError: "",
    error: "",
    success: "",
    isLoading: true,
  };

  whenChangeHandler = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      requireError: "",
      error: "",
      success: ""
    });
  };

  updatePostRequest = () => {
    fetch(process.env.REACT_APP_UPDATE_EMAIL_API, {
      method: "PATCH",
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
        this.setState({ isLoading: true }, () => {
          if (json.success) {
            this.setState({
              success: "Correo electrónico cambiado correctamente",
              error: "", isLoading: true
            });
          } else {
            this.setState({
              error: "Algo salió mal",
              success: "", isLoading: true
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
    this.setState({isLoading: false}, () => {
      if (getFromStorage(process.env.REACT_APP_TOKEN_KEY)) {
        if (
          this.state.email.trim() === "" ||
          this.state.password.trim() === ""
        ) {
          this.setState({ requireError: "Todos los campos requeridos", isLoading: true });
        } else {
          if (validator.isEmail(this.state.email)) {
              this.updatePostRequest()
          } else {
              this.setState({ requireError: "Correo electrónico no válido", isLoading: true})
          }
        }
      } else {
        this.props.history.push("/Login");
      }
    })
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
            this.setState({email: json.email.email, password: json.email.password})
          }
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getEmail()
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <div className="dashboard">
          <h4 style={{ marginTop: "70px" }}>Email</h4>
          <br />
          <Card
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              overflow: "auto"
            }}
            align="center"
          >
            <Card.Body>
              {(this.state.requireError !== "" ||
                this.state.error !== "") && (
                <Alert variant="danger" style={{ fontSize: "12px" }}>
                  {this.state.error}
                  {this.state.requireError}
                </Alert>
              )}

              {this.state.success.trim() !== "" && (
                <Alert variant="success" style={{ fontSize: "12px" }}>
                  {this.state.success}
                </Alert>
              )}

              <Form style={{ textAlign: "left", width: "300px" }} onSubmit={this.updateHandler}>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.whenChangeHandler}
                    placeholder="Email*"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.whenChangeHandler}
                    placeholder="Contraseña*"
                  />
                </Form.Group>
                <br />
                {this.state.isLoading ? (
                  <Form.Group>
                    <Button
                      variant="danger"
                      type="submit"
                      style={{ width: "100%" }}
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
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Email;
