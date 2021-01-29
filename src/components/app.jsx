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
        setLanding(true);
        setTimeout(() => {
            setLanding(false);
        }, 3000);
    }, []);

    const PageNotFound = () => (<strong>404! somethings not working!!</strong>);

    return (
        <> 
        {landing ? <Landing /> : 
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