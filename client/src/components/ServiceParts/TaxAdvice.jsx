import React, { Component } from "react"
import { Container, Card } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "../Footer/Footer";
import Loading  from "react-fullscreen-loading";
import Navbar from "../Navbar/Navbar";

class TaxAdvice extends Component {
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
          <div className="advice">
            <div
              style={{
                paddingTop: "140px",
                color: "rgb(15, 131, 131)"
              }}
            >
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                <Card className="epa" style={{background: "rgba(15,131,131, 0.7)",textAlign:"center", width: "45%", marginLeft:"auto", marginRight: "auto"}}>
                  <Card.Body>
                    <h1 style={{ marginBottom: "10px", color: "white", }}>
                      Asesoría Tributaria
                    </h1>
                    <div style={{color: "white"}}>
                      La mejor especialización tributaria con más de 24 años de experiencia que hace
                      posible un manejo óptimo de impuestos en las compañías. Ofrecemos las mejores
                      asesorías tributarias y el mejor plan de contingencia evitando multas.
                    </div>
                  </Card.Body>
                </Card>
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
            <h5 style={{ color: "gray", textAlign: "center" }}>
              Asesoría Tributaria
            </h5>
            <h1 style={{textAlign: "center", color: "rgb(15,131,131)", borderBottom: "1px solid #eee"}}>
              Servicios específicos
            </h1>
            <br/>
            <section>
              <Container>
                <ul>
                    <li>Facturación electrónica.</li>
                    <br/>
                    <li>Servicios de auditoria.</li>
                        <br/>
                    <li>Servicios de fiscalizaciones SUNAT.</li><br/>
                    <li>Balances mensuales.</li><br/>
                    <li>Cartas inductivas SUNAT, SUNAFIL, MINTRA.</li><br/>
                    <li>Asesorías Tributarias permanentes.</li><br/>
                    <li>Plataforma de negocios con enfoque financiero.</li><br/>
                    <li>Brindamos declaraciones PDT( Mensuales y Anuales).</li><br/>
                    <li>Planillas electrónicas, PLAME y T-Registro.</li><br/>
                    <li>Declaración jurada anual de impuesto a la renta de personas jurídicas, personas
                        naturales, asesorías tributarios en consorcios y empresas transnacionales.</li>
                </ul>
              </Container>
            </section>
            </ScrollAnimation>
          </div>
          <Footer />
        </div>
      );
    } else {
        return <Loading loading background="#eee" loaderColor="rgb(15,131,131)" />;
      }
    }
}

export default TaxAdvice