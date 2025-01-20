import React from 'react'
import './style.css'
import one from '../public/1.jpg'
import two from '../public/2.jpg'
import three from '../public/3.jpg'
import four from '../public/4.jpg'
import five from '../public/5.jpg'
import six from '../public/6.jpg'
import seven from '../public/7.jpg'
import eight from '../public/8.jpg'


const Images = () => {
    return (
        <>
            <div class="images">
                <ul class="option">
                    <li>
                        <h3>ALL</h3>
                    </li>
                    <li>
                        <h3>WEB</h3>
                    </li>
                    <li>
                        <h3>ADVERTISING</h3>
                    </li>
                    <li>
                        <h3>BRANDING</h3>
                    </li>
                    <li>
                        <h3>DESIGN</h3>
                    </li>
                    <li>
                        <h3>PHOTOGRAPHY</h3>
                    </li>
                </ul>
                <div class="image-section">
                    <div class="img-row">
                        <img src={one} alt="Person Image 1" />
                        <img src={two} alt="Accessory Image 1" />
                        <img src={three} alt="Person Image 2" />
                        <img src={four} alt="Accessory Image 2" />
                    </div>
                    <div class="img-row">
                        <img src={five} alt="Person Image 3" />
                        <img src={six} alt="Accessory Image 3" />
                        <img src={seven} alt="Person Image 4" />
                        <img src={eight} alt="Accessory Image 4" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Images
