import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Card } from "react-bootstrap";
import Loading from 'react-fullscreen-loading';

export default class Feedback extends Component {
  state = {
    feedbacks: [], error: "", flag: false
  };

  feedbackRequest = () => {
    fetch(process.env.REACT_APP_GET_FEEDBACK_API,{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(res => res.json())
    .then(json => {
        if (json.success) {
          this.setState({feedbacks: json.feedback, flag: true})
        } else {
          this.setState({error: "Comentarios no encontrados", flag: true})
        }
    })
    .catch(err => {
      this.setState({error: "Algo salió mal (500)", flag: true})
    })
  }

  componentDidMount(){
    this.feedbackRequest();
  }

  render() {
    if (this.state.flag){
      return (
        <div>
          <div className="feedback">
            <Navbar />

            <div
              className="main-home"
              style={{
                marginLeft: "50px",
                color: "white",
                marginRight: "50px"
              }}
            >
              <h1 style={{ fontWeight: "bold" }}>Comentarios</h1>
              <br />
              <br />
            </div>
          </div>

          {
            this.state.error === "" ? 
              <div className="section">
              <br />
              <br />

              <div style={{ marginLeft: "50px", marginRight: "50px" }}>
                {this.state.feedbacks.map((feedback, index) => (
                  <React.Fragment key={index}>
                    <Card>
                      <Card.Body>
                        <strong>{feedback.name}</strong>
                        <br />
                        <br />
                        <div>{feedback.feedback}</div>
                      </Card.Body>
                    </Card>
                    <br />
                  </React.Fragment>
                ))}
              </div>
              

              <br />
              <br />
            </div>
            :
            <h1 style={{textAlign:"center"}}>{this.state.error}</h1>
          }
          <Footer />
        </div>
      );
    } else {
      return <Loading loading background="#eee" loaderColor="rgba(0,0,0,0.5)" />
    }
  }
}
