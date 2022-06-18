import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchMenu from "../Pages/SearchMenu/SearchMenu";
const Navbar = () => {
  const [handleMenoShow, setHandleMenuShow] = useState(false);
  const [searchMenoShow, setSearchMenoShow] = useState(false);
  const [active, setActive] = useState('')
  
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleMenuShow = ()=> {
    
    if (handleMenoShow === false) {
      setHandleMenuShow(true);
    } else {
      setHandleMenuShow(false);
    }
    
  }

  const handleSearchMenu = () => {
    if (searchMenoShow === false) {
      setSearchMenoShow(true);
    } else {
      setSearchMenoShow(false);
    }
  }
  
  const  handleLogin = () => {
    setShowLogin(true)
    setShowRegister(false)
  }

  const handleRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };
  return (
    <nav className="nav-area">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3 d-md-block nav-logo">
            <h1>
              <a href="#">TRAVEL TOUR</a>
            </h1>
          </div>
          <div onClick={handleSearchMenu} className="col-md-5 nav-drawer">
            <div className="drawer-item">
              <p onClick={() => setActive("where")}>Anywhere</p>
              <p onClick={() => setActive("checkIn")}>Any week</p>
              <div onClick={() => setActive("who")} className="add-guests">
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
        {searchMenoShow && <SearchMenu active={active} />}
      </div>
      {handleMenoShow && (
        <div className="profile-menu d-flex flex-column">
          <Link onClick={handleShow} to={"/"}>
            Log in
          </Link>
          <Link onClick={handleShow}
            to={"/"}
          >
            Sign up
          </Link>
          <span></span>
          <Link to={"/"}>Host your home</Link>
          <Link to={"/"}>Host an experience</Link>
          <Link to={"/"}>Help</Link>
        </div>
      )}

      {/* Login form */}
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="border-0" closeButton>
          </Modal.Header>
          <Modal.Title className="mx-auto">TRAVEL TOUR</Modal.Title>
          <Modal.Body>
            <div className="text-center">
              <Button
                className="me-2"
                variant="secondary"
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button variant="primary" onClick={handleRegister}>
                Register
              </Button>
            </div>
            <Form>
              {showLogin && (
                <>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                </>
              )}
              {showRegister && (
                <>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                </>
              )}
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </nav>
  );
};

export default Navbar;
