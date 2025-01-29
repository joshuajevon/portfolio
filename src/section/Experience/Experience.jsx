import React from "react";
import "../../styles/section/_experience.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowRight, FaArrowLeft, FaNetworkWired } from "react-icons/fa";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import bcaExp from "../../assets/image/experience/bca1.png"
import bcaExp2 from "../../assets/image/experience/bca2.jpg"
import bnccExp from "../../assets/image/experience/bncc.png"
import bnccExp2 from "../../assets/image/experience/bncc2.jpg"
import tvkomExp from "../../assets/image/experience/tvkom.png"
import tvkomExp2 from "../../assets/image/experience/tvkom2.jpg"
import prae from "../../assets/image/experience/prae.png"
import prae2 from "../../assets/image/experience/prae2.png"
import freelance from "../../assets/image/experience/freelance.png"
import freelance2 from "../../assets/image/experience/freelance2.png"
import { Fade } from "react-reveal";

const Experience = () => {
    return (
        <Fade bottom>
            <section className="experience" id="experience">
                <div className="experience-container">
                    <div className="experience-title">
                        <h1><FaNetworkWired></FaNetworkWired> Experiences</h1>
                        <h2>Work and Organization</h2>
                    </div>
                        <Swiper
                            effect={'coverflow'}
                            loop={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 25,
                                stretch: 25,
                                depth: 200,
                                modifier: 2.5,
                            }}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation]}
                            className="swiper-container"
                        >
                            <SwiperSlide>
                                <img src={bcaExp2} alt="" />
                                <div className="content-left">
                                    <h3>PT. Bank Central Asia TBK (BCA)</h3>
                                    <h4>Application Developer Intern</h4>
                                </div>
                                <img src={bcaExp} alt="" />
                                <div className="content-right">
                                    <h3>PT. Bank Central Asia TBK (BCA)</h3>
                                    <h4>Feb 2024 - Present</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bnccExp2} alt="" />
                                <div className="content-left">
                                    <h3>Bina Nusantara Computer Club (BNCC)</h3>
                                    <h4>Activist & RnD Staff 34</h4>
                                </div>
                                <img src={bnccExp} alt="" />
                                <div className="content-right">
                                    <h3>Bina Nusantara Computer Club (BNCC)</h3>
                                    <h4>Oct 2021 - Feb 2024</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={freelance2} alt="" />
                                <div className="content-left">
                                    <h3>Webcreativs</h3>
                                    <h4>Freelance Software House</h4>
                                </div>
                                <img src={freelance} alt="" />
                                <div className="content-right">
                                    <h3>Webcreativs</h3>
                                    <h4>May 2023 - Feb 2024</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={prae} alt="" />
                                <div className="content-left">
                                    <h3>Back-End Tutor BNCC (Praetorian)</h3>
                                    <h4>Back-End Laravel</h4>
                                </div>
                                <img src={prae2} alt="" />
                                <div className="content-right">
                                    <h3>Back-End Tutor BNCC (Praetorian)</h3>
                                    <h4>Nov 2022 - Mar 2023</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={tvkomExp2} alt="" />
                                <div className="content-left">
                                    <h3>TV Komunitas RegPac (TVKOM)</h3>
                                    <h4>Secretary & Videographer</h4>
                                </div>
                                <img src={tvkomExp} alt="" />
                                <div className="content-right">
                                    <h3>TV Komunitas RegPac (TVKOM)</h3>
                                    <h4>Oct 2018 - Jan 2021</h4>
                                </div>
                            </SwiperSlide>
                    
                            <div className="slider-controler">
                                <div className="swiper-button-prev slider-arrow">
                                    <FaArrowLeft className="arrow"></FaArrowLeft>
                                </div>
                                <div className="swiper-pagination"></div>
                                <div className="swiper-button-next slider-arrow">
                                    <FaArrowRight className="arrow"></FaArrowRight>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </section>
            </Fade>
      );
};

export default Experience;