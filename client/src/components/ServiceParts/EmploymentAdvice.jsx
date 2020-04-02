import React, { Component } from "react"
import { Container, Card } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "../Footer/Footer";
import Loading  from "react-fullscreen-loading";
import Navbar from "../Navbar/Navbar";

class EmploymentAdvice extends Component {
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
          <div className="employAdvice" style={{margin: 0}}>
            <div
              style={{
                paddingTop: "140px",
                color: "rgb(15, 131, 131)"
              }}
            >
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                <Card style={{background: "rgba(15,131,131, 0.8)",textAlign:"center", width: "45%", marginLeft:"auto", marginRight: "auto"}} className="epa">
                  <Card.Body>
                    <h1 style={{ marginBottom: "10px", color: "white", }}>
                      Asesoría Laboral
                    </h1>
                    <div style={{color: "white"}}>
                      Buscamos garantizar la estabilidad económica de toda tu empresa empezando desde tus empleadores brindando un sofisticado servicio en la administración de tu personal desde su contratación hasta el último día laboral pertinente.
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
                Asesoría Laboral
            </h5>
            <h1 style={{textAlign: "center", color: "rgb(15,131,131)", borderBottom: "1px solid #eee"}}>
              Servicios específicos
            </h1>
            <br/>
            <section>
                <Container>
                <ul className="ul-list">
                    <li>Declaraciones mensuales de la planilla electrónica de sus trabajadores (PDT ).</li>
                    <li>Evaluación y elaboración de planilla de pago de haberes de empleados y
                        obreros de distintos regímenes laborales.</li>
                    <li>Pago de Planilla de AFP NET mediante una cuenta corriente en soles de la
                        empresa afiliada a las AFPS´s.</li>
                    <li>Evaluación y/o elaboración de cálculos de gratificaciones, CTS, distribución de
                        utilidades, entre otros.</li>
                    <li>Analizamos los EE.FF y preparamos los documentos necesarios para poder
                        adquirir un crédito bancario en la búsqueda de mejoras en tu aspecto financiero.</li>
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

export default EmploymentAdvice