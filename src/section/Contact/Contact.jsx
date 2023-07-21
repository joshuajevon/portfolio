import React from "react";
import "../../styles/section/_contact.scss";
import {Input} from 'technotic';
import Button from "../../components/Button/Button.jsx"
import contactIcon from '../../assets/icon/Contact/Contact.svg'
import Gmail from '../../assets/icon/Contact/Gmail.svg'
import Line from '../../assets/icon/Contact/Line.svg'
import Whatsapp from '../../assets/icon/Contact/Whatsapp.svg'
import Submit from '../../assets/icon/Contact/Submit.svg'

const Contact = () => {
  return(
    <section className="contact">
      <div className="contact-container">
        <div className="contact-title">
          <img src={contactIcon} alt="" />
          <h1>Get In Touch</h1>
        </div>
        <div className="contact-card">
          <div className="contact-left">
            <p>Let's collaborate, share ideas,<br/> and make a positive impact<br/> together. I can't wait to hear<br/> from you and see where our<br/> journey leads.</p>
            <div className="social-media">
              <div className="list-social-media">
                <img src={Whatsapp} alt="" />
                <p>082138476269</p>
              </div>
              <div className="list-social-media">
                <img src={Line} alt="" />
                <p>joshuajevon</p>
              </div>
              <div className="list-social-media">
                <img src={Gmail} alt="" />
                <p>joshuajevon05@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form action="" className="contact-form">
              <h1>Feel Free to Contact Me</h1>

              <div className="contact-input">
                
                <Input.TextField 
                inputSize={'large'}
                fontSize={'24px'}
                textPlaceholder={'Name'}/>

                <Input.TextField 
                inputSize={'large'}
                fontSize={'24px'}
                textPlaceholder={'Email'}/>

                <Input.TextField 
                inputSize={'large'}
                fontSize={'24px'}
                textPlaceholder={'Subject'}/>

                <Input.TextField 
                inputSize={'large'}
                fontSize={'24px'}
                textPlaceholder={'Message'}/>
              </div>

              <Button text='Submit' image={Submit}/>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;