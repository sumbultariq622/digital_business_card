import React from 'react'
import TwitterIcon from "../../images/Twitter Icon.png";
import FacebookIcon from "../../images/Facebook Icon.png";
import InstagramIcon from "../../images/Instagram Icon.png";
import GitHubIcon from "../../images/GitHub Icon.png";
import "./Footer.css";

export default function Footer() {
    return (
        <div className='footer--container'>
            <div className='footer--icon'>
            <img src={TwitterIcon} alt="TwitterIcon"/>
            <img src={FacebookIcon} alt="FacebookIcon" />
            <img src={InstagramIcon} alt="InstagramIcon" />
            <img src={GitHubIcon} alt="GitHubIcon" />
            </div>
        </div>
    )
}