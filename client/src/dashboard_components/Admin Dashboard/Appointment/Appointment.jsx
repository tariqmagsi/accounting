import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { getFromStorage } from "../../../utils/storage";
import { withRouter } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import { CircularProgress } from "@material-ui/core";
import { Button } from "react-bootstrap";
import DateDialog from "./DateDialog";

class Appointment extends Component {
  state = {
    isLoggedIn: true,
    isPending: true,
    isActive: false,
    emailAdmin: "",
    passwordAdmin: "",
    id: "",
    date: "",
    email: "",
    pendingAppointments: {
      columns: [
        { label: "ID", field: "_id", sort: "asc", width: 150 },
        {
          label: "Nombre",
          field: "name",
          sort: "asc",
          width: 150
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 150
        },
        {
          label: "Número de teléfono",
          field: "number",
          sort: "asc",
          width: 150
        },
        {
          label: "Descripción",
          field: "description",
          sort: "asc",
          width: 150
        },
        {
          label: "Acción",
          field: "action",
          sort: "asc",
          width: 150
        }
      ],
      rows: []
    },
    error: "",
    approvedAppointments: {
      columns: [
        { label: "ID", field: "_id", sort: "asc", width: 150 },
        {
          label: "Nombre",
          field: "name",
          sort: "asc",
          width: 150
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 150
        },
        {
          label: "Número de teléfono",
          field: "number",
          sort: "asc",
          width: 150
        },
        {
          label: "Día de la cita",
          field: "date",
          sort: "asc",
          width: 150
        },
        {
          label: "Descripción",
          field: "description",
          sort: "asc",
          width: 150
        }
      ],
      rows: []
    }
  };

  changeDate = date => {
    this.setState({ date, isActive: true }, () => {
      this.updateAppointmentPatchRequest(this.state.id);
    });
  };

  initializeButtons = () => {
    let arr = this.state.pendingAppointments.rows;

    for (let i = 0; i < arr.length; i++) {
      arr[i] = {
        _id: arr[i]._id,
        name: arr[i].name,
        email: arr[i].email,
        number: arr[i].number,
        description: arr[i].description,
        action: (
          <Button
            variant="outline-success"
            size="sm"
            onClick={() => {
              this.setState({ open: true, id: arr[i]._id, email: arr[i].email });
            }}
          >
            Aprobar
          </Button>
        )
      };
    }
  };

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
            this.setState(
              {
                pendingAppointments: {
                  columns: this.state.pendingAppointments.columns,
                  rows: json.appointment
                }
              },
              () => {
                this.initializeButtons();
              }
            );
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
            this.setState({
              approvedAppointments: {
                columns: this.state.approvedAppointments.columns,
                rows: json.appointment
              }
            });
          } else {
            this.setState({ error: "Algo salió mal" });
          }
        })
        .catch(err => this.setState({ error: "Algo salió mal" }));
    } else {
      this.props.history.push("/Login");
    }
  };

  //Update appointment
  updateAppointmentPatchRequest = id => {
    const time = (parseInt(this.state.date.split("T")[1].split(":")[0])>0 && parseInt(this.state.date.split("T")[1].split(":")[0])<13) ? "AM" : "PM"
    const date = this.state.date.split("T")[0].split("-")[2]+"-"+this.state.date.split("T")[0].split("-")[1]+"-"+this.state.date.split("T")[0].split("-")[0]+" "+this.state.date.split("T")[1]+" "+time
    if (getFromStorage(process.env.REACT_APP_TOKEN_KEY)) {
      fetch(process.env.REACT_APP_UPDATE_APPOINTMENT_API + `?id=${id}&email=${this.state.emailAdmin}&password=${this.state.passwordAdmin}&emailClient=${this.state.email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getFromStorage(
            process.env.REACT_APP_TOKEN_KEY
          )}`
        },
        body: JSON.stringify({
          isApproved: true,
          date   
        })
      })
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.pendingAppointmentGetRequest();
            this.approvedAppointmentGetRequest();
            this.setState({ open: false, isActive: false });
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
            this.setState({emailAdmin: json.email.email, passwordAdmin: json.email.password})
          }
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getEmail()
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
            <h4>Equipo</h4>
            <br />
            <Button
              variant={this.state.isPending ? "danger" : "outline-danger"}
              onClick={() => {
                this.setState({ isPending: true });
              }}
            >
              Nombramientos pendientes
            </Button>{" "}
            <Button
              variant={this.state.isPending ? "outline-success" : "success"}
              onClick={() => {
                this.setState({ isPending: false });
              }}
            >
              Nombramientos aprobados
            </Button>
            <br />
            <br />
            {this.state.isPending && (
              <MDBDataTable
                striped
                bordered
                hover
                data={this.state.pendingAppointments}
                noBottomColumns
                small
                responsiveXl
              />
            )}
            {!this.state.isPending && (
              <MDBDataTable
                striped
                bordered
                hover
                data={this.state.approvedAppointments}
                noBottomColumns
                small
                responsiveXl
              />
            )}
            <DateDialog
              show={this.state.open}
              onHide={() => this.setState({ open: false })}
              approve={this.changeDate}
              isActive={this.state.isActive}
            />
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

export default withRouter(Appointment);
