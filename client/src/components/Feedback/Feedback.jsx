import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Card } from "react-bootstrap";

export default class Feedback extends Component {
  state = {
    feedbacks: [
      {
        name: "Tariq",
        feedback:
          "TariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariq"
      },
      {
        name: "Tariq",
        feedback:
          "TariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariq"
      },
      {
        name: "Tariq",
        feedback:
          "TariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariq"
      },
      {
        name: "Tariq",
        feedback:
          "TariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariq"
      },
      {
        name: "Tariq",
        feedback:
          "TariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariq"
      },
      {
        name: "Tariq",
        feedback:
          "TariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariq"
      },
      {
        name: "Tariq",
        feedback:
          "TariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariq"
      },
      {
        name: "Tariq",
        feedback:
          "TariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariq"
      },
      {
        name: "Tariq",
        feedback:
          "TariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariqTariq"
      }
    ]
  };
  render() {
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
        <Footer />
      </div>
    );
  }
}
