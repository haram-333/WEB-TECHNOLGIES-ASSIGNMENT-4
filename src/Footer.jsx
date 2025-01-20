import React from 'react'
import './style.css'
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
    return (
        <>
            <div class="footer">
                <section class="section">
                    <h3 class="logo">Kallyas<span>.</span></h3>
                    <ul class="section-links">
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Works</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </section>
                <div class="address">
                    <div class="add-left">
                        <h3>Contact</h3>
                    </div>
                    <div class="add-right">
                        <h3>Subscribe to Newsletter</h3>
                    </div>
                </div>
                <div class="address-info">
                    <div class="add-info-left">
                        <h4>758 E. Beechwood Lane Bay Shore, NY 11706 youremail@address.com, +1-202-555-0158</h4>
                    </div>
                    <div class="add-info-right">
                        <input class="email" type="text" placeholder="Your Email Address" />
                        <input class="submit" type="submit" />
                    </div>
                </div>
                <div class="socials">
                    <div class="social-left">
                        <i class="ri-instagram-line"></i>
                        <i class="ri-facebook-line"></i>
                        <i class="ri-twitter-line"></i>
                        <i class="ri-linkedin-fill"></i>
                    </div>
                    <div class="social-right">
                        <p>&copy; 2024 Kallyas. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
