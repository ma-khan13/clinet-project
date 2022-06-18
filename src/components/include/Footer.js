import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import apple from '../../assets/images/apple.png'
import google from '../../assets/images/google.png'
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-2 col-3">
              <h4>Section</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-3">
              <h4>Section</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-3">
              <h4>Section</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-12">
                  <h4 className="mb-3">Download App</h4>
                  <div className="download-app mb-5 d-flex">
                    <Link to="/">
                      <img src={apple} alt="" />
                    </Link>
                    <Link to={"/"}>
                      <img src={google} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-12">
                  <p>
                    Subscribe now and receive weekly newsletter with new tips
                    and exciting offers or discounts.
                  </p>
                  <form>
                    <div className="input-group subscribe mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="inputGroupFile04"
                        placeholder="Enter your email"
                      />
                      <button
                        type="button"
                        id="inputGroupFileAddon04"
                        className={"view-more-button"}
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <Link to="/" className="text-decoration-none">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between pt-4 mt-5 border-top">
            <p>Copyright © {date} Travel Tour.</p>
            <div className="d-flex justify-content-end col-md-6 footer-right">
              <div className="language me-2">
                <span>
                  <small className="me-2">
                    <i className="fa-solid fa-earth-americas"></i>
                  </small>
                </span>
                <span>
                  <small>English(US)</small>
                </span>
              </div>
              <div className="currency me-2">
                <span>$</span>
                <span>
                  <small>USD</small>
                </span>
              </div>
              <div className="support">
                <span>
                  <small>Support & resources</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
