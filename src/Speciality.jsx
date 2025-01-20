import React from 'react'
import './style.css'
import db from '../public/database.png'
import framework from '../public/framework.png'
import speciality from '../public/speciality.png'

const Speciality = () => {
    return (
        <>
            <div className="speciality">
                <div className="special-left">
                    <h1>Beautifully handcrafted designs for your website</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos aut quos iste soluta aspernatur
                        explicabo eaque quo expedita fuga perferendis. Id nulla accusamus tempora maiores non ex cum iste
                        similique.</p>
                    <div className="special-features">
                        <div className="special-feature-left">
                            <img src={db} alt=""/>
                                <h3>Secured Database</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit aliquam maiores?</p>
                        </div>
                        <div className="special-feature-right">
                            <img src={framework} alt=""/>
                                <h3>Modern Framework</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit aliquam maiores?</p>
                        </div>
                    </div>
                </div>
                <div className="special-right">
                    <img src={speciality} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Speciality
