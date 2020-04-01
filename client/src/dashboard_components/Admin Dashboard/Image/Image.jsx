import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { getFromStorage } from "../../../utils/storage";
import { withRouter } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import { CircularProgress } from "@material-ui/core";
import { Button } from "react-bootstrap";

class Images extends Component {
  state = {
    isLoggedIn: true,
    isPending: true,
    isActive: false,
    id: "",
    images: {
      columns: [
        { label: "#", field: "_id", sort: "asc", width: 150 },
        {
          label: "Image",
          field: "name",
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
    
  };

  initializeButtons = () => {
    let arr = this.state.pendingAppointments.rows;

    for (let i = 0; i < arr.length; i++) {
      arr[i] = {
        _id: arr[i]._id,
        action: (
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => {
              this.setState({ id: arr[i]._id });
            }}
          >
            Eliminar
          </Button>
        )
      };
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
          this.setState({
            isLoggedIn: false
          });
        } else {
          this.setState({ isLoggedIn: false }, () => {
            this.props.history.push("/Login");
          });
        }
      })
      .catch(err => {
        this.setState({ isLoggedIn: false });
      });
    }

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
            <h4>Imágenes</h4>
            
            <MDBDataTable
                striped
                bordered
                hover
                data={this.state.images}
                noBottomColumns
                small
                responsiveXl
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

export default withRouter(Images);
