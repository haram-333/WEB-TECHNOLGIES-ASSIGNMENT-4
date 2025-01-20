import React from 'react'
import './style.css'
import apple from '../public/apple.png'
import google from '../public/google.png'
import twitter from '../public/twitter.png'
import facebook from '../public/facebook.png'

const Clients = () => {
  return (
    <>
      <div className="clients">
            <div className="client-left">
                <div className="client-left-img">
                    <img src={apple} alt=""/>
                    <img src={google} alt=""/>
                </div>
                <div className="client-left-img">
                    <img src={twitter} alt=""/>
                    <img src={facebook} alt=""/>
                </div>
            </div>
            <div className="client-right">
                <h1>Clients with projects proudly crafted by our agency.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellendus totam ipsam
                    aspernatur itaque fuga facere, provident repudiandae nostrum. Unde culpa fugiat voluptate possimus
                    nostrum optio, eum perferendis beatae eius.</p>
            </div>
        </div>
    </>
  )
}

export default Clients
