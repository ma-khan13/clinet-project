import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../Pages/Profile/Profile";
const Navbar = () => {
  const [handleMenoShow, setHandleMenuShow] = useState(false);
  const handleMenuShow = ()=> {
    
    if (handleMenoShow === false) {
      setHandleMenuShow(true);
    } else {
      setHandleMenuShow(false);
    }
    
  }
  
  return (
    <nav className="nav-area">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3 d-md-block nav-logo">
            <h1>
              <a href="#">TRAVEL TOUR</a>
            </h1>
          </div>
          <div className="col-md-5 nav-drawer">
            <div className="drawer-item">
              <p>Anywhere</p>
              {/* <input type="text" placeholder="Anymhere" /> */}
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
              <button onClick={handleMenuShow} className="border-0 hamburger">
                <p>
                  <i className="fa-solid fa-bars-staggered"></i>
                </p>
                <p>
                  <i className="fa-solid fa-circle-user"></i>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {handleMenoShow && (
        <div className="profile-menu d-flex flex-column">
          <Link to={"/"}>Sign up</Link>
          <Link to={"/"}>Log in</Link>
          <span></span>
          <Link to={"/"}>Host your home</Link>
          <Link to={"/"}>Host an experience</Link>
          <Link to={"/"}>Help</Link>
        </div>
      )}
      {/* {handleMenoShow && (
        <Profile></Profile>
      )} */}
    </nav>
  );
};

export default Navbar;
