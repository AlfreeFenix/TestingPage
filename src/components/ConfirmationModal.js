import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
function ConfirmationModal({modalValue, closeModal, confirmationDeleteData}) {


        return (
            <>
                <Modal show={modalValue}>
                    <Modal.Header closeButton onClick={closeModal}>
                        <Modal.Title>Eliminar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Esta a punto de eliminar un registro ¿Esta seguro?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>Cancelar</Button>
                        <Button variant="primary" onClick={confirmationDeleteData}>Eliminar</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
}

export default ConfirmationModal;
