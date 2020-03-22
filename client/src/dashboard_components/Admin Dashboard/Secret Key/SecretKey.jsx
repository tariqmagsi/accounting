import React, { Component } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { getFromStorage } from "../../../utils/storage";
import { CircularProgress } from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";

class SecretKey extends Component {
  state = {
    secretKey: "",
    retypesecretKey: "",
    requireError: "",
    secretKeyLengthError: "",
    secretKeyContainError: "",
    secretKeyEqualError: "",
    error: "",
    success: "",
    oldsecretKey: "",
    oldPassError: "",
    isLoading: true
  };

  whenChangeHandler = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      requireError: "",
      secretKeyLengthError: "",
      secretKeyContainError: "",
      secretKeyEqualError: "",
      error: "",
      success: "",
      oldPassError: ""
    });
  };

  updatePostRequest = () => {
    fetch(process.env.REACT_APP_UPDATE_KEY_API, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ key: this.state.secretKey })
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoading: true }, () => {
          if (json.success) {
            this.setState({
              success: "Clave secreta modificada con éxito",
              error: "",
              oldPassError: "",
              secretKey: "",
              oldsecretKey: "",
              retypesecretKey: ""
            });
          } else {
            this.setState({
              error: "Algo salió mal",
              oldPassError: "",
              success: ""
            });
          }
        });
      })
      .catch(err => {
        this.setState({
          error: "Algo salió mal",
          oldPassError: "",
          isLoading: true,
          success: ""
        });
      });
  };

  checkOldsecretKey = () => {
    fetch(process.env.REACT_APP_OLD_KEY_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: this.state.oldsecretKey
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.updatePostRequest();
          this.setState({
            oldPassError: "",
            error: "",
            success: ""
          });
        } else {
          this.setState({
            oldPassError: "Clave secreta antigua equivocada",
            success: "",
            error: "",
            isLoading: true
          });
        }
      })
      .catch(err => {
        this.setState({
          error: "Algo salió mal",
          oldPassError: "",
          success: "",
          isLoading: true
        });
      });
  };

  updateHandler = (e) => {
    e.preventDefault()
    if (getFromStorage(process.env.REACT_APP_TOKEN_KEY)) {
      if (
        this.state.secretKey.trim() === "" ||
        this.state.retypesecretKey.trim() === "" ||
        this.state.oldsecretKey.trim() === ""
      ) {
        this.setState({ requireError: "Todos los campos requeridos", success: "" });
      } else if (this.state.secretKey.length < 8) {
        this.setState({
          secretKeyLengthError:
            "La nueva clave secreta debe ser mayor o igual a 8 caracteres", success: ""
        });
      } else if (this.state.secretKey.length >= 8) {
        let flag = false;
        if (
          this.state.secretKey.match(/[A-Z]/) &&
          this.state.secretKey.match(/[0-9]/)
        ) {
          flag = true;
          this.setState({
            secretKeyContainError: ""
          });
          if (this.state.secretKey !== this.state.retypesecretKey) {
            this.setState({
              secretKeyEqualError: "Las nuevas claves secretas no son iguales",
              success: ""
            });
          }
        } else if (
          !(
            this.state.secretKey.match(/[A-Z]/) &&
            this.state.secretKey.match(/[0-9]/)
          )
        ) {
          flag = false;
          this.setState({
            secretKeyContainError:
              "La nueva clave secreta debe contener 1 valor numérico y 1 letra mayúscula",
              success: ""
          });
        }
        if (flag) {
          this.setState({ isLoading: false }, () => {
            this.checkOldsecretKey();
          });
        }
      }
    } else {
      this.props.history.push("/Login");
    }
  };

  render() {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <div className="dashboard">
          <h4 style={{ marginTop: "70px" }}>Llave secreta</h4>
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
                this.state.secretKeyLengthError !== "" ||
                this.state.secretKeyContainError !== "" ||
                this.state.secretKeyEqualError !== "" ||
                this.state.oldPassError !== "" ||
                this.state.error !== "") && (
                <Alert variant="danger" style={{ fontSize: "12px" }}>
                  {this.state.oldPassError}
                  {this.state.oldPassError !== "" && <br />}
                  {this.state.error}
                  {this.state.error !== "" && <br />}
                  {this.state.requireError}
                  {this.state.requireError !== "" && <br />}
                  {this.state.secretKeyLengthError}
                  {this.state.secretKeyLengthError !== "" && <br />}
                  {this.state.secretKeyContainError}
                  {this.state.secretKeyContainError !== "" && <br />}
                  {this.state.secretKeyEqualError}
                </Alert>
              )}

              {this.state.success.trim() !== "" && (
                <Alert variant="success" style={{ fontSize: "12px" }}>
                  {this.state.success}
                </Alert>
              )}

              <Form style={{ textAlign: "left", width: "300px" }}  onSubmit={this.updateHandler}>
                <Form.Group>
                  <Form.Label>Vieja clave secreta:</Form.Label>
                  <Form.Control
                    type="password"
                    name="oldsecretKey"
                    value={this.state.oldsecretKey}
                    onChange={this.whenChangeHandler}
                    placeholder="Vieja clave secreta*"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Nueva clave secreta:</Form.Label>
                  <Form.Control
                    type="password"
                    name="secretKey"
                    value={this.state.secretKey}
                    onChange={this.whenChangeHandler}
                    placeholder="Nueva clave secreta*"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Vuelva a escribir la nueva clave secreta:</Form.Label>
                  <Form.Control
                    type="password"
                    name="retypesecretKey"
                    value={this.state.retypesecretKey}
                    onChange={this.whenChangeHandler}
                    placeholder="Vuelva a escribir la nueva clave secreta*"
                  />
                </Form.Group>
                <br />
                {this.state.isLoading ? (
                  <Form.Group>
                    <Button
                      variant="danger"
                      style={{ width: "100%" }}
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
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default SecretKey;
