import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Loading from 'react-fullscreen-loading';
import male from "../../images/male.png"
import female from "../../images/female.png"
import ScrollAnimation from 'react-animate-on-scroll';
import { Card, Row, Col } from "react-bootstrap";

class AdditionalServices extends Component {

    state = { flag: false }

    componentDidMount(){
      setTimeout(() => this.setState({ flag: true }),
                  600)
    }

    render(){
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
                <Card className="epa" style={{background: "rgba(15,131,131, 0.8)",textAlign:"center", width: "45%", marginLeft:"auto", marginRight: "auto"}}>
                  <Card.Body>
                    <h1 style={{ marginBottom: "10px", color: "white", }}>
                      Servicios de Traducción de Inglés
                    </h1>
                    <div style={{color: "white"}}>
                      Somos un grupo de profesionales nativos, y no nativos especializados en
                      la enseñanza y traducción de inglés.             
                    </div>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          
          <div style={{ padding: "50px", paddingTop: "100px", paddingBottom: "150px", marginLeft: "50px", marginRight: "50px" }} className="serviceMargin">
            <h1 style={{ color: "rgb(15, 131, 131)", textAlign: "center", borderBottom: "1px solid #eee" }}>Servicios de Traducción de Inglés</h1>
            <br/>
            
            <strong style={{ color: "rgb(15, 131, 131)" }}>Brindamos servicios de Traducción de inglés:</strong>
            <br /> CVs, Documentos, Contratos, Tesis, Artículos científicos.
            <br />
            <br />
            <strong style={{ color: "rgb(15, 131, 131)" }}>Interpretaciones:</strong>
            <br /> Spanish-English o viceversa English-Spanish. Cursos de Ingles
            online usamos Skype como plataforma a todo nivel: Nivel
            Básico-Intermedio- Avanzado, preparación para presentación de Posters y
            conferencias internacionales. Asimismo, preparación TOEFL para
            estudiantes que quieran estudiar en el extranjero.
            <br />
            <br />
            <h2 style={{ color: "rgb(15,131,131)", textAlign: "center", borderBottom: "1px solid #eee" }}>R. Maxwell Wheeless</h2>
            <br/>
            <strong style={{ color: "rgb(15, 131, 131)" }}>Quienes Somos Nosotros:</strong>
            <br />
            <div>
            R. Maxwell Wheeless, inglés nativo hablante, estudiante de la escuela de post-grado in Cybersecurity
            (Seguridad Cibernética) de la Universidad de Baltimore, USA. Maxwell inició su educación en las
            mejores escuelas privadas del estado de Maryland, realizando su educación primaria, media y
            secundaria en Boy’s Latin School of Maryland, USA. Tan pronto terminó la secundaria, Maxwell
            obtuvo su bachillerato en Filosofía in Loyola University in Maryland, USA. Maxwell es muy hábil y
            perspicaz ya que apenas inició su cambio de carrera profesional de Filosofía a Seguridad Cibernética
            el año pasado del 2019, participó en el National Cyber League (NCL) alcanzando el primer puesto en
            la Universidad de Baltimore; a nivel bronce, en su categoría alcanzó el puesto 67/2092 y a nivel
            nacional de todo los Estados Unidos llegó al puesto 991/4149. Ver sus credenciales en su perfil de
            LinkedIn{" "}
            <a href="https://cyberskyline.com/verify/BNLFKY700GRC" target="_blank" alt="link" rel="noopener noreferrer" >
              cyberskyline
            </a>{" "}
            . 
            <br/>
            <br/>
            Maxwell demuestra ser un profesional con grandes facilidades para afrontar cualquier reto que se le
            presente, y una habilidad innata de aprender muy fácilmente. Además, goza de habilidades
            interpersonales cuya experiencia lo certifica, estuvo como manager en Salsaritas Westminster
            Restaurant por siete años, Asesor de Soluciones Financieras en Merrill Edge y como vendedor
            ejecutivo en Men’s Wearhouse y Joseph A. Bank. Recientemente, Maxwell trabaja en sus tiempos
            libres para los mismos americanos ayudándolos en la preparación de sus hojas de vida Cvs,
            aplicaciones para ingresar a las universidades de pre-grado y pos-grado , así como también
            preparación en sus perfiles de Linkdein. A continuación, se muestra sus perfiles online donde labora
            en su tiempo libre.
            <ul>
              <li>
                <a href="https://www.upwork.com/o/profiles/users/~01480f117e94f00fa6/?fbclid=IwAR2R1tYbe_U7sd1nmkGQs74Z0vkcBGUmFQRIeSvv8QhLPxyC0ZVKZ0Gg3aM" target="_blank" rel="noopener noreferrer" >Upwork</a>
              </li>
              <li>
                <a href="https://www.fiverr.com/maxwheeless" target="_blank" rel="noopener noreferrer" >Fiverr</a>
              </li>
            </ul>
            <Row>
              <Col>
                <img src={male} alt="Maxwell" style={{height: "200px", marginRight: "40px", float: "left"}}/>
                <div style={{textAlign: "center"}}>
                  <i>
                    Maxwell es un joven profesional dispuesto a brindarte el mejor servicio
                    para que puedas aprender inglés en un tiempo prudencialmente corto, es
                    un educador muy paciente e interactivo con su audiencia, al ser un
                    inglés nativo hablante de los Estados Unidos adquirirás la correcta
                    pronunciación y expresiones cotidianas que no son enseñadas en
                    instituciones convencionales. Maxwell viene de una familia innata a la
                    lectura y escritura, su hermano menor es un famoso escritor llamado Nick
                    Wheeless establecido en San Diego, California. Maxwell está dispuesto a
                    que puedas convertir el inglés como tu segundo idioma nativo.
                  </i>
                </div>
              </Col>
            </Row>
            <br />
            <h2 style={{ color: "rgb(15,131,131)", textAlign: "center", borderBottom: "1px solid #eee" }}>
              María Luz
            </h2>
            <br/>
            María Luz Barreto Bermúdez, nativa hablante de español, estudiante de la escuela de post-grado en
            la rama de Cybersecurity (Seguridad Cibernética) de la Universidad de Baltimore, USA. María Luz
            obtuvo su bachiller en ciencias como Química realizada en una de las mejores universidades privadas
            del Perú denominada Pontificia Universidad Católica del Perú. Luego, María Luz fue contratada por
            Petro Ecuador en el área de Química Computacional, cuya investigación la realizó en la Universidad
            San Francisco de Quito en el Departamento de Química Computacional, ganó muchas becas para
            entrenamientos y conferencias internacionales. Inmediatamente, laburó en la Universidad Peruana
            Cayetano Heredia en el departamento de Bioinformática y terminó realizando un entrenamiento en
            Johns Hopkins University in the Biochemistry and Biophysics Department.
            <br/>
            <br/>
            María luz mostró gran interés en el lado computacional y es así como empezó a realizar su maestría
            en Seguridad Cibernética y también fue partícipe en la National Cyber League (NCL), en el cual
            alcanzó el segundo puesto en la Universidad de Baltimore; a nivel bronce, el puesto 74/2092 y a
            nivel nacional de los Estados Unidos alcanzó el puesto 1021/4149. Sus credenciales son mostrados
            en su perfil de LinkdeIn {" "}
            <a href="https://cyberskyline.com/report/YYP0EY8RB7GM" alt="link" rel="noopener noreferrer" >
              cyberskyline
            </a>.{" "}
            María Luz tiene experiencia como instructora educativa por
            más de 10 años ya que estuvo de asistenta de enseñanza en química 1 y 2, y física 3 durante su
            pregrado. Además, como asistenta educativa en química 2 en la Universidad San Francisco de Quito,
            Ecuador. Asimismo, participó como miembro activo y cooperativo para preparar eventos de
            festividades, a nivel nacional, como el Año de la Química 2011, entre otros. Actualmente, María Luz
            en sus tiempos libres se dedica a dictar clases privadas de español e inglés en Estados Unidos,
            traducción de inglés-español en ediciones de subtítulos de videos y su pasatiempo es explorar
            programas computacionales y profundizar su habilidad en programación, especialmente en Python.
            A continuación, se muestra el perfil online donde labora en su tiempo libre: {" "}
            <ul>
              <li style={{listStyle: "none"}}>
                <a href="https://www.fiverr.com/marialuz2019" target="_blank" rel="noopener noreferrer">Fiverr</a>
              </li>
            </ul>
            <Row>
              <Col>
                <img src={female} alt="María Luz tiene" style={{height: "200px", float: "left", marginRight: "40px"}}/>
                <div style={{textAlign: "center"}}>
                  <i>
                    María Luz es una joven profesional dispuesta a enseñarte el inglés en
                    una forma atractiva y dinámica como ella lo aprendió. Tiene la
                    experiencia que al no ser nativa hablante del inglés puede enseñarte
                    estrategias y métodos que harán tu aprendizaje ameno y productivo. Ella
                    perfeccionó su inglés estudiando cursos cortos en Bostón y Maryland.
                    Ella tiene una base sólida en gramática y técnicas de comprensión
                    lectora que te ayudarán a aprender el inglés como tu segunda lengua
                    nativa.En USA trabajó como servicio al
                    cliente bilingüe y enseña a inglés nativo
                    hablantes el español.
                  </i>
                </div>
              </Col>
            </Row>
            </div>
            <br />
          </div>
          
          </ScrollAnimation>
          <Footer />
        </div>
      );
    } else {
      return <Loading loading background="#eee" loaderColor="rgb(15,131,131)" />;
    }
  }
};

export default AdditionalServices;
