import React from "react";
import logo from "../../images/Logo.png";
import FeedbackForm from "../Feedback/Form";
import { Phone } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div>
      <div className="form">
        <FeedbackForm />
      </div>

      <div
        className="footer"
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
          textAlign: "center"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img src={logo} alt="logo" />
        </div>
        <br />

        <div className="pa0 ma4 dib">
          <strong>Teléfonos</strong>
          <br />
          <br />
          <ul style={{ listStyle: "none" }}>
            <li>
              <Phone />
              (51)1-562-0663
            </li>
            <li>
              <Phone />
              (51)1-562-0657
            </li>
            <li className="subtract">
              <br />
            </li>
          </ul>
        </div>

        <div className="pa0 ma4 dib">
          <strong>Celulares</strong>
          <br />
          <br />
          <ul style={{ listStyle: "none" }}>
            <li>
              <Phone />
              986 617 069
            </li>
            <li>
              {" "}
              <Phone />
              991 696 527
            </li>
            <li className="subtract">
              <br />
            </li>
          </ul>
        </div>
        <div className="pa0 ma4 dib">
          <strong>Habla a</strong>
          <br />
          <br />
          <ul style={{ listStyle: "none" }}>
            <li>Av Elmer Faucett 303 - Oficina 203 - San Miguel-Lima .</li>
            <li className="subtract">
              <br />
            </li>
            <li className="subtract">
              <br />
            </li>
          </ul>
        </div>

        <div
          style={{
            paddingBottom: "50px",
            paddingTop: "-20px"
          }}
        >
          Somos Contadores especialistas tributarios, Laborales, Facturación
          Electrónica, contamos con amplia experiencia ofrecemos los servicios
          en el área contable, Teneduría de libros contables, contabilidad
          Computarizada , PLE -Contabilidad completa hasta la emisión de los
          EE.FF anuales, semestrales, mensuales, según la necesidad de las
          empresas, amplia experiencia en Homologaciones ofrecemos Asesoría
          tributaria, Declaraciones mensuales y anuales de SUNAT; Planilla
          electrónica, Plame y el T-Registro.-Asesoramiento en impuestos,
          evitamos contingencias tributarias, evitamos multas.
        </div>
      </div>
      <div style={{ backgroundColor: "#2F2F31", textAlign: "center" }}>
        <br />
        <span style={{ color: "silver" }}>
          Contenido © 2020 Financial Accounting Services, Inc.
        </span>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Footer;
