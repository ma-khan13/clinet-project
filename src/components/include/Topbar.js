import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const Topbar = () => {
    return (
      <div className="top-bar-container">
        <div className="container">
          <div className="row">
            <div className="col social-left">
              <a href='mailto:traveltour@gmail.com'><i className="fa-solid fa-envelope"/> traveltour@gmail.com</a>
              <a href='tel:01756876313'><i className="fa-solid fa-phone"></i> 01756876313</a>
            </div>
            <div className="col social-right">
              <a href='#'>
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a href='#'>
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href='#'>
                <i className="fa-brands fa-instagram-square"></i>
              </a>
              <a href='#'>
                <i className="fa-brands fa-whatsapp-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Topbar;
