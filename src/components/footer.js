import React from 'react';
import {Link} from 'react-router-dom';
import image from '../assets/Recipes.png';

const footer = () => {
  return (
      <nav className="navbar bg-light-gray p-4 d-flex w-100">
        <Link className="navbar-brand pl-5" to="/">
          <img src={image} className="img-fluid" width="200px" alt="Recipes.am" />
        </Link>
          <ul className="nav justify-content-end flex-column">
            <div className="nav justify-content-end">
              <li className="nav-item px-3 my-auto">
                <Link className="nav-link" to="/about" style={{color: "#F7F7F7", opacity: "0.8"}}>Մեր մասին</Link>
              </li>
              <li className="nav-item px-3 my-auto">
                <Link className="nav-link" to="/partners" style={{color: "#F7F7F7", opacity: "0.8"}}>Դառնալ գործընկեր</Link>
              </li>
              <li className="nav-item px-3 my-auto">
                <Link className="nav-link" to="/contact" style={{color: "#F7F7F7", opacity: "0.8"}}>Կապ մեզ հետ</Link>
              </li>
              <li className="nav-item px-3 my-auto">
                <Link className="nav-link" to="/privacy" style={{color: "#F7F7F7", opacity: "0.8"}}>Գաղտնիություն</Link>
              </li>
            </div>
            <div className="nav justify-content-end">
              <span className="pt-3 px-3">© 2020 by Hrach Galstyan. </span>
            </div>
          </ul>
      </nav>
  );
}

export default footer;
