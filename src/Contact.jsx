import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <>
      <div className="contact">
            <div className="contact-left">
                <h1>Want to have a professional project? <br></br> Let's talk about it.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ipsum expedita doloribus itaque facilis nostrum reiciendis nihil fugit provident laudantium. Vero magni at ad perferendis maiores pariatur, deserunt consequatur in!
                <br></br>
                <br></br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequatur ipsam harum
                quia. Aliquid adipisci blanditiis officiis, accusantium labore, inventore porro repellat necessitatibus cum harum ratione a architecto magni? Accusamus!
                </p>
            </div>
            <div className="contact-right">
                <input type="text" placeholder="Your Name*" required />
                <div className="company-info">
                    <input type="text" placeholder="Company Name*" required />
                    <input type="email" placeholder="Email Address*" required />
                </div>
                <select id="service" name="service" required>
                    <option value="" disabled selected>Select service</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                    <option value="service3">Service 3</option>
                </select>
                <textarea name="" placeholder="Describe your Project*" required id=""></textarea>
            </div>
            <input type="submit" className="submit" />
        </div>
    </>
  )
}

export default Contact
