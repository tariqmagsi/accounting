import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { getFromStorage } from "../../../utils/storage";
import { withRouter } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import { CircularProgress } from "@material-ui/core";
import { Button, Alert } from "react-bootstrap";
import Files from "react-butterfiles";

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
          field: "image",
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
    success: "",
    files: [],
    errors: [],
    isUploading: false,
    isDeleting: false
  };

  fetchImages = () => {
    fetch(process.env.REACT_APP_IMAGE_API)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.initializeButtons(json.images)
          this.setState({
            files: [],
            errors: [],
            isLoggedIn: false
          });
        } else {
          this.setState({
            isLoggedIn: false
          });
        }
      })
      .catch(err =>
        this.setState({
          isLoggedIn: false
        })
      );
  }

  deleteImages = (id) => {
    fetch(process.env.REACT_APP_IMAGE_API + `/${id}`, {
      method: "DELETE",
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
          this.initializeButtons(json.images)
          this.setState({
            error: "",
            files: [],
            errors: [],
            isDeleting: false
          });
        } else {
          this.setState({
            error: "Algo salió mal",
            success: "",
            isLoading: true,
            isDeleting: false
          });
        }
      })
      .catch(err =>
        this.setState({
          isLoading: true,
          isDeleting: false
        })
      );
  }

  uploadImage = () => {
    const formData = new FormData();
    formData.append("file", this.state.files[0].src.file, this.state.files[0].src.file.name);

    fetch(process.env.REACT_APP_IMAGE_API, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.initializeButtons(json.images)
          this.setState({
            error: "",
            success: "Imagen cargada con éxito",
            files: [],
            errors: [],
            isUploading: false
          });
        } else {
          this.setState({
            error: "Algo salió mal",
            success: "",
            isLoading: true,
            isUploading: false
          });
        }
      })
      .catch(err =>
        this.setState({
          error: "Algo salió mal",
          success: "",
          isLoading: true,
          isUploading: false
        })
      );
  }

  initializeButtons = (rows) => {
    let arr = [];
    this.setState({ success: "", error: "" })
    rows.forEach((item, i) => {
      arr.push ({
        _id: i+1,
        image: <img src={`data:image/png;base64,${item.image}`} alt="photoss" style={{width: "200px", height:"100px"}}/>,
        action: (
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => {
              this.setState({isDeleting: true}, () => {this.deleteImages(item._id)})
            }}
          >
            Eliminar
          </Button>
        )
      })
    })

    this.setState({ images: {columns: this.state.images.columns, rows: arr}})
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
          this.fetchImages()
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
            <br/>

            {this.state.error !== "" && <Alert style={{fontSize: "12px"}} variant="danger">{this.state.error}</Alert>}
            {this.state.success !== "" && <Alert style={{fontSize: "12px"}} variant="success">{this.state.success}</Alert>}
            <Files
                multiple={false} 
                maxSize="100mb"
                accept={["image/jpg","image/jpeg", "image/png"]}
                onSuccess={files => this.setState({ files, errors: [], error: "", success: "" })}
                onError={errors => this.setState({ errors, files: [], error: "", success: "" })}
                convertToBase64={true}
            >
                {({ browseFiles, getDropZoneProps, getLabelProps }) => (
                    <>
                        <div {...getDropZoneProps({ className: "myDropZone" })}/>
                        <Button variant="success" onClick={browseFiles} size="sm">Seleccione archivos...</Button>
                        <ol>
                            {this.state.errors.length === 0 && 
                              this.state.files.map(file => (
                                <li key={file.name}>{file.name}</li>
                            ))}
                            {this.state.errors.map(error => (
                                <li key={error.file.name} style={{color: "red"}}>
                                    {error.file.name} - {error.type} (Error)
                                </li>
                            ))}
                            <br/>
                            {(this.state.files.length !== 0 && !this.state.isUploading) ? <Button variant="danger" size="sm" onClick={() => { this.setState({ isUploading: true },() => {this.uploadImage()}) }}>Cargar imagen</Button> :
                              this.state.files.length !== 0 && <CircularProgress />
                            }
                        </ol>
                    </>
                )}
            </Files>
            <br/>
            {!this.state.isDeleting ? 
              <MDBDataTable
                striped
                bordered
                hover
                data={this.state.images}
                noBottomColumns
                small
                responsiveXl
                searching={false}
              />
              :
              <CircularProgress />
            }
            
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
