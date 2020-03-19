import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import services from "../../images/services.jpg";
import financial from "../../images/financial.jpeg";
import audit from "../../images/tax.jpg";
import reports from "../../images/reports.jpg";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Loading from 'react-fullscreen-loading';

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
          <div className="services">
            <Navbar />
            <div
              className="main-home"
              style={{
                marginLeft: "50px",
                color: "white",
                marginRight: "50px"
              }}
            >
              <h1 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Servicios
              </h1>
              <h5>Brindamos los mejores servicios</h5>
            </div>
          </div>
          <div style={{ padding: "50px" }} className="section">
            <h1 style={{ fontWeight: "bolder" }}>
              Consultoria Contable Tributario Bermúdez Sac
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
            <br />
            <section style={{ textAlign: "center" }}>
              <img
                src={services}
                alt="about"
                style={{ marginLeft: "10px", marginRight: "30px" }}
              />
              <br />
              <br />
              <img
                src={financial}
                alt="financial"
                style={{
                  height: "200px",
                  marginLeft: "10px",
                  marginRight: "30px"
                }}
              />
              <img
                src={audit}
                alt="audit"
                style={{
                  height: "200px",
                  marginLeft: "10px",
                  marginRight: "30px"
                }}
              />
              <img
                src={reports}
                alt="reports"
                style={{
                  height: "200px",
                  marginLeft: "10px",
                  marginRight: "30px"
                }}
              />
              <br />
              <br />
              <br />
              <Button
                variant="success"
                onClick={() => this.props.history.push("/servicios_adicionales")}
              >
                Servicios Adicionales{" "}
              </Button>
            </section>
          </div>
          <Footer />
        </div>
      );
    }
    else {
      return <Loading loading background="#eee" loaderColor="rgba(0,0,0,0.5)" />;
    }
  }
}

export default withRouter(Services);
