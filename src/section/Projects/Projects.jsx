import React, { useState } from "react";
import "../../styles/section/_projects.scss";
import ProjectsIcon from "../../assets/icon/Projects/projects.svg"
import ViewIcon from '../../assets/icon/Projects/view.svg'
import GithubIcon from '../../assets/icon/Projects/github.svg'
import Technoscape from '../../assets/image/projects/technoscape.png'
import Technotic from '../../assets/image/projects/technotic.png'
import AsetAset from '../../assets/image/projects/asetaset.png'
import Takurui from '../../assets/image/projects/takurui.png'
import Bestiepanti from '../../assets/image/projects/bestiepanti.png'
import Plb from '../../assets/image/projects/plb.png'
import Leap from '../../assets/image/projects/leap.png'
import Bca from '../../assets/image/projects/boss.png'
import Shell from '../../assets/image/projects/shell.png'
import {Fade} from 'react-reveal'

import { Card } from 'antd';
const { Meta } = Card;

const projectsData = [
  {
    title: "BCA Supporting Application Bond",
    description: "Managing the API flow for bond buy-sell real time transactions.",
    imgSrc: Bca,
    tech: ["Java Springboot", "API", "PostgreSql"],
    linkView: "https://www.bca.co.id/id/Individu/produk/Investasi-dan-Asuransi/obligasi",
  },
  {
    title: "BCA Operational Transaction Script",
    description: "Automating tasks, processing data and configuring environment workflows.",
    imgSrc: Shell,
    tech: ["Shellscript", "Linux Server", "Bash"],
  },
  {
    title: "BestiePanti",
    description: "API for donation management platform dedicated to orphanages in Jabodetabek.",
    imgSrc: Bestiepanti,
    tech: ["Java Springboot", "API", "PostgreSql"],
    linkView: "https://bestiepanti.social/",
    linkGithub: "https://github.com/joshuajevon/BestiePanti-BE",
  },
  {
    title: "Technoscape 2023",
    description: "The biggest event hosted by Bina Nusantara Computer Club (BNCC).",
    imgSrc: Technoscape,
    tech: ["Laravel", "PhP", "API"],
    linkView: "https://technoscape.id/",
  },
  {
    title: "LEAP 2.1",
    description: "Learning Management System owned by BNCC that supports the LnT course.",
    imgSrc: Leap,
    tech: ["Laravel", "PhP", "API"],
    linkView: "https://member.bncc.net/",
  },
  {
    title: "Technotic Design System and Docs",
    description: "Design smarter, not harder with Technotics powerful design system.",
    imgSrc: Technotic,
    tech: ["Node", "React","Typescript"],
    linkView: "https://technotic.bncc.net/",
    linkGithub: "https://github.com/RnDBNCC/technotic",
  },
  {
    title: "AsetAset",
    description: "An innovative solution to facilitate access and transparency in searching for assets.",
    imgSrc: AsetAset,
    tech: ["Laravel", "PhP", "MySql"],
    linkView: "https://asetaset.com/",
    linkGithub: "https://github.com/joshuajevon/AsetAset",
  },
  {
    title: "Prestige Lux Bags",
    description: "A quick, easy, and hassle-free platform to buy or sell your pre-loved luxury fashion items.",
    imgSrc: Plb,
    tech: ["Wordpress", "HTML", "CSS"],
    linkView: "https://prestigeluxbags.com/",
  },
  {
    title: "Takurui",
    description: "An exclusive online anime shopping clothes platform for anime enthusiasts.",
    imgSrc: Takurui,
    tech: ["Laravel", "PhP", "MySql"],
    linkGithub: "https://github.com/joshuajevon/Takurui",
  },
];

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(4); 

    const loadMore = () => {
        setVisibleProjects((prev) => Math.min(prev + 2, projectsData.length));
    };

    return(
        <section className="projects" id="projects">
            <div className="projects-container">
                <div className="projects-title">
                    <img src={ProjectsIcon} alt="" />
                    <h1>My Projects</h1>
                </div>
                <div className="projects-content">
                    <div className="projects-row">
                        {projectsData.slice(0, visibleProjects).map((project, index) => (
                            <Fade bottom>
                            <Card className="card" hoverable style={{ width: "350px", fontFamily: "Poppins" }}
                                cover={<img style={{ width: "350px" }} alt={project.title} src={project.imgSrc} />}
                                actions={[
                                    <div className="card-image">
                                        {project.linkView && (
                                            <a target="_blank" href={project.linkView}>
                                                <img src={ViewIcon} alt="View" />
                                            </a>
                                        )}
                                        {project.linkGithub && (
                                            <a target="_blank" href={project.linkGithub}>
                                                <img src={GithubIcon} alt="GitHub" />
                                            </a>
                                        )}
                                        {!project.linkView && !project.linkGithub && (
                                            <a target="_blank" aria-disabled>
                                                <b>Confidential</b>
                                            </a>
                                        )}
                                    </div>
                                ]}>
                                <Card.Meta title={project.title} description={project.description} />
                                <div className="tech">
                                    {project.tech.map((item, i) => <div className="list-tech" key={i}>{item}</div>)}
                                </div>
                            </Card>
                            </Fade>
                        ))}
                    </div>
                    {visibleProjects < projectsData.length && (
                        <button onClick={loadMore} className="load-more-btn">Load More...</button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;