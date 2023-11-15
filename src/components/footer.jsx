import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/footer.css"

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div className="footerWrapper col-12">

            <div className="footer col-12 m-x-auto">

                <div className="left-col col">
                    <h4 className="">Contact</h4>
                    <ul className="list-reset">
                        <li>
                            <a href="tel:07786888391">
                                <i className="fas fa-mobile footer-contact__icon" />
                                07786888391
                            </a>
                        </li>
                        <li>
                            <a href="mailto:476.web.dev@gmail.com">
                                <i className="fas fa-envelope footer-contact__icon"/> 
                                476.web.dev@gmail.com
                            </a>
                        </li>
                        <li>
                            <Link to="/contact">
                                <i className="fas fa-paper-plane footer-contact__icon" />
                                Contact Form 
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="center col">
                    <h4 className="">Media Links</h4>
                    <div className="footer-icons">
                        <a
                            href="https://www.linkedin.com/in/nicholas-brown-9964051a1/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin footerIcon"></i>
                        </a>
                        <a
                            href="https://github.com/Nickb6437"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github footerIcon"></i>
                        </a>
                    </div>
                </div>

                <div className="right-col col">
                    <a href="/portfolio/" className="">
                       <img className="footerLogo" src={process.env.PUBLIC_URL + "/images/Logo.PNG"} alt="Logo" />
                    </a>
                    <p>
                        "Copyright <i className="far fa-copyright"></i> {year} Nick Brown"
                    </p>
                </div>

            </div>
                
        </div>
        
    );
}

export default Footer;