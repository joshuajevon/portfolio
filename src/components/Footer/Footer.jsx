import React from "react";
import "../../styles/components/_footer.scss";
import LinkedIn from '../../assets/icon/Footer/Linkedin.svg'
import Instagram from '../../assets/icon/Footer/Instagram.svg'
import Github from '../../assets/icon/Footer/Github.svg'

const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-text">
                    <p>© 2023 JJI, All Right Reserved</p>
                    <p>Created with ❤ by Joshua Jevon Irawan</p>
                </div>
                <div className="footer-social-media">
                    <a href="https://www.linkedin.com/in/joshua-jevon-irawan/">
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="https://www.instagram.com/joshua.jevon/">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="https://github.com/joshuajevon">
                        <img src={Github} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;