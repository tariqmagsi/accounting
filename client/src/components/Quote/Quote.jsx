import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


class Quote extends Component {

  render(){
    return (
      <div
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <br />
        <br />
      <div style={{ marginBottom: "40vh" }}>
        <h1
          style={{
            background: "white",
            color: "rgb(15, 131, 131)"
          }}
        >
          Consultoria Contable Tributario Bermúdez SAC
        </h1>

        <div>
          Consultoria Contable Tributario Bermúdez SAC es una empresa de
          planificación fiscal y financiera de servicio completo que se
          especializa en cumplimiento de impuestos, administración de
          patrimonio y protección de patrimonio. Reconocemos que la
          planificación financiera es un proceso, no un producto. Es un
          proceso que implica formar relaciones, descubrir sus objetivos y
          desarrollar un plan para cumplirlos. Trabajamos con propietarios de
          negocios e individuos para crear estrategias únicas que lo ayuden a
          mantenerse enfocado en alcanzar sus sueños financieros.
        </div>
         
        <br />
        <div>
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
      </div>
    );
  }
};

export default Quote;
