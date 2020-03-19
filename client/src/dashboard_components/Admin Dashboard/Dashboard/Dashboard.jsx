import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { getFromStorage } from "../../../utils/storage";
import { CircularProgress } from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";

class Dashboard extends Component {
  state = { isLoggedIn: true, approved: [], error: "", pending: [] };

  //Get list of pending
  pendingAppointmentGetRequest = () => {
    if (getFromStorage(process.env.REACT_APP_TOKEN_KEY)) {
      fetch(process.env.REACT_APP_GET_APPOINTMENT_API + "?isApproved=false", {
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
            this.setState({ pending: json.appointment });
          } else {
            this.setState({ error: "Algo salió mal" });
          }
        })
        .catch(err => this.setState({ error: "Algo salió mal" }));
    } else {
      this.props.history.push("/Login");
    }
  };

  //Get list of question and answers
  approvedAppointmentGetRequest = () => {
    if (getFromStorage(process.env.REACT_APP_TOKEN_KEY)) {
      fetch(process.env.REACT_APP_GET_APPOINTMENT_API + "?isApproved=true", {
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
            this.setState({ approved: json.appointment });
          } else {
            this.setState({ error: "Algo salió mal" });
          }
        })
        .catch(err => this.setState({ error: "Algo salió mal" }));
    } else {
      this.props.history.push("/Login");
    }
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
          this.pendingAppointmentGetRequest();
          this.approvedAppointmentGetRequest();
          this.setState({ isLoggedIn: false });
        } else {
          this.setState({ isLoggedIn: false }, () => {
            this.props.history.push("/Login");
          });
        }
      })
      .catch(err => {
        this.setState({ isLoggedIn: false });
      });
  };

  componentDidMount() {
    if (getFromStorage(process.env.REACT_APP_TOKEN_KEY)) {
      this.authenticateUser();
    } else {
      this.setState({ isLoggedIn: false }, () => {
        this.props.history.push("/Login");
      });
    }
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div>
          <Sidebar />
          <Navbar />
          <div className="dashboard">
            <br style={{ marginTop: "70px" }}/>
            <br />
            <br />
            <h4>Tablero</h4>
            <br />

            <Card
              style={{
                marginLeft: "auto",
                marginRight: "auto"
              }}
              align="center"
            >
              <Card.Body style={{ textAlign: "left" }}>
                Número Total De Citas Aprobadas:{" "}
                <strong>{this.state.approved.length}</strong>
                <br />
                <br />
                Número Total De Citas Pendientes:{" "}
                <strong>{this.state.pending.length}</strong>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{ textAlign: "center", marginTop: "100px" }}
          className="dashboard"
        >
          <CircularProgress />
          <br />
          Cargando por favor espere...
        </div>
      );
    }
  }
}
export default withRouter(Dashboard);
