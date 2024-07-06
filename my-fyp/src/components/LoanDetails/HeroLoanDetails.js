import React from 'react'

import "./HeroLoanDetailsStyles.css";

import BadCreditImg from '../../assets/badcredit.png';

const HeroLoanDetails = () => {
  return (
    <div className='container-details'>
        <div className='heading'>
            <h1>What can I use a loan for?</h1>
        </div>
        <div className='content-container'>
            <div className='box'>
                <h2><span>1</span> To spread the cost of buying a car</h2>
                <p>Found your dream car but don't have the savings to buy it outright? A loan can help you enjoy your new wheels by spreading the cost of the car into manageable repayments.</p>
            </div>
            <div className='box'>
                <h2><span>2</span> To make home improvements</h2>
                <p>Looking to make renovations to your house? From a new kitchen to a new bathroom, a home improvement loan can help fund the cost of home improvements.</p>
            </div>
            <div className='box'>
                <h2><span>3</span> To sell more quickly with a bridging loan</h2>
                <p>A bridging loan can help you to buy a new property before you sell your current home, by 'bridging' the gap between sale and completion.</p>
            </div>
            <div className='box'>
                <h2><span>4</span> To consolidate existing debts</h2>
                <p>Finding one low interest rate loan for all your debts can bring the ease of having just one payment to deal with instead of different cards and loans on the go (where it may be easy to lose track and miss payments!).</p>
            </div>
            <div className='box'>
                <h2><span>5</span> To pay for a holiday</h2>
                <p>Whether your holiday is abroad or in the UK, a holiday loan can help towards the cost of your next adventure if you don't have the savings to help out.</p>
            </div>
            <div className='box'>
                <h2><span>6</span> To pay for a wedding</h2>
                <p>While a wedding may be the best day of your life, it can also be an expensive one! A wedding loan can help manage the cost of your big day and minimise money worries.</p>
            </div>
        </div>

        <div className='bad-credit'>
            <div className='content-text'>
                <h1>Am I eligible for a loan with bad credit?</h1>
                <p>If your credit score isn't so good, it can be difficult to get a regular loan. With this in mind, a bad credit loan could be an option. These loans are aimed at those with a poor or limited credit history, so they're easier to qualify for. But they usually have higher interest rates and lower borrowing limits - so they can be more expensive over their term.</p>
                <div className='bad-credit-btn'><button>Find Out More</button></div>
            </div>

            <div className='bad-credit-img'>
                <img className='badCredit' src={BadCreditImg} alt='badCredit'/>
            </div>
        </div>
    </div>
  )
}

export default HeroLoanDetails
