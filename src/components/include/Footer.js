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
        <div class="container">
          <div class="row my-5">
            <div class="col-3">
              <h4>Section</h4>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-3">
              <h4>Section</h4>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-2">
              <h4>Section</h4>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-4">
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
                    <div class="input-group subscribe mb-3">
                      <input
                        type="email"
                        class="form-control"
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

          <div class="d-flex justify-content-between pt-4 mt-5 border-top">
            <p>© {date} Company, Inc. All rights reserved.</p>
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
      {/* <section className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 footer-left">
              <div className="footer-link">
                <span className="copyright">
                  <small>Copyright &copy; {date} khan, Inc.</small>
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
                <span>
                  <small>Support & resources</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Footer;
