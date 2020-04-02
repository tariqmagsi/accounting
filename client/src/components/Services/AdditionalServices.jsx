import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Loading from 'react-fullscreen-loading';
import male from "../../images/male.png"
import female from "../../images/female.png"
import ScrollAnimation from 'react-animate-on-scroll';
import { Card } from "react-bootstrap";

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
            <strong style={{ color: "rgb(15, 131, 131)" }}>Quienes Somos Nosotros:</strong>
            <br />
            <div>
            R. Maxwell Wheeless, inglés nativo hablante, estudiante de la escuela de
            post-grado in Cybersecurity (Seguridad Cibernética) en la Universidad de
            Baltimore, USA. Maxwell inició su educación en las mejores escuelas
            privadas del estado de Maryland, haciendo su educación primaria, media y
            secundaria en Boy’s Latin School of Maryland. Después, Maxwell obtuvo su
            bachillerato en Filosofía in Loyola University in Maryland, USA. Maxwell
            es un profesional muy destacado en su área, apenas empezó su cambio de
            carrera profesional de filosofía a Seguridad Cibernética el año pasado
            del 2019, participó en el National Cyber League (NCL) alcanzando el
            primer puesto en la Universidad de Baltimore, y a nivel bronce, en su
            categoría alcanzó el puesto 67/2092 y a nivel nacional de todo los
            Estados Unidos llegó al puesto 991/4149. Ver sus credenciales en su
            perfil de LinkedIn{" "}
            <a href="https://cyberskyline.com/verify/BNLFKY700GRC" alt="link">
              cyberskyline
            </a>{" "}
            . Maxwell demuestra ser un profesional con grande facilidades para
            afrontar cualquier reto que se le presente, y una habilidad innata de
            aprender fácilmente. Por otro lado, también goza de habilidades
            interpersonales pues su experiencia lo certifica, estuvo como manager en
            Salsaritas Westminster Restaurant por siete años y asimismo prestó
            servicios al cliente en prestigiosas compañías americanas tales como
            Men’s Wearhouse, donde fue vendedor ejecutivo en Joseph A. Bank, y
            Merrill Edge como Asesor de Soluciones Financieras. Recientemente,
            Maxwell trabaja en sus tiempos libres para los mismos americanos
            ayudándolos en la preparación de resúmenes, introducciones de Cvs, asi
            como también preparación de perfiles de Linkdein.
            <br />
            <br />
            <img src={male} alt="Maxwell" style={{height: "200px", float: "left", marginRight: "40px"}}/>
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
            <br />
            <br />
            <br />
            <br/>
            <br/>
            María Luz Barreto Bermúdez estudiante de la escuela de post-grado en
            Cybersecurity (Seguridad Cibernética) en la Universidad de Baltimore,
            USA. María Luz obtuvo su bachiller en ciencias como Química realizada en
            una de las mejores universidades privadas del Perú denominada Pontificia
            Universidad Católica del Perú. Años mas tarde, María Luz fue contratada
            por Petro Ecuador en el área de Química Computacional radicada en la
            Universidad San Francisco de Quito; luego, trabajó en la Universidad
            Peruana Cayetano Heredia en el departamento de Bioinformática y terminó
            haciendo un entrenamiento en Johns Hopkins University in the
            Biochemistry and Biophysics Department. María luz mostró gran interés en
            trabajar en el lado computacional y es así como empezó a realizar su
            maestría en CyberSecurity (Seguridad Cibernética) y también fue
            partícipe en la National Cyber League (NCL) donde alcanzó el segundo
            puesto en la Universidad de Baltimore, y a nivel bronce de cateogoría
            alcanzó el puesto 74/2092; por último, a nivel nacional de todo los
            Estados Unidos alcanzó el puesto 1021/4149. Ver sus credenciales:
            <a href="https://cyberskyline.com/report/YYP0EY8RB7GM" alt="link">
              cyberskyline
            </a>{" "}
            María Luz tiene experiencia como instructora educativa por mas de 10
            años, estuvo de asistenta de enseñanza en química 1 y 2, y física 3
            durante su pregrado. También, estuvo de asistenta educativa en química 2
            en la Universidad San Francisco de Quito, Ecuador. Asimismo, participó
            como miembro activo y cooperativo para preparar eventos de festividades,
            a nivel nacional, como el Año de la Química 2011. Actualmente, María Luz
            en sus tiempos libres se dedica a dictar clases privadas de español e
            inglés en Estados Unidos, y su mayor pasatiempo es explorar programas
            computacionales y profundizar sus habilidad en programación,
            especialmente en Python.
            <br />
            <br />
            <img src={female} alt="María Luz tiene" style={{height: "200px", float: "left", marginRight: "40px"}}/>
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
