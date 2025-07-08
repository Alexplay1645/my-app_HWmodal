import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { Vkhid } from './Vkhid';
import { Reestratsiya } from './Reestratsiya';

export function AutorizationHW() {
  const [show, setShow] = useState(false);
  const [tabVkhid, setTabVkhid] = useState(true);
  const [tabReestr, setTabReestr] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  function showVkhid() {
    setTabVkhid(true);
    setTabReestr(false);
  }

  function showReestr() {
    setTabVkhid(false);
    setTabReestr(true);
  }

  return (
    <>
      <div className="center-button">
        <Button variant="primary" className="open-btn" onClick={handleShow}>
          Відкрити вікно авторизації
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="no-border">
          <Modal.Title className="title">
            <span style={{ display: tabVkhid ? 'block' : 'none' }}>Авторизація</span>
            <span style={{ display: tabReestr ? 'block' : 'none' }}>Реєстрація</span>
          </Modal.Title>
        </Modal.Header>

        <div className="tab-switch">
          <span className="tab" id={tabVkhid ? 'active-tab' : ''} onClick={showVkhid}>
            Вхід
          </span>
          <span className="tab" id={tabReestr ? 'active-tab' : ''} onClick={showReestr}>
            Реєстрація
          </span>
        </div>

        <Modal.Body>
          <div>
            <div style={{ display: tabVkhid ? 'block' : 'none' }}>
              <Vkhid />
            </div>
            <div style={{ display: tabReestr ? 'block' : 'none' }}>
              <Reestratsiya />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
