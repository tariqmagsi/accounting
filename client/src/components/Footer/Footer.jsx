import React from "react";
import FeedbackForm from "../Feedback/Form";
import { Facebook, Room, WhatsApp, Phone, Mail, KeyboardArrowUp } from "@material-ui/icons"
import { Row, Col, Button } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import { ScrollTo } from "react-scroll-to";

const Footer = () => {
  return (
    <div>
    
      <div className="form" style={{paddingBottom: "80px"}}>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <Row className="row2">
          <Col>
            <FeedbackForm />
          </Col>
          <Col style={{textAlign: "center"}}>
            <div className="map-responsive" style={{ marginTop: "230px", marginRight: "30px" }}>
              <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6310382105507!2d-77.10018668561759!3d-12.06888774559733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c960de5577ad%3A0xc0ca5503e1bb3658!2sOficina%20203%2C%20Av.%20Elmer%20Faucett%20303%2C%20Cercado%20de%20Lima%2015088%2C%20Peru!5e0!3m2!1sen!2s!4v1584904868334!5m2!1sen!2s"  
                frameBorder="0" 
                style={{border: "12px solid rgb(15,131,131)" }}
                allowFullScreen="" 
                aria-hidden="true" 
                tabIndex="0"
              ></iframe>
              <br/>
            </div>
            <br/>
            <div style={{color: "silver"}}>
              <Room/>
              Av Elmer Faucett 303 - Oficina 203 - San Miguel-Lima .
            </div>
          </Col>
        </Row>
        <br/>
        <Row style={{textAlign: "center", marginRight: "70px"}} className="row2">
          <Col>
            <span style={{color: "silver"}}>Teléfono</span><br/>
            <a href="tel:5115620663" style={{ color: "silver"}}>
              <span>&#9742;</span>
              <span style={{marginLeft: "5px"}}>(51)1-562-0663</span>
            </a>
            <br/>
            <a href="tel:5115620657" style={{color: "silver"}}>
              <span>&#9742;</span>
              <span style={{marginLeft: "5px"}}>(51)1-562-0657</span>
            </a>
          </Col>
          <Col>
            <span style={{color: "silver"}}>Celular</span><br/>
            <a href="tel:986617069" style={{color: "silver"}}>
              <Phone style={{fontSize: "18px"}}/>
              <span style={{marginLeft: "5px"}}>986 617 069</span>
            </a>
            <br/>
            <a href="tel:991696527" style={{color: "silver"}}>
              <Phone style={{fontSize: "18px"}}/>
              <span style={{marginLeft: "5px"}}>991 696 527</span>
            </a>
          </Col>
          <Col>
            <span style={{color: "silver"}}>Social</span><br/>
            <a href="https://www.facebook.com/Consultoria-contable-tributario-bermudez-SAC-100667508250436/" target="_blank" rel="noopener noreferrer">
              <Facebook style={{color: "silver"}} className="fb"/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+51986617069&text=" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{marginLeft: "20px"}}
            >
              <WhatsApp style={{color: "silver"}} className="whatsapp"/>
            </a>
            <a href="mailto:contabletributariobermudez@gmail.com" 
              style={{marginLeft: "20px"}}
            >
              <Mail style={{color: "silver"}} className="whatsapp"/>
            </a>
          </Col>
        </Row>
        <Row style={{display: "none"}} className="row1">
            <FeedbackForm />
        </Row>
        <br/>
        <Row style={{display: "none"}} className="row1">
          <div className="map-responsive" style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
            <iframe 
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6310382105507!2d-77.10018668561759!3d-12.06888774559733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c960de5577ad%3A0xc0ca5503e1bb3658!2sOficina%20203%2C%20Av.%20Elmer%20Faucett%20303%2C%20Cercado%20de%20Lima%2015088%2C%20Peru!5e0!3m2!1sen!2s!4v1584904868334!5m2!1sen!2s"  
              frameBorder="0" 
              style={{border: "12px solid rgb(15,131,131)" }}
              allowFullScreen="" 
              aria-hidden="true" 
              tabIndex="0"
            ></iframe>
            <br/>
          </div>
          <br/>
          <div style={{color: "silver", textAlign: "center"}}>
            <Room/>
            Av Elmer Faucett 303 - Oficina 203 - San Miguel-Lima .
          </div>
        </Row>
        <br/>
        <Row style={{display: "none", textAlign: "center"}} className="row1">
            <span style={{color: "silver"}}>Teléfono</span><br/>
            <a href="tel:5115620663" style={{ color: "silver"}}>
              <span>&#9742;</span>
              <span style={{marginLeft: "5px"}}>(51)1-562-0663</span>
            </a>
            <br/>
            <a href="tel:5115620657" style={{color: "silver"}}>
              <span>&#9742;</span>
              <span style={{marginLeft: "5px"}}>(51)1-562-0657</span>
            </a>
        </Row>
        <br/>
        <Row style={{display: "none", textAlign: "center"}} className="row1">
            <span style={{color: "silver"}}>Celular</span><br/>
            <a href="tel:986617069" style={{color: "silver"}}>
              <Phone style={{fontSize: "18px"}}/>
              <span style={{marginLeft: "5px"}}>986 617 069</span>
            </a>
            <br/>
            <a href="tel:991696527" style={{color: "silver"}}>
              <Phone style={{fontSize: "18px"}}/>
              <span style={{marginLeft: "5px"}}>991 696 527</span>
            </a>
        </Row>
        <br/>
        <Row style={{display: "none", textAlign: "center"}} className="row1">
          <span style={{color: "silver"}}>Social</span><br/>
            <a href="https://www.facebook.com/Consultoria-contable-tributario-bermudez-SAC-100667508250436/" target="_blank" rel="noopener noreferrer">
              <Facebook style={{color: "silver"}} className="fb"/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+51986617069&text=" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{marginLeft: "20px"}}
            >
              <WhatsApp style={{color: "silver"}} className="whatsapp"/>
            </a>
            <a href="mailto:contabletributariobermudez@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{marginLeft: "20px"}}
            >
              <Mail style={{color: "silver"}} className="whatsapp"/>
            </a>
        </Row>
        </ScrollAnimation>
      </div>
      
      <div style={{ backgroundColor: "#2F2F31", color: "silver", textAlign: "center", borderTop: "5px solid teal" }}>
        <div
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.5)",
            paddingTop: "50px",
            paddingRight: "30px",
            paddingLeft: "30px",
            paddingBottom: "30px"
          }}
        >
          Somos contadores especialistas y con amplia experiencia en Tributación, 
          Laboral, Libros Contables Electrónicos (PLE), Contabilidad computarizada. Además, 
          ofrecemos servicios en facturación electrónica, elaboración de estados financieros 
          (mensuales, semestrales y anuales) según la necesidad de las empresas, amplia experiencia 
          en la preparación de homologaciones. Asimismo, brindamos servicios de auditoría, fiscalizaciones,
          cartas inductivas SUNAT, SUNAFIL, MINTRA y asesoramientos permanentes tributarios brindamos el 
          mejor plan de contingencia evitando multas.
        </div>
        <br />
        <div style={{ color: "silver" }}>
          Copyright © 2020 Consultoria Contable Tributario Bermúdez SAC
        </div>
        
        <ScrollTo>
          {({ scroll }) => (
            <Button variant="default" 
              style={{
                background: "silver", 
                position: "absolute",
                right: "50px"
              }}
              className="foo-btn"
              onClick={() => scroll({ x: 0, y: 0, smooth: true })}
            >
              <KeyboardArrowUp/>
            </Button>
          )}
        </ScrollTo>
        <br/>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Footer;
