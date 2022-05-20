import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const Topbar = () => {
    return (
      <div className="top-bar-container">
        <div className="container">
          <div className="row">
            <div className="col social-left">
              <p>Email : mdasifkhan089@gmail.com</p>
              <p>Phone : 01756876313</p>
            </div>
            <div className="col social-right">
              <a href='#'>
                <FontAwesomeIcon icon={faCoffee} />
              </a>
              <a href='#'>
                <FontAwesomeIcon icon={faCoffee} />
              </a>
              <a href='#'>
                <FontAwesomeIcon icon={faCoffee} />
              </a>
              <a href='#'>
                <FontAwesomeIcon icon={faCoffee} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Topbar;