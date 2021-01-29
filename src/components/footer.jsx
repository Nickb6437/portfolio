import React from "react";

import "./stylesheets/footer.css"

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div className="footerWrapper">

            <hr />
            <div className="footer">

                <div className="sides"></div>

                <div className="center">
                <img className="footerLogo" src={process.env.PUBLIC_URL + "/images/Logo.PNG"} alt="Logo" />
                <br />
                "Copyright <i className="far fa-copyright"></i> {year} Nick Brown"
                </div>

                <div className="sides">
                <a
                    href="https://www.linkedin.com/in/nicholas-brown-9964051a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i id="footerIcon" className="fab fa-linkedin"></i>
                </a>
                <a
                    href="https://github.com/Nickb6437"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i id="footerIcon" className="fab fa-github"></i>
                </a>
                </div>

            </div>
                
        </div>
        
    );
}

export default Footer;