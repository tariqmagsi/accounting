import React from "react";
import { Modal, Container, Button, Alert, Form } from "react-bootstrap";
import LoadingOverlay from "react-loading-overlay";

const EmailDialog = props => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [isActive, setIsActive] = React.useState(false)



  const sendEmailRequest = () => {
    setIsActive(true)
    fetch(process.env.REACT_APP_RESET_PASSWORD_API, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email
    })
    })
    .then(res => res.json())
    .then(json => {
        setIsActive(false)
        if (json.success) {
           setSuccess("Email enviado correctamente")
           setEmail("")
           setError("")
        } else {
           setError("Email extraviado")
           setSuccess("")
        }
    })
    .catch(err => {
        setError("Algo salió mal");
        setSuccess("")
    });
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="sm"
      className="color"
    >
      <LoadingOverlay
          active={isActive}
          spinner
          text="Por favor espera..."
        >
      <Modal.Header closeButton>
	  
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ marginBottom: "-100px" }}
        >
          Email
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
          <Container>
            {error !== "" && (
              <Alert variant="danger" style={{ fontSize: "12px" }}>
                {error}
              </Alert>
            )}
            {success !== "" && (
              <Alert variant="success" style={{ fontSize: "12px" }}>
                {success}
              </Alert>
            )}
            <Form onSubmit={(e) => {
                e.preventDefault()
                if (email.trim() !== "") {
                    sendEmailRequest()
                    setSuccess("")
                } else {
                    setError("Email requiredo");
                }
            }}
            >
                <Form.Group>
                    <Form.Label style={{textAlign: "left"}}>Email:</Form.Label>
                    <Form.Control type="email" value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                            setError("");
                            setSuccess("")
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <Button
                        variant="success"
                        size="sm"
                        style={{width:"100%"}}
                        type="submit"
                    >
                        Aprobar
                    </Button>
                </Form.Group>
            </Form>
          </Container>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerca</Button>
      </Modal.Footer>
	  </LoadingOverlay>
    </Modal>
  );
};
export default EmailDialog;
