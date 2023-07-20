import React from "react";
import '../../styles/components/_button.scss'
import cv from '../../assets/icon/Landing/cv.svg'

const Button = ({text, link}) => {
    return (
            <a href={link}>
                <button>
                    {text}
                <img src={cv} alt="CV" className="icon"/>
                </button>
            </a>
    );
}

export default Button;