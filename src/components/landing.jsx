import React, {useState} from "react";
import Collapse from "@material-ui/core/Collapse";
import Fade from "@material-ui/core/Fade";

import "./stylesheets/landing.css";

function Landing() {

    const [logo, setLogo] = useState(false);
    const [text, setText] = useState(false);

    setTimeout(function () {
        setLogo(true);
    }, 500);

    setTimeout(function () {
        setText(true);
    }, 1500);

    return (
        <div className="wrapper">
            <Collapse in={logo} timeout={1000}>
                <img className="Landing" src={process.env.PUBLIC_URL + "/images/Logo.PNG"} alt="Logo" />
            </Collapse>
            <Fade in={text} timeout={500}>
                <h1>
                Nick Brown <br /> Aspiring Web Developer!
                </h1>
            </Fade>
        </div>
    );
} 

export default Landing;