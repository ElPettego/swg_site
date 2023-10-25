import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render () {
        return (
            <div class="wrapperFooter"> 
                <a class="contactMe">Contact me</a>
                <br/>  
                <a class="contact" href="https://instagram.com/__papacc__">instagram</a>
                <br/>
                <a class="contact" href="https://t.me/uomo_succo">telegram</a>
            </div>
        );

    }
    
}

export default Footer;