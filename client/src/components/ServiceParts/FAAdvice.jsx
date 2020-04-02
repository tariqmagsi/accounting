import React, { Component } from "react"
import { Container, Card } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "../Footer/Footer";
import Loading  from "react-fullscreen-loading";
import Navbar from "../Navbar/Navbar";

class FAAdvice extends Component {
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
          <div className="faAdvice">
            <div
              style={{
                paddingTop: "140px",
                color: "rgb(15, 131, 131)"
              }}
            >
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                <Card className="epa" style={{background: "rgba(15,131,131, 0.8)",textAlign:"center", width: "45%", marginLeft:"auto", marginRight: "auto"}}>
                  <Card.Body>
                    <h1 style={{ marginBottom: "10px", color: "white", }}>
                      Asesoría Contable Financiera
                    </h1>
                    <div style={{color: "white"}}>
                      Nuestra empresa con más de 17 años de experiencia hace énfasis en ofrecerte la
                      mejor búsqueda de soluciones efectivas de información financiera y mejor asesoría en
                      la toma de decisiones en la administración de sus empresas como personas naturales,
                      jurídicos, transnacionales, importadoras, exportadoras, y en general, a todo tipo de
                      cliente.
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
              Asesoría Contable Financiera
            </h5>
            <h1 style={{textAlign: "center", color: "rgb(15,131,131)", borderBottom: "1px solid #eee"}}>
              Servicios específicos
            </h1>
            <br/>
            <section>
              <Container>
                <ul className="ul-list">
                    <li>Contabilidad Computarizada.</li>
                    <li>Declaración de impuestos.</li>
                    <li>Tratamiento y desarrollo de estados financieros.</li>
                    <li>Devolución de beneficios tributarios (Percepción, IGV, Drawback).</li>
                    <li>Elaboración de Libros Contables.</li>
                    <li>Elaboración de estados financieros (mensuales, semestrales y anuales).</li>
                    <li>Gestión de documentación contable tributario.</li>
                    <li>Libros Contables Electrónicos (PLE).</li>
                    <li>Amplia experiencia en la preparación de Homologación.</li>
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

export default FAAdvice