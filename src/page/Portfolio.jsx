import React from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Landing from "../section/Landing/Landing.jsx";
import About from "../section/About/About.jsx";

import "../styles/color/_colors.scss";

function Portfolio(){
    return (
        <div>
            <Navbar/>
            <Landing/>
            <About/>
        </div>
    );
}

export default Portfolio;