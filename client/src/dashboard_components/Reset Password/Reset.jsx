import React, {Component} from "react"
import { Form, Button, Alert } from "react-bootstrap"
import {withRouter} from "react-router-dom"
 
class Reset extends Component {
    state = {
        password: "", 
        reEnterPassword: "", 
        requireError: "", 
        passwordLengthError: "",
        passwordContainError: "",
        passwordEqualError: "",
        error: "",
        success: "",
        isLoading: true
    }

    whenChangeHandler = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value,
            requireError: "",
            passwordLengthError: "",
            passwordContainError: "",
            passwordEqualError: "",
            error: "",
            success: ""
        })
    }

    updatePostRequest = () => {
        fetch(process.env.REACT_APP_UPDATE_PROFILE_API, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.props.location.pathname.split("/")[3]}`
          },
          body: JSON.stringify({ password: this.state.password })
        })
          .then(res => res.json())
          .then(json => {
            this.setState({ isLoading: true }, () => {
              if (json.success) {
                this.setState({
                  success: "Contraseña cambiada con éxito",
                  error: "",
                  password: "",
                  reEnterPassword: ""
                });
              } else {
                this.setState({
                  error: "Algo salió mal",
                  success: ""
                });
              }
            });
          })
          .catch(err => {
            this.setState({
              error: "Algo salió mal",
              success: "",
              oldPassError: "",
              isLoading: true
            });
          });
      };

    updateHandler = (e) => {
        e.preventDefault()
        
        if (
        this.state.password.trim() === "" ||
        this.state.reEnterPassword.trim() === ""
        ) {
        this.setState({ requireError: "Todos los campos requeridos" });
        } else if (this.state.password.length < 8) {
        this.setState({
            passwordLengthError:
            "La nueva contraseña debe ser mayor o igual a 8 caracteres"
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
            if (this.state.password !== this.state.reEnterPassword) {
            flag=false
            this.setState({
                passwordEqualError: "Las nuevas contraseñas no son iguales",
                success: ""
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
                this.updatePostRequest()
            });
        }
        }
    }
 

    render(){
        return (
            <div style={{color: "rgb(15,131,131)", marginTop: "100px"}}>
                
                <h1 style={{marginBottom: "70px", textAlign: "center"}}>Restablecer la contraseña</h1>
                {(this.state.requireError !== "" ||
                this.state.passwordLengthError !== "" ||
                this.state.passwordContainError !== "" ||
                this.state.passwordEqualError !== "" ||
                this.state.error !== "") && (
                <Alert variant="danger" style={{ fontSize: "12px", marginLeft: "35%", marginRight: "35%" }}>
                    {this.state.error}
                    {this.state.error !== "" && <br />}
                    {this.state.requireError}
                    {this.state.requireError !== "" && <br />}
                    {this.state.passwordLengthError}
                    {this.state.passwordLengthError !== "" && <br />}
                    {this.state.passwordContainError}
                    {this.state.passwordContainError !== "" && <br />}
                    {this.state.passwordEqualError}
                </Alert>
                )}

                {this.state.success.trim() !== "" && (
                <Alert variant="success" style={{ fontSize: "12px", marginLeft: "35%", marginRight: "35%" }}>
                    {this.state.success}
                </Alert>
                )}
                <Form onSubmit={this.updateHandler} style={{marginLeft: "35%", marginRight: "35%"}}>
                    <Form.Group>
                        <Form.Label>Nueva contraseña:</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password"
                            value={this.state.password} 
                            placeholder="Nueva contraseña"
                            onChange={this.whenChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Reescriba nueva contraseña:</Form.Label>
                        <Form.Control 
                            type="password"
                            name="reEnterPassword" 
                            value={this.state.reEnterPassword} 
                            placeholder="Reescriba nueva contraseña"
                            onChange={this.whenChangeHandler}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group style={{textAlign: "center"}}>
                        <Button variant="success" type="submit">
                            Cambia la contraseña
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default withRouter(Reset)