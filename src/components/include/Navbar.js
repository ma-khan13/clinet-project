import React, { useState } from "react";
import { useEffect } from "react";
import { Button, ButtonGroup, Form, InputGroup, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchMenu from "../Pages/SearchMenu/SearchMenu";
import logo from './../../assets/images/logo.jpeg'
const Navbar = () => {
  const [handleMenoShow, setHandleMenuShow] = useState(false);
  const [searchMenoShow, setSearchMenoShow] = useState(false);
  const [active, setActive] = useState('')
  const [btnActive , setBtnActive] = useState('btn-active')

  const [showPassword , setShowPassword] = useState('password')
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
    setBtnActive('btn-active')
  }

  const handleRegister = () => {
    setShowLogin(false);
    setBtnActive("btn-active");
    setShowRegister(true);
  };

  const handleShowPassword = () => {
    if (showPassword === 'password') {
      setShowPassword('text')
    } else {
      setShowPassword("password");
    }
  }
  return (
    <nav className="nav-area">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3 d-md-block nav-logo">
            <h1>
              <Link to="/">
                <img src={logo} alt={"logo"} className={"logo"} />{" "}
              </Link>
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
            Log in OR Sign up
          </Link>
          <span></span>
          <Link to={"/"}>Host your home</Link>
          <Link to={"/"}>Host an experience</Link>
          <Link to={"/"}>Help</Link>
        </div>
      )}

      {/* Login form */}
      <>
        <Modal
          onClick={() => setHandleMenuShow(false)}
          className="modal-container"
          show={show}
          onHide={handleClose}
        >
          <Modal.Header className="border-0" closeButton></Modal.Header>
          <Modal.Title className="mx-auto text-uppercase">
            {!showLogin ? (
              <h2>
                Join now <span style={{ color: "red" }}>day</span>funa
              </h2>
            ) : (
              <h2>
                Welcome to <span style={{ color: "red" }}>day</span>funa
              </h2>
            )}
          </Modal.Title>
          <Modal.Body className="join-now">
            <div className="text-center">
              <ButtonGroup className="mb-2">
                <Button
                  onClick={handleLogin}
                  className={`btn-login ${
                    showLogin ? btnActive : '' }`}
                >
                  Log in
                </Button>
                <Button
                  onClick={handleRegister}
                  className={`btn-signup ${!showLogin ? btnActive : ""}`}
                >
                  Sign up
                </Button>
              </ButtonGroup>
            </div>
            <Form className="input-container">
              {showLogin && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className="input"
                      type="email"
                      placeholder="Enter Email or Phone"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        className="input"
                        type={showPassword}
                        placeholder="Enter your password"
                      />
                      <Button
                        onClick={handleShowPassword}
                        className="btn-show-pass input"
                        id="button-addon2"
                      >
                        {showPassword === "password" ? (
                          <i class="fa-solid fa-eye"></i>
                        ) : (
                          <i class="fa-solid fa-eye-slash"></i>
                        )}
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </>
              )}
              {showRegister && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className="input"
                      type="text"
                      placeholder="Enter your name"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className="input"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      className="input"
                      type="text"
                      placeholder="Enter your phone"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        className="input"
                        type={showPassword}
                        placeholder="Enter your password"
                      />
                      <Button
                        onClick={handleShowPassword}
                        className="btn-show-pass input"
                        id="button-addon2"
                      >
                        {showPassword === "password" ? (
                          <i class="fa-solid fa-eye"></i>
                        ) : (
                          <i class="fa-solid fa-eye-slash"></i>
                        )}
                      </Button>
                    </InputGroup>
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
