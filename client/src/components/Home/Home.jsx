import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Quote from "../Quote/Quote";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

class Home extends Component {
  state = { isLoading: true };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 600);
  }
  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <div className="home">
            <Navbar />
            <div
              className="main-home"
              style={{
                marginLeft: "50px",
                color: "white",
                marginRight: "50px"
              }}
            >
              <h1 style={{ fontWeight: "bold" }}>
                Asegure Su <br />
                Mundo Financiero
              </h1>
              <h5>
                Somos los expertos en impuestos dedicados a garantizar
                <br />
                eres un futuro financiero seguro y protegido.
              </h5>
              <br />
              <NavLink
                to="/servicios"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="success">APRENDE MÁS</Button>
              </NavLink>
            </div>
          </div>
          <Quote />
          <Footer />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default Home;
