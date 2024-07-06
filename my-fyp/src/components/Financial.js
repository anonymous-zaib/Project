import React from 'react'
import "./FinancialStyles.css";

import FinancialImg from "../assets/financial1.png"

const Financial = () => {
  return (
    <div className='financial-container'>
        <div className='financial-text'>
            <h1><span>Your Financial Ally</span></h1>
            <p>We're more than a website; we're your financial ally. Let us guide you through challenges, offering practical solutions to your money matters. Your journey to financial well-being starts here. Image: A reassuring visual symbolizing support on the path to financial success.</p>
        </div>

        <div className='financial-img'>
            <img className='financialImg' src={FinancialImg} alt='financialImg' />
        </div>
    </div>
  )
}

export default Financial
