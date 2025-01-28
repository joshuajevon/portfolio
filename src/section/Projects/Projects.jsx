import React from "react";
import "../../styles/section/_projects.scss";
import ProjectsIcon from "../../assets/icon/Projects/projects.svg"
import ViewIcon from '../../assets/icon/Projects/view.svg'
import GithubIcon from '../../assets/icon/Projects/github.svg'
import Technoscape from '../../assets/image/projects/technoscape.png'
import Technotic from '../../assets/image/projects/technotic.png'
import AsetAset from '../../assets/image/projects/asetaset.png'
import Takurui from '../../assets/image/projects/takurui.png'
import Plb from '../../assets/image/projects/plb.png'
import Leap from '../../assets/image/projects/leap.png'
import Bca from '../../assets/image/projects/boss.png'
import Shell from '../../assets/image/projects/shell.png'
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
                                        alt="Bca"
                                        src={Bca}
                                    />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="_blank" href="https://www.bca.co.id/id/Individu/produk/Investasi-dan-Asuransi/obligasi">
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
                                        title="BCA Supporting Application Bond"
                                        description="Managing the API flow for bond buy-sell real time transactions"
                                    />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Java Springboot
                                        </div>
                                        <div className="list-tech">
                                            API
                                        </div>
                                        <div className="list-tech">
                                            PostgreSql
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Script"
                                    src={Shell}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="_blank" aria-disabled>
                                            <b>Confidential</b>
                                        </a>
                                    </div>,
                                    // <div className="card-image">
                                    //     <a href="">
                                    //         <img src={GithubIcon} alt="" />
                                    //     </a>
                                    // </div>
                                ]}  >
                                    <Meta
                                        title="BCA Operational Transaction Script"
                                        description="Automating tasks, processing data and configuring environment workflows"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Shellscript
                                        </div>
                                        <div className="list-tech">
                                            Linux Server
                                        </div>
                                        <div className="list-tech">
                                            Bash
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                    </div>
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
                                        <a target="_blank" href="https://technoscape.id/">
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
                                        <a target="_blank" href="https://member.bncc.net/">
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
                                        <a target="_blank" href="https://asetaset.com/">
                                            <img src={ViewIcon} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="_blank" href="https://github.com/joshuajevon/AsetAset">
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
                                        <a target="_blank" href="https://technotic.bncc.net/">
                                            <img src={ViewIcon} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="_blank" href="https://github.com/RnDBNCC/technotic">
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
                                        <a target="_blank" href="https://github.com/joshuajevon/Takurui">
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
                                        <div className="list-tech">
                                            MySql
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
                                        <a target="_blank" href="https://prestigeluxbags.com/">
                                            <img src={ViewIcon} alt="" />
                                        </a>
                                    </div>,
                                    // <div className="card-image">
                                    //     <a target="_blank" href="https://github.com/joshuajevon/rcplaw">
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
                </div>
            </div>
        </section>
    );
};

export default Projects;

