import React, {useState, useEffect} from "react";
import Collapse from "@material-ui/core/Collapse";
import Fade from "@material-ui/core/Fade";

import "../stylesheets/landing.css";

function Landing() {

    const [logo, setLogo] = useState(false);
    const [text, setText] = useState(false);
   
    useEffect(() => {
        setTimeout(function () {
            setLogo(true);
        }, 500);

        setTimeout(function () {
            setText(true);
        }, 1500);
    }, []);


    return (
        <div className="landing-wrapper">
            <Collapse in={logo}>
                <img 
                    className="Landing" 
                    src={process.env.PUBLIC_URL + "/images/Logo.PNG"} 
                    alt="Logo" 
                    width="100%"
                    height="auto"               
                />
            </Collapse>
            <Fade in={text}>
                <>
                    <h1>
                        Nick Brown 
                    </h1>
                    <h3>
                        Full Stack Open-Source Web Developer!
                    </h3>
                </>
            </Fade>
        </div>
    );
}

export default Landing;