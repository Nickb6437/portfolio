import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import "./stylesheets/header.css"

const initialState = { clicked: false };

function reducer(state, action) {
  switch (action.type) {
    case "active":
      return { clicked: !state.clicked };
    default:
      throw new Error();
  }
}

function Header() {

  const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div className="navbar col-12">
        <div className="nav-link-wrapper">
          <a 
            href="/portfolio/"
            className="brand-logo"
          >
            <img
              className="logo"
              alt="logo"
              src={process.env.PUBLIC_URL + "/images/Logo.PNG"}
            />
          </a>
        
          <div className={state.clicked ? "nav-links active" : "nav-links"}>
            <NavLink className="link"  to="/about"><i className="fas fa-user-tie"></i> About</NavLink>
            <NavLink className="link" to="/projects"><i className="fas fa-laptop-code"></i> Projects</NavLink>
            <NavLink className="link" to="/contact"><i className="fas fa-envelope"></i> Contact</NavLink>
            <a className="link mobile" href="https://www.linkedin.com/in/nicholas-brown-9964051a1/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a className="link mobile" href="https://github.com/Nickb6437" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i> Github</a>
          </div>   
        </div>

        <div className="mobile-icon"   onClick={() => dispatch({ type: "active" })}>
          <i className={state.clicked ? "fas fa-times-circle" : "fas fa-hamburger" }> </i>
        </div>
        
        <div className="nav-social">
          <a href="https://www.linkedin.com/in/nicholas-brown-9964051a1/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="https://github.com/Nickb6437" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i> Github</a>
        </div>
      
        
      </div>
    );
}

   
export default Header;