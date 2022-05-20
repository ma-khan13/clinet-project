import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const Topbar = () => {
    return (
      <div className="top-bar-container">
        <div className="container">
          <div className="row">
            <div className="col social-left">
              <p><i className="fa-solid fa-envelope"/> traveltour@gmail.com</p>
              <p><i className="fa-solid fa-phone"></i> 01756876313</p>
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
