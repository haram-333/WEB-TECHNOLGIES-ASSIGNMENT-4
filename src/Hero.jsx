import React, { useEffect } from 'react'
import './style.css'
import file from '../public/file.png'
import pencil from '../public/pencil.png'
import search from '../public/search.png'

const Hero = () => {
  useEffect(() => {
    const toggleMenu = () => {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
    }

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', toggleMenu);
    }

    return () => {
      if (hamburgerMenu) {
        hamburgerMenu.removeEventListener('click', toggleMenu);
      }
    }
  }, []);

  return (
    <>
        <div className="hero">
            <nav className="nav">
                <h3 className="logo">Kallyas<span>.</span></h3>
                <div className="hamburger-menu">
                    <i className="ri-menu-line"></i>
                </div>
                <ul className="nav-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Works</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <div className="hero-text">
                <h1>Helping Business And Companies</h1>
                <h1>Innovate Transform And Lead</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda quis iste, amet necessitatibus
                    veritatis deserunt reiciendis harum rem ut et expedita, quibusdam esse est ipsa pariatur debitis ab
                    quidem?</p>
            </div>
            <div className="cta">
                <button className="start">Start Now</button>
                <button className="service">Our Services</button>
            </div>
            <div className="skills">
                <div className="skill-container">
                    <img src={file} alt="" />
                    <h3>Content Concept & Strategy</h3>
                    <h2 className="line"></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda fuga illum ea</p>
                </div>
                <div className="skill-container">
                    <img src={pencil} alt=""/>
                    <h3>Design & Concepts</h3>
                    <h2 className="line"></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda fuga illum ea</p>
                </div>
                <div className="skill-container">
                    <img src={search} alt=""/>
                    <h3>SEO & Marketing Solutions</h3>
                    <h2 className="line"></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda fuga illum ea</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
