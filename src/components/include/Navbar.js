import React from "react";
const Navbar = () => {
  return (
    <nav className="nav-area">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col d-md-block nav-logo">
            <h1>
              <a href="#">TRAVEL TOUR</a>
            </h1>
          </div>
          <div className="col-md-4 nav-drawer">
            <div className="drawer-item">
              <p>Anywhere</p>
              <p>Any week</p>
              <div className="add-guests">
                <p>Add guests</p>
                <span>
                <i className="fa-solid fa-magnifying-glass"></i>
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
                  <i className="fa-solid fa-earth-americas"></i>
                </p>
              </div>
              <div className="hamburger">
                <p>
                  <i className="fa-solid fa-bars-staggered"></i>
                </p>
                <p>
                  <i className="fa-solid fa-circle-user"></i>
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
