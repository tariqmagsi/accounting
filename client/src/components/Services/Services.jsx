import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import financial from "../../images/financial.jpeg";
import audit from "../../images/tax.jpg";
import reports from "../../images/reports.jpg";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Loading from 'react-fullscreen-loading';
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component {

  state = { flag: false }

  componentDidMount(){
    setTimeout(() => this.setState({ flag: true }),
                600)
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
              Somos Contadores especialistas y con amplia experiencia en
              Tributación, laboral, Libros Contables electrónicos (PLE),
              Contabilidad Computarizada
              <br />
              Damos servicios en : facturación Electrónica, elaboración de Estados
              Financieros , Anuales , Semestrales , Mensuales
              <br />
              <br />
              Amplia experiencia en ; Auditorias, Fiscalizaciones , Cartas
              Inductivas -SUNAT Servicios en el preparado para Homologacion .
              Declaraciones Mensuales y Anuales PDTs Planilla Electrónica, Plame y
              T-Registro , Asesoría en tributación . Declaración jurada Anual de
              Impuesto a la Renta de personas jurídicas y personas naturales ,
              Empresas Trasnacionales, Sucursales , convenios Internacionales,
              Asesoría financiera: sistemas de información que se adecuan
              perfectamente a las necesidades de nuestros clientes, , analizamos
              sus EE.FF y preparamos los documentos necesarios para poder adquirir
              un crédito bancario, mejorando el aspecto financiero , Constitución
              de empresas, Contratos diversos , Servicios de auditoria:
              Fiscalizaciones internas y asesorías de empresas que no son nuestros
              clientes. Servicios con amplia experiencia de Traductores de Inglés
              -Español y Servicios de Intérprete de Español - Inglés o Inglés
              Español a nivel Internacional . Nos encontramos en Av Elmer Faucett
              N 303 Oficina N203 Urbanización Maranga -San Miguel
            </section>
            </ScrollAnimation>
            <br />
            <section style={{ textAlign: "center" }}>
              <img
                src={financial}
                alt="financial"
                style={{
                  height: "200px",
                  marginLeft: "10px",
                  marginRight: "30px"
                }}
              />
              <br style={{display: "none"}} className="image"/>
              <br style={{display: "none"}} className="image"/>
              <img
                src={audit}
                alt="audit"
                style={{
                  height: "200px",
                  marginLeft: "10px",
                  marginRight: "30px"
                }}
              />
              <br style={{display: "none"}} className="image"/>
              <br style={{display: "none"}} className="image"/>
              <img
                src={reports}
                alt="reports"
                style={{
                  height: "200px",
                  marginLeft: "10px",
                  marginRight: "30px"
                }}
              />
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
