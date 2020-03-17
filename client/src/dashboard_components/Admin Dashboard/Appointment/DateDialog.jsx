import React from "react";
import { Modal, Container, Button, Alert } from "react-bootstrap";
import LoadingOverlay from "react-loading-overlay";

const DateDialog = props => {
  const [date, setDate] = React.useState("");
  const [error, setError] = React.useState("");

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="sm"
      className="color"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ marginBottom: "-100px" }}
        >
          Aprobar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoadingOverlay
          active={props.isActive}
          spinner
          text="Por favor espera..."
        >
          <Container style={{ textAlign: "center" }}>
            {error !== "" && (
              <Alert variant="danger" style={{ fontSize: "12px" }}>
                {error}
              </Alert>
            )}
            <br />
            Día de la cita
            <br />
            <input
              type="datetime-local"
              value={date}
              onChange={e => {
                setDate(e.target.value);
                setError("");
              }}
            />
            <br />
            <br />
            <Button
              variant="success"
              size="sm"
              onClick={() => {
                if (date.trim() !== "") {
                  props.approve(date);
                } else {
                  setError("Fecha y hora requeridas");
                }
              }}
            >
              Aprobar
            </Button>
          </Container>
        </LoadingOverlay>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default DateDialog;
