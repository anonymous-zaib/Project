import React from 'react'
import "./LoanCalculatorStyles.css";
import calculatorImg from "../assets/cal.png"; 
import { Link } from 'react-router-dom';

const LoanCalculator = () => {
  return (
    <div className='calculator-container'>
        <div className='text-calculator'>
            <h1>How much will my <span>loan cost?</span></h1>
            <p>Calculate your monthly loan repayments using our loan calculator. Whether you're borrowing £5,000 or £500,000, our tool helps you determine the affordable repayment amount and term based on your budget and desired interest rate. Shorten your loan term to reduce interest costs. </p>
            <div className='btn-calculator'>
              <Link to='./calculator'>
                <button>Try our loan calculator</button>
                </Link>
            </div>
        </div>
        <div className='img-calculator'>
            <img className='imgCalculator' src={calculatorImg} alt='imgCalculator' />
        </div>
    </div>
  )
}

export default LoanCalculator
