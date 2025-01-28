import React from "react";
import "../../styles/section/_about.scss";
import Jos from "../../assets/image/jos.svg";
import AboutIcon from "../../assets/icon/About/about.svg"
import Code from "../../assets/icon/About/code.svg"
import Fan from "../../assets/icon/About/fan.svg"
import {Fade} from 'react-reveal'

const About = () => {
    return(
        <section className="about-page" id="about">
            <div className="about-container">
                <div className="about-top">
                    <h1></h1>
                    <div className="title">
                        <img src={AboutIcon} alt="" />
                        <h1>About Me</h1>
                    </div>
                    <div className="right">
                        <img src={Fan} alt="" />
                    </div>
                </div>
                    <div className="about-mid">
                        <Fade left >
                            <div className="description">
                                <p>
                                    Welcome to my Portofolio Website! My name is Joshua Jevon Irawan, and I am a passionate computer science student at Binus University. Throughout my academic journey and organizational experiences, I have developed a diverse skill set in various areas of computer science. I take pride in my ability to work effectively within a team and have earned a reputation for being a trustworthy and dependable individual. 
                                </p>
                                <br/>
                                <p>
                                    Currently, I hold the position of Application Developer Intern at PT Bank Central Asia Tbk (BCA), where I contribute as a Application developer. However, I eager to learn software engineering in general and other knowledge within the field of technology. Feel free to explore the projects I have worked on and the creations I have made.
                                </p>
                            </div>
                        </Fade>
                        <Fade right>
                            <img src={Jos} alt="" />
                        </Fade>
                    </div>
                <div className="about-bottom">
                    <img src={Code} alt="" />
                </div>
            </div>
        </section>
    );
};

export default About;