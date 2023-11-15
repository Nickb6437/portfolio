import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import Landing from "./landing";


function App() {

    const [landing, setLanding]= useState(false);

    useEffect(() => {
        const visited = sessionStorage.getItem('landing');
        console.log(visited);
        if (visited) {
            setLanding(true);
        } else {
            setLanding(false);
            sessionStorage.setItem('landing', 'true');
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    }, []);

    console.log(landing);

    const PageNotFound = () => (
        <div className="site404">
            <p className="">
                Hmm a wrong turn you have taken!
            </p>
            <p className="">
                A distubance in the code there is.
            </p>
            <div className="yodaPush">
                <img src={process.env.PUBLIC_URL + "/images/yoda.PNG"} alt="yoda" />
                <h1>404</h1>
            </div>
        </div>
    );

    return (
        <> 
        {!landing ? <Landing /> : 
        <Router basename="/portfolio">
            <Header />
            <Switch>
                <Route path="/" exact component={About} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route component={PageNotFound}/>
            </Switch>
            <Footer />
        </Router>
        }
        </>
    );
}

export default App;
    