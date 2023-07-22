import React from "react";
import '../../styles/components/_button.scss'

const Button = ({text, link, image}) => {
    return (
            <a href={link}>
                <button type="submit">
                    {text}
                    {image && <img src={image} alt="" className="icon" />}
                </button>
            </a>
    );
}

export default Button;