import React from "react";
import "../../styles/section/_projects.scss";
import ProjectsIcon from "../../assets/icon/Projects/projects.svg"
import ViewIcon from '../../assets/icon/Projects/view.svg'
import GithubIcon from '../../assets/icon/Projects/github.svg'
import Technoscape from '../../assets/image/technoscape.png'
import Technotic from '../../assets/image/technotic.png'
import Jetpacker from '../../assets/image/jetpacker.png'
import AsetAset from '../../assets/image/asetaset.png'
import Takurui from '../../assets/image/takurui.png'
import Plb from '../../assets/image/plb.png'
import Rcplaw from '../../assets/image/rcplaw.png'
import Leap from '../../assets/image/leap.png'
import {Fade} from 'react-reveal'

import { Card } from 'antd';
const { Meta } = Card;
const Projects = () => {
    return(
        <section className="projects" id="projects">
            <div className="projects-container">
                <div className="projects-title">
                    <img src={ProjectsIcon} alt="" />
                    <h1>My Projects</h1>
                </div>
                <div className="projects-content">
                    
                    <div className="projects-row">
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                    <img style={{ width:'350px', marginLeft:'0.5px' }}
                                        alt="Technoscape"
                                        src={Technoscape}
                                    />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://technoscape.id/">
                                            <img src={ViewIcon} alt="" />
                                        </a>
                                    </div>,
                                    // <div className="card-image">
                                    //     <a href="">
                                    //         <img src={GithubIcon} alt="" />
                                    //     </a>
                                    // </div>
                                ]}  >
                                    <Meta
                                        title="Technoscape 2023"
                                        description="The biggest event hosted by Bina Nusantara Computer Club (BNCC)"
                                    />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Laravel
                                        </div>
                                        <div className="list-tech">
                                            PhP
                                        </div>
                                        <div className="list-tech">
                                            API
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Leap"
                                    src={Leap}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://member.bncc.net/">
                                            <img src={ViewIcon} alt="" />
                                        </a>
                                    </div>,
                                    // <div className="card-image">
                                    //     <a href="">
                                    //         <img src={GithubIcon} alt="" />
                                    //     </a>
                                    // </div>
                                ]}  >
                                    <Meta
                                        title="LEAP 2.1"
                                        description="Learning Management System owned by BNCC that supports the LnT course"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Laravel
                                        </div>
                                        <div className="list-tech">
                                            PhP
                                        </div>
                                        <div className="list-tech">
                                            API
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                    </div>
                    <div className="projects-row">
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="AsetAset"
                                    src={AsetAset}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://asetaset.com/">
                                            <img src={ViewIcon} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/joshuajevon/AsetAset">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="asetaset.com"
                                        description="An innovative solution to facilitate access and transparency in searching for assets "
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Laravel
                                        </div>
                                        <div className="list-tech">
                                            PhP
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Technotic"
                                    src={Technotic}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://technotic.bncc.net/">
                                            <img src={ViewIcon} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/RnDBNCC/technotic">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Technotic Design System and Docs"
                                        description="Design smarter, not harder with Technotics powerful design system"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Node
                                        </div>
                                        <div className="list-tech">
                                            React
                                        </div>
                                        <div className="list-tech">
                                            Typescript
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                    </div>
                    <div className="projects-row">
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="RCPLAw"
                                    src={Rcplaw}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://rcplaw.id/">
                                            <img src={ViewIcon} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/joshuajevon/rcplaw">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="RC Plaw"
                                        description="A full-service law firm has provided high-standard legal services with over a decade of experience."
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Laravel
                                        </div>
                                        <div className="list-tech">
                                            PhP
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="PLB"
                                    src={Plb}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://prestigeluxbags.com/">
                                            <img src={ViewIcon} alt="" />
                                        </a>
                                    </div>,
                                    // <div className="card-image">
                                    //     <a target="__blank" href="https://github.com/joshuajevon/rcplaw">
                                    //         <img src={GithubIcon} alt="" />
                                    //     </a>
                                    // </div>
                                ]}  >
                                    <Meta
                                        title="Prestige Lux Bags"
                                        description="A quick, easy, and hassle-free platform to buy or sell your pre-loved luxury fashion items."
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Wordpress
                                        </div>
                                        <div className="list-tech">
                                            HTML
                                        </div>
                                        <div className="list-tech">
                                            CSS
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                    </div>
                    <div className="projects-row">
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Jetpacker"
                                    src={Jetpacker}
                                />
                                }
                                actions={[
                                    // <div className="card-image">
                                    //     <a target="__blank" href="https://play.google.com/store/apps/details?id=com.aabversion.Jetpacker2099">
                                    //         <img src={ViewIcon} alt="" />
                                    //     </a>
                                    // </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/joshuajevon/Jetpacker-2099">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Jetpacker 2099"
                                        description="Casual game with a One-Tap Gameplay or Single-Button Gameplay system"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            C#
                                        </div>
                                        <div className="list-tech">
                                            Unity
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Takurui"
                                    src={Takurui}
                                />
                                }
                                actions={[
                                    // <div className="card-image">
                                    //     <a href="">
                                    //         <img src={ViewIcon} alt="" />
                                    //     </a>
                                    // </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/joshuajevon/Takurui">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Takurui"
                                        description="An exclusive online anime shopping clothes platform for anime enthusiasts."
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Laravel
                                        </div>
                                        <div className="list-tech">
                                            PhP
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Projects;

