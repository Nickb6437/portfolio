import React from "react";
import "./stylesheets/about.css"

function About() {
    return (
        <div className="wrapper">
            <div className="header"> 
            <div>
            <img className="circle-img" src={process.env.PUBLIC_URL + "/images/ProfilePic.JPG"} alt="Profile"/>
            </div>
                <h1 id="heading">Hi I'm <br /> Nick Brown </h1> 
            </div>

            <h1 id="heading2"><strong>An Aspiring Web Developer!</strong></h1>

            <div className="text-area">   
                <p>Welcome and thank you for visiting my portfolio site. <br/>
                Like many in 2020 I found myself redundant due to the events of the year. <br />
                I have been in print & design for 14 years with experience in lithographic print, digital print, print finishing <br />
                & digital design, using such designs suites as Adobe CS6, Indesign, Photoshop, Illustrator & Dreamweaver, however... <br />
                I feel this now opened a great new opportunity for me to branch out, learn new skills and embark on an exciting new career path. <br/>
                <br />During 5 months of furlough in 2020 I embarked on the challenge to learn the basics of web development. I have been expeanding my skills and knowledge ever since. You can see some of the languages and packages I have learnt bellow..  </p>
                
               
                <div className="iconGrid">
                <div><img className="icon html" src={process.env.PUBLIC_URL + "/images/HTML5.PNG"} alt="HTML 5"/></div>
                <div><img className="icon html" src={process.env.PUBLIC_URL + "/images/CSS3.PNG"} alt="CSS 3"/></div>
                <div><img className="icon html" src={process.env.PUBLIC_URL + "/images/Js.PNG"} alt="Js"/></div>
                <div><img className="icon jquery" src={process.env.PUBLIC_URL + "/images/JQuery.webp"} alt="J query"/></div>
                <div><img className="icon bootstrap" src={process.env.PUBLIC_URL + "/images/Bootstrap-5.PNG"} alt="Bootstrap 5"/></div>
                <div><img className="icon node" src={process.env.PUBLIC_URL + "/images/Node-js.PNG"} alt="Node JS"/></div>
                <div><img className="icon babel" src={process.env.PUBLIC_URL + "/images/Babel.PNG"} alt="Babel"/></div>
                <div><img className="icon es6" src={process.env.PUBLIC_URL + "/images/Es6.PNG"} alt="es6"/></div>
                <div><img className="icon express" src={process.env.PUBLIC_URL + "/images/ExpressJS.PNG"} alt="Express JS"/></div>
                <div><img className="icon mongo" src={process.env.PUBLIC_URL + "/images/MongoDB.PNG"} alt="Mongo DB"/></div>
                <div><img className="icon npm" src={process.env.PUBLIC_URL + "/images/Npm-logo.PNG"} alt="npm"/></div>
                <div><img className="icon react" src={process.env.PUBLIC_URL + "/images/React.PNG"} alt="React"/></div>
                <div><img className="icon github" src={process.env.PUBLIC_URL + "/images/Github.PNG"} alt="Github"/></div>
                <div><img className="icon hyper" src={process.env.PUBLIC_URL + "/images/Hyper.PNG"} alt="Hyper"/></div>
                <div><img className="icon vscode" src={process.env.PUBLIC_URL + "/images/Vscode-logo.PNG"} alt="vs code"/></div>
                <div><img className="icon atom" src={process.env.PUBLIC_URL + "/images/Atom.PNG"} alt="Atom"/></div>
                <div><img className="icon Wordpress" src={process.env.PUBLIC_URL + "/images/Wordpress.PNG"} alt="Wordpress"/></div>
                <div><img className="icon Sass" src={process.env.PUBLIC_URL + "/images/Sass.PNG"} alt="Sass"/></div>
                <div><img className="icon Tailwind" src={process.env.PUBLIC_URL + "/images/Tailwind.PNG"} alt="Tailwind"/></div>
                <div><img className="icon PhpMySql" src={process.env.PUBLIC_URL + "/images/PhpMySql.PNG"} alt="PhpMySql"/></div>
                <div><img className="icon Nuxt" src={process.env.PUBLIC_URL + "/images/NuxtJS_Logo.PNG"} alt="Sass"/></div>
                <div><img className="icon Vue" src={process.env.PUBLIC_URL + "/images/vue3.PNG"} alt="Vue3 js"/></div>
                <div><img className="icon Laravel" src={process.env.PUBLIC_URL + "/images/Laravel.PNG"} alt="PhpMySql"/></div>
                </div>
                <p className="packages"><em>HTML 5 | CSS 3 | JavaScript | JQuery | NodeJS | ExpressJS | Bootstrap 5 | ES6 | Babel | MongoDB | React | Github | Tailwind | Sass | Wordpress | PHP | Nuxt JS | VUE 3 | Laravel 8 </em><br />
                <br />
                In April 2021 I was taken under the wing of <a href="https://www.internetconsultancy.pro/?gclid=CjwKCAjw4KyJBhAbEiwAaAQbE2nTE4gamnXKiaPkxwX4nI_bJpwqKjBibZqfMNy1sfYMtIZljKZkzxoCcDIQAvD_BwE" target="_blank">ICAAL</a> in Southampton as Junior Web Developer. <br />
                Here I have been really able to enhance and build on the skills I learnt, <br /> 
                adding new technologies and language to my skill set. 
                <br />
                I have worked on many projects while at ICAAL, a few of which can be view here :- 
                <br />
                <br />
                <a href="https://www.garden-rooms-dorset.co.uk/" className=""><strong>Inspira Garden Rooms</strong> <span> - A clean simple site with a bespoke data gathering quote form.</span></a>
                <br />
                <a href="https://www.sprayituk.com/" className=""><strong>Spray It Ltd</strong> <span> - A site build with a bespoke quote form, allowing for the user to highlight damaged areas and upload multiple images.</span></a>
                <br />
                {/* <a href="https://trianta.co.uk/" className=""><strong>Trianta</strong> <span> - New site design and build, with a bespoke installer sign up form and custom find an installer map.</span></a> */}
                {/* <br />  */}
                <br /> 
                Please use this site to look through my projects and watch my progression.</p>

                <h4>Nick</h4>
            </div>
           
         </div>
    );
}

export default About;     