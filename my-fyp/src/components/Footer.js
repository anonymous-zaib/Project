import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#ff5945", marginRight: "2rem"}}/>
                    <div>
                      <p>123 Housing society</p>
                      <p>Pakistan</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{color: "#ff5945", marginRight: "2rem"}}/>+923255277831</h4>
                </div>
                <div className="email">
                  <h4><FaMailBulk size={20} style={{color: "#ff5945", marginRight: "2rem"}}/>info@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
              <h4>About the company</h4>
              <p>LoanCheck is Pakistan First Web App that provided you the platform to cheak and compare different Loan Schemes</p>
              <div className="social">
                <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                <Link to='./privacyPolicy' >
                <h2>Privacy Policy</h2>
                </Link>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
