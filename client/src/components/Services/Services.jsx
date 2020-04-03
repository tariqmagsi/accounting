import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { withRouter } from "react-router";
import Loading from 'react-fullscreen-loading';
import ScrollAnimation from 'react-animate-on-scroll';
import "tachyons"

class Services extends Component {

  state = { flag: false, images: [] }

  fetchImages = () => {
    fetch(process.env.REACT_APP_IMAGE_API)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if (json.success) {
          this.setState({
            flag: true,
            images: json.images
          });
        } else {
          this.setState({
            flag: true
          });
        }
      })
      .catch(err =>
        this.setState({
          flag: true
        })
      );
  }

  componentDidMount(){
    this.fetchImages()
  }

  render() {
    if (this.state.flag) {
      return (
        <div>
          <Navbar />
          <div className="services">
            <div
              className="main-home"
              style={{
                marginLeft: "50px",
                color: "rgb(15, 131, 131)",
                marginRight: "50px"
              }}
            >
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
              <h1 style={{ fontWeight: "bold", marginBottom: "10px", color: "rgb(15, 131, 131)", }}>
                Servicios
              </h1>
              <h3>Brindamos los mejores servicios</h3>
              </ScrollAnimation>
            </div>
          </div>
         
          <div style={{ 
                padding: "50px", 
                paddingTop: "100px",
                paddingBottom: "100px"
              }}
            >
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <h1 style={{ color: "rgb(15, 131, 131)" }}>
              Consultoria Contable Tributario Bermúdez SAC
            </h1>
            <br />

            <section>
              Somos Contadores especialistas con amplia experiencia en Tributación, Laboral, Libros Contables
              electrónicos (PLE), Contabilidad Computarizada. Damos servicios en : facturación Electrónica,
              elaboración de Estados Financieros , Anuales , Semestrales y Mensuales.
              <br/>
              <br/>
              Además, prestamos servicios únicos y especializados como constitución de empresas, contratos
              diversos. No solo prestamos servicios contables financieros sino también exclusivos Servicios de
              Traducción e interpretación de de Inglés -Español y viceversa.
              <br/>
              <br/>
              Nos encontramos en Av. Elmer Faucett N 303 Oficina N203 Urbanización Maranga -San Miguel
            </section>
            </ScrollAnimation>
            <br />
            <section style={{ textAlign: "center" }}>
              {this.state.images.map(item =>
                <div className="ma2 pa2 v-top dib" key={item._id}>
                  <img
                    src={"data:img/png;base64," + item.image}
                    alt="photoss"
                    style={{
                      height: "200px",
                      width: "300px"
                    }}
                  />
                </div>
              )}
            </section>
          </div>
          <Footer />
        </div>
      );
    }
    else {
      return <Loading loading background="#eee" loaderColor="rgb(15,131,131)" />;
    }
  }
}

export default withRouter(Services);
