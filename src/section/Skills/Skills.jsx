import React from "react";
import "../../styles/section/_skills.scss";
import skillsIcon from "../../assets/icon/Skills/skills.svg"
import Laravel from "../../assets/icon/Skills/laravel.svg"
import React1 from "../../assets/icon/Skills/react.svg"
import HTML from "../../assets/icon/Skills/html.svg"
import CSS from "../../assets/icon/Skills/css.svg"
import js from "../../assets/icon/Skills/js.svg"
import Github from "../../assets/icon/Skills/github.svg"
import Asp from "../../assets/icon/Skills/asp.svg"
import Java from "../../assets/icon/Skills/java.svg"
import MySql from "../../assets/icon/Skills/mysql.svg"
import Python from "../../assets/icon/Skills/python.svg"
import NodeJS from "../../assets/icon/Skills/nodejs.svg"
import Typescript from "../../assets/icon/Skills/typescript.svg"
import Bootstrap from "../../assets/icon/Skills/bootstrap.svg"
import Php from "../../assets/icon/Skills/php.svg"
import C from "../../assets/icon/Skills/c.svg"
import GitVCS from "../../assets/icon/Skills/gitvcs.svg"

const Skills = () => {
    return (
        <section  id="skills">
            <div className="skills-container">
                <div className="skills-title">
                    <img src={skillsIcon} alt="" />
                    <h1>My Skills</h1>
                </div>
                <div className="slide-container">    
                    <div className="slide-show1">
                        <img src={Bootstrap} alt="Bootstrap" />
                        <img src={Typescript} alt="Typescript" />
                        <img src={NodeJS} alt="NodeJS" />
                        <img src={js} alt="js" />
                        <img src={CSS} alt="CSS" />
                        <img src={HTML} alt="HTML" />
                        <img src={React1} alt="React" />
                        <img src={Laravel} alt="Laravel" />
                    </div>

                    <div className="slide-show2">
                        <img src={Github} alt="Github" />
                        <img src={GitVCS} alt="GitVCS" />
                        <img src={Asp} alt="Asp" />
                        <img src={Java} alt="Java" />
                        <img src={Php} alt="Php" />
                        <img src={MySql} alt="MySql" />
                        <img src={Python} alt="Python" />
                        <img src={C} alt="C" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills; 