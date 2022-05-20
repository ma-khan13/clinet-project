import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="nav-area">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col d-md-block nav-logo">
            <h1>
              <a href="#">Khan</a>
            </h1>
          </div>
          <div className="col-md-4 nav-drawer">
            <div className="drawer-item">
              <p>Anywhere</p>
              <p>Any week</p>
              <div className="add-guests">
                <p>Add guests</p>
                <span>
                  <FontAwesomeIcon icon={faCoffee} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-md-block nav-settings">
            <div className="setting">
              <div className="host">
                <a href="#">Become a Host</a>
              </div>
              <div className="language">
                <p>
                  <FontAwesomeIcon icon={faCoffee} />
                </p>
              </div>
              <div className="hamburger">
                <p>
                  <FontAwesomeIcon icon={faCoffee} />
                </p>
                <p>
                  <FontAwesomeIcon className="user" icon={faCoffee} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
