import React from 'react'
import './style.css'
import gear from '../public/gear.png'
import eco from '../public/ecologic-bulb.png'
import graphic from '../public/graphic-design.png'
import laptop from '../public/laptop.png'
import contract from '../public/contract.png'
import opt from '../public/optometrist.png'

const Service = () => {
    return (
        <>
            <div className="services">
                <h6>SERVICES</h6>
                <h1>Best services for <span>Visual Perfection</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed? Veniam illo sed unde, quaerat
                    nisi tenetur vitae dicta repellendus vero,</p>
                <div className="service-desc">
                    <div>
                        <img src={gear} alt=""/>
                            <h3>Strategy</h3>
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quod iste culpa consectetur
                                ducimus consequatur?</h5>
                    </div>
                    <div>
                        <img src={eco} alt=""/>
                            <h3>Marketing</h3>
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quod iste culpa consectetur
                                ducimus consequatur?</h5>
                    </div>
                    <div>
                        <img src={graphic} alt=""/>
                            <h3>Technology</h3>
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quod iste culpa consectetur
                                ducimus consequatur?</h5>
                    </div>
                </div>
                <div className="service-desc">
                    <div>
                        <img src={laptop} alt=""/>
                            <h3>Ecommerce</h3>
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quod iste culpa consectetur
                                ducimus consequatur?</h5>
                    </div>
                    <div>
                        <img src={contract} alt=""/>
                            <h3>Branding</h3>
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quod iste culpa consectetur
                                ducimus consequatur?</h5>
                    </div>
                    <div>
                        <img src={opt} alt=""/>
                            <h3>SEO Identity</h3>
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quod iste culpa consectetur
                                ducimus consequatur?</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
