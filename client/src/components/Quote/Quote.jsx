import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Quote extends Component {

  render(){
    return (
      <div
        className="Quote"
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
          marginTop: "-23px"
        }}
      >
        <br />
        <br />
        <h1
          style={{
            fontWeight: "bold",
            color: "black",
            background: "white",
            opacity: 0.7,
            textAlign: "center",
            borderRadius: "5px"
          }}
        >
          Consultoria Contable Tributario Bermúdez Sac
        </h1>

        <Card
          style={{
            opacity: 0.7,
            color: "black",
            fontSize: "20px",
            marginTop: "-21px"
          }}
        >
          <Card.Body>
            <div>
              Consultoria Contable Tributario Bermúdez Sac es una empresa de
              planificación fiscal y financiera de servicio completo que se
              especializa en cumplimiento de impuestos, administración de
              patrimonio y protección de patrimonio. Reconocemos que la
              planificación financiera es un proceso, no un producto. Es un
              proceso que implica formar relaciones, descubrir sus objetivos y
              desarrollar un plan para cumplirlos. Trabajamos con propietarios de
              negocios e individuos para crear estrategias únicas que lo ayuden a
              mantenerse enfocado en alcanzar sus sueños financieros.
            </div>
          </Card.Body>
        </Card>
        <br />
        <div style={{ textAlign: "center" }}>
          <NavLink
            to="/registro"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              variant="success"
              style={{ fontSize: "16px" }}
              className="button-home"
            >
              Regístrate ahora
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }
};

export default Quote;
