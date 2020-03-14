import React from 'react';
import './Contact.css';
import contactPic from '../assets/contact.png';
import FacebookLogo from '../assets/facebook.png';
import InstagramLogo from '../assets/instagram.png';
import GithubLogo from '../assets/github.png';
import LineLogo from '../assets/line.png';
import LinkedinLogo from '../assets/linkedin.png';

class Contact extends React.Component {
    render() {
        return (
            <div id="Contact" className="contact-bg">
                {/* <div className="contact-container"> */}
                    <div className="contact-title">
                        <div> Contact </div>
                        <div className="contact-subtitle"> 
                            Just let me know if you have any question. 
                        </div>
                    </div>
                    <div className="contact-body">
                        <div className="contact-profile">
                            <div className="contact-pic-container">
                                <div className="contact-picture"><img src={contactPic} alt="Shih Yun" /></div>
                                <div className="contact-name"> Shih Yun Chen </div>
                            </div>
                            <div className="contact-link">
                                <a href="https://www.facebook.com/cinnacinnachen"><img src={FacebookLogo} alt="FB" /></a>
                                <a href="https://www.instagram.com/shih.yun.chen"><img src={InstagramLogo} alt="IG" /></a>
                                <a href="https://github.com/b05705019"><img src={GithubLogo} alt="Github" /></a>
                                <a href="https://line.me/ti/p/pRVUS6MJs_"><img src={LineLogo} alt="Line" /></a>
                                <a href="https://linkedin.com/in/shih-yun-carolyn-chen-8a376915b"><img src={LinkedinLogo} alt="Linkedin" /></a>    
                            </div>
                        </div>
                        
                        <div className="contact-copyright">
                            © 2020 Shih Yun Chen. All rights reserved.
                        </div>
                    </div>
                {/* </div> */}
            </div>
        );
    }
}

export default Contact;