import React from "react";
import "../../styles/section/_skills.scss";
import skillsIcon from "../../assets/icon/Skills/skills.svg"
import Laravel from "../../assets/icon/Skills/laravel.svg"
import React1 from "../../assets/icon/Skills/react.svg"
import HTML from "../../assets/icon/Skills/html.svg"
import CSS from "../../assets/icon/Skills/css.svg"
import js from "../../assets/icon/Skills/js.svg"
import Github from "../../assets/icon/Skills/github.svg"
import Golang from "../../assets/icon/Skills/golang.svg"
import Java from "../../assets/icon/Skills/java.svg"
import MySql from "../../assets/icon/Skills/mysql.svg"
import Python from "../../assets/icon/Skills/python.svg"
import NodeJS from "../../assets/icon/Skills/nodejs.svg"
import Postgre from "../../assets/icon/Skills/postgre.svg"
import Php from "../../assets/icon/Skills/php.svg"
import C from "../../assets/icon/Skills/c.svg"
import Spring from "../../assets/icon/Skills/spring.svg"
import Api from "../../assets/icon/Skills/api.svg"

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
                        <img src={js} alt="js" />
                        <img src={CSS} alt="CSS" />
                        <img src={HTML} alt="HTML" />
                        <img src={NodeJS} alt="NodeJS" />
                        <img src={React1} alt="React" />
                        <img src={Api} alt="Api" />
                        <img src={Laravel} alt="Laravel" />
                        <img src={Golang} alt="Golang" />
                    </div>

                    <div className="slide-show2">
                        <img src={Spring} alt="Spring" />
                        <img src={Java} alt="Java" />
                        <img src={Postgre} alt="Postgre" />
                        <img src={Github} alt="Github" />
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