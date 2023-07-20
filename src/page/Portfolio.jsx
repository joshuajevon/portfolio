import React from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Landing from "../section/Landing/Landing.jsx";
import About from "../section/About/About.jsx";
import SkillsnProjects from "../section/SkillsnProjects/SkillsnProjects.jsx";
import Skills from "../section/Skills/Skills.jsx";
import Projects from "../section/Projects/Projects.jsx";

import "../styles/color/_colors.scss";

function Portfolio(){
    return (
        <div>
            <Navbar/>
            <Landing/>
            <About/>
            <SkillsnProjects/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default Portfolio;