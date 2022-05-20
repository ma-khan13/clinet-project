import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const date = new Date().getFullYear()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <section className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-left">
            <div className="footer-link">
              <span className="copyright">
                <small>&copy; {date} khan, Inc.</small>
              </span>
              <ul>
                <li>
                  <a href="#">
                    <small>Privacy</small>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <small>Terms</small>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <small>Sitemap</small>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <small>Destinations</small>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 footer-right">
            <div className="language">
              <span>
                <small>
                  <FontAwesomeIcon icon={faCoffee} />
                </small>
              </span>
              <span>
                <small>English(US)</small>
              </span>
            </div>
            <div className="currency">
              <span>$</span>
              <span>
                <small>USD</small>
              </span>
            </div>
            <div className="support">
              <div onClick={ handleShow}>
                <span>
                  <small>Support & resources</small>
                </span>
                <span>^</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Button onClick={handleShow}>Launch</Button> */}
      <Offcanvas
        className="footer-big"
        show={show}
        onHide={handleClose}
        placement="bottom"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body closeButton>
          <div className="row">
            <div className="col-md-3">
                <h6>Support</h6>
                <ul>
                  <li>Help Center</li>
                  <li>AirCover</li>
                  <li>Safety information</li>
                  <li>Supporting people with disabilities</li>
                  <li>Cancellation options</li>
                  <li>Our COVID-19 Response</li>
                  <li>Report a neighborhood concern</li>
                </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
};

export default Footer;
