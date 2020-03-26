import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Loading from 'react-fullscreen-loading';
import { Card } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

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
           <Navbar />
          <div className="feedback">
            <div
              className="main-home"
              style={{
                marginLeft: "50px",
                color: "rgb(15, 131, 131)",
                marginRight: "50px"
              }}
            >
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
              <h1 style={{ fontWeight: "bold", color: "rgb(15, 131, 131)" }}>Comentarios</h1>
              </ScrollAnimation>
              <br />
              <br />
            </div>
          </div>

        
            <div>
            
            <div style={{
                color: "rgb(15,131,131)", 
                textAlign:"center",
                backgroundColor: "rgba(15, 131, 131, 0.7)",
                paddingTop: "100px",
                paddingBottom: "100px",
                paddingRight: "50px",
                paddingLeft: "50px"
              }}  
            >
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              {this.state.feedbacks.map((feedback, index) => (
                <div 
                  key={index} 
                >
                  <Card>
                    <Card.Body>
                      <p>
                        “{feedback.feedback}”<br/>
                        <span style={{textAlign: "right", fontWeight: "bold"}}>- {feedback.name}</span>
                      </p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <br/>
                </div>
              ))}
              {this.state.feedbacks.length === 0 && <h1 style={{textAlign: "center", color: "white"}}>No Hay Comentarios</h1>}
              </ScrollAnimation>
            </div>
          </div>
           
          <Footer />
        </div>
      );
    } else {
      return <Loading loading background="#eee" loaderColor="rgb(15,131,131)" />
    }
  }
}
