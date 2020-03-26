import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Quote from "../Quote/Quote";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import Loading from 'react-fullscreen-loading';
import image from "../../images/image.jpg"
import ScrollAnimation from 'react-animate-on-scroll';


class Home extends Component {
  state = { isLoading: true };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 600);
  }
  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <Navbar />
          <div className="home">
            <div
              className="main-home"
              style={{
                marginLeft: "50px",
                color: "rgb(15, 131, 131)",
                marginRight: "50px"
              }}
            >
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                <h1 style={{ fontWeight: "bold",color: "rgb(15, 131, 131)" }}>
                  Asegure Su <br />
                  Mundo Financiero
                </h1>
                <h5>
                  Somos los expertos en impuestos dedicados a garantizar
                  <br />
                  eres un futuro financiero seguro y protegido.
                </h5>
              </ScrollAnimation>
              <br />
              <NavLink
                to="/servicios"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="success">APRENDE MÁS</Button>
              </NavLink>
            </div>
          </div>
        <Row className="quote">
          <Col style={{marginRight: "-50px", marginTop: "50px", marginBottom: "-50px"}}>
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
              <Quote />
            </ScrollAnimation>
          </Col>
          <Col>
            <img src={image} alt="image1" style={{ position: "relative", left: 0, width: "700px", height: "100%", top: 0, bottom: 0}}/>
          </Col>
        </Row>

        <Row style={{marginRight: "-50px", marginTop: "50px", marginBottom: "-50px", display: "none"}} className="quote1">
          <Quote />
        </Row>
        
          <Footer />
        </div>
      );
    } else {
      return <Loading loading background="#eee" loaderColor="rgb(15,131,131)" />;
    }
  }
}
export default Home;
