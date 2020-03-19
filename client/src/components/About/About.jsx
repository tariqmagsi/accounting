import React,{Component} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import team from "../../images/team.jpg";
import Loading from 'react-fullscreen-loading';

class About extends Component {

  state = { flag: false }
  
  componentDidMount(){
    setTimeout(() => this.setState({ flag: true }),
                600)
  }

  render() {
    if (this.state.flag){
      return (
        <div>
          <Navbar />
          <div
            className="about"
            style={{
              paddingTop: "140px",
              paddingLeft: "50px",
              paddingRight: "50px",
              marginTop: "-15px"
            }}
          >
            <div style={{ color: "white" }}>
              <h1 style={{ fontWeight: "bolder", fontSize: "70px" }}>
                Sobre nosotros
              </h1>

              <h3 style={{ fontWeight: "bolder", fontSize: "50px" }}>
                Conozca a Las Personas
                <br /> Que Lo Atienden.
              </h3>
            </div>
          </div>
          <div style={{ padding: "50px" }} className="section">
            <h1 style={{ fontWeight: "bolder" }}>
              Consultoria Contable Tributario Bermúdez Sac
            </h1>
            <br />
            <img
              src={team}
              alt="about"
              style={{ width: "500px", float: "right", marginLeft: "10px" }}
            />
            <section>
              Somos Contadores especialistas tributarios, Laborales, Facturación
              Electrónica, contamos con amplia experiencia ofrecemos los servicios
              en el área contable, Teneduría de libros contables, contabilidad
              Computarizada , PLE -Contabilidad completa hasta la emisión de los
              EE.FF anuales, semestrales, mensuales, según la necesidad de las
              empresas, amplia experiencia en Homologaciones ofrecemos Asesoría
              tributaria, Declaraciones mensuales y anuales de SUNAT; Planilla
              electrónica, Plame y el T-Registro.-Asesoramiento en impuestos,
              evitamos contingencias tributarias, evitamos multas.
              <br />
              <br />
              Auditorias, Fiscalizaciones , Cartas Inductivas -SUNAT
              <br />
              <br />
              Declaración jurada anual de personas jurídicas y personas naturales ,
              Empresas Trasnacionales, Sucursales , convenios Internacionales,
              Asesoría financiera: sistemas de información que se adecuan
              perfectamente a las necesidades de nuestros clientes, , analizamos sus
              EE.FF y preparamos los documentos necesarios para poder adquirir un
              crédito bancario, mejorando el aspecto financiero. Constitución de
              empresas, Contratos diversos , Servicios de auditoria: Fiscalizaciones
              internas y asesorías de empresas que no son nuestros clientes.
            </section>
          </div>
          <div style={{ marginTop: "-21px" }}>
            <Footer />
          </div>
        </div>
      );
    } else {
      return <Loading loading background="#eee" loaderColor="rgba(0,0,0,0.5)" />
    }
  }
};

export default About;
