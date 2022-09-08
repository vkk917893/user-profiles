import React from "react";
import { Modal } from "react-bootstrap";


const ContentModal = ({ show, handleClose, children, title  }) => {

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default ContentModal;
