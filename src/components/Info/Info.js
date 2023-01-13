import React from 'react'
import ProfileImg from "../../images/Rectangle 90.png";
import MailIcon from "../../images/Mail.png";
import LinkedInIcon from "../../images/linkedin.png";
import "./Info.css";

export default function Info() {
  return (
    <nav>
      <img src={ProfileImg} alt="Profile Image" />
      <h1 className='nav--header'>Laura Smith</h1>
      <h4 className='nav--designation'>Frontend Developer</h4>
      <p className='nav--website'>laurasmith.website</p>
      {/*<div className='nav--buttons'>
        <button className='nav--mail_btn'>
          <img src={MailIcon} alt="Mail Icon" height="16px" />
          <label className='nav--mail_label'>Email</label>
        </button>
        <button className='nav--linkedin_btn'>
          <img src={LinkedInIcon} alt="LinkedIn Icon" height="16px" />
          <label className='nav--mail_label'>LinkedIn</label>
        </button>
      </div>*/
}
<div className='nav--buttons'>
        <button className='nav--mail_btn'>
          <div className='nav--icon'>
          <img src={MailIcon} alt="Mail Icon"/>
          </div>
          <label className='nav--mail_label'>Email</label>
        </button>
        <button className='nav--linkedin_btn'>
        <div className='nav--icon'>
          <img src={LinkedInIcon} alt="LinkedIn Icon" />
          </div>
          <label className='nav--mail_label'>LinkedIn</label>
        </button>
      </div>

    </nav>
  )
}

