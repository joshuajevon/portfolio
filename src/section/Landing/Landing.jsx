import React, { useState, useEffect } from 'react';
import "../../styles/section/_landing.scss";
import Profile from "../../assets/image/profile.svg"
import Github from "../../assets/icon/Landing/github.svg"
import Gmail from "../../assets/icon/Landing/gmail.svg"
import Instagram from "../../assets/icon/Landing/instagram.svg"
import Linkedin from "../../assets/icon/Landing/linkedin.svg"
import Twitter from "../../assets/icon/Landing/twitter.svg"
import Button from "../../components/Button/Button.jsx"
import Typed from 'react-typed'
import cv from '../../assets/icon/Landing/cv.svg'
import ParticlesBackground from '../../components/Particles/ParticleBackground';

const Landing = () => {
    return (
        <section className="landing-page">
            <div className="landing-background">
                <ParticlesBackground/>
            </div>
            <div className="landing-container">
                <div className="landing-top">
                    <div className="landing-profile">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="landing-decription">
                        <div className="greetings">
                            <h1>
                                <Typed
                                    strings={[
                                    "Hello","Halo","Hola","Bonjour","你好!"  
                                    ]}
                                    typeSpeed={150}
                                    backSpeed={100}
                                    loop
                                />
                            </h1>
                        </div>
                        <div className="landing-name">
                            <h1>I'm Joshua Jevon</h1>
                        </div>
                        <div className="landing-job">
                            <h1>
                                <Typed
                                    strings={[
                                    "a Back-End Developer","Binusian 2025","Computer Science Student","RnD Staff of BNCC"  
                                    ]}
                                    typeSpeed={150}
                                    backSpeed={100}
                                    loop
                                />
                            </h1>
                        </div>
                        <div className="landing-social-media">
                            <a target="__blank" href="https://www.linkedin.com/in/joshua-jevon-irawan/">
                                <img src={Linkedin} alt="LinkedIn" />
                            </a>
                            <a target="__blank" href="https://github.com/joshuajevon">
                                <img src={Github} alt="Github" />
                            </a>
                            <a target="__blank" href="https://www.instagram.com/joshua.jevon/">
                                <img src={Instagram} alt="Instagram" />
                            </a>
                            <a target="__blank" href="https://twitter.com/JoshuaJevon">
                                <img src={Twitter} alt="Twitter" />
                            </a>
                            <a target="__blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvMkXSrgPXMlKFxlLhZRMpCJDGxxmfMXDHmQhCzNhKxSNXPkmTbzgBDTkhQWNljwzZzPg">
                                <img src={Gmail} alt="Gmail" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="landing-bottom">
                    <Button image={cv} text="See My CV" link="https://www.google.com"/>
                    <p>For more details, please <br/> visit my linkedin...</p>
                </div>
            </div>  
        </section>
    );
};

export default Landing;