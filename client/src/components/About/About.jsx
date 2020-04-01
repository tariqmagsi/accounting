import React,{Component} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import team from "../../images/team.jpg";
import Loading from 'react-fullscreen-loading';
import ScrollAnimation from 'react-animate-on-scroll';

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
              paddingTop: "100px",
              paddingLeft: "50px",
              paddingRight: "50px",
              marginTop: "-15px"
            }}
          >
            <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
            <div style={{ color: "rgb(15, 131, 131)" }}>
              <h1 style={{ fontWeight: "bolder", fontSize: "70px" }}>
                Sobre nosotros
              </h1>

              <h3 style={{  fontSize: "50px" }}>
                Conozca a Las Personas
                <br /> Que Lo Atienden.
              </h3>
            </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <div style={{ padding: "50px", marginBottom: "100px", marginTop: "50px" }}>
            <h1 style={{ color: "rgb(15, 131, 131)" }}>
              Consultoria Contable Tributario Bermúdez SAC
            </h1>
            <br />
            <img
              src={team}
              alt="about"
              style={{ width: "500px", float: "right", marginLeft: "10px" }}
            />
            <section>
              Somos contadores especialistas y con amplia experiencia en Tributación, 
              Laboral, Libros Contables Electrónicos (PLE), Contabilidad computarizada. Además, 
              ofrecemos servicios en facturación electrónica, elaboración de estados financieros 
              (mensuales, semestrales y anuales) según la necesidad de las empresas, amplia experiencia 
              en la preparación de homologaciones. Asimismo, brindamos servicios de auditoría, fiscalizaciones,
              cartas inductivas SUNAT, SUNAFIL, MINTRA y asesoramientos permanentes tributarios brindamos el 
              mejor plan de contingencia evitando multas.
              <br />
              <br />
              También, brindamos declaraciones PDT ( Mensuales Y Anuales), planilla electrónica, 
              PLAME y T-Registro. Declaración jurada anual de impuesto a la renta de personas jurídicas y 
              personas naturales, empresas transnacionales, sucursales, convenios internacionales, asesoría 
              financiera como sistemas de información que se adecuan perfectamente a las necesidades 
              de nuestro clientes. 
              <br />
              <br />
              Analizamos sus EE.FF y preparamos los documentos necesarios para poder adquirir un crédito bancario, 
              mejorando el aspecto financiero, constitución de empresas, contratos diversos, 
              servicios de auditoria como fiscalizaciones internas y balances mensuales.
            </section>
          </div>
          </ScrollAnimation>
          <div style={{ marginTop: "-21px" }}>
            <Footer />
          </div>
        </div>
      );
    } else {
      return <Loading loading background="#eee" loaderColor="rgb(15,131,131)" />
    }
  }
};

export default About;
