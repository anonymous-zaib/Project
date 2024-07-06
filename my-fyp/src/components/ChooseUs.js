import React from 'react'
import "./ChooseUsStyles.css"

import Img from "../assets/tick_6130092.png"
import Img1 from "../assets/email_7636321.png"
import Img2 from "../assets/up-arrow_9973238.png"

import Whatloan from "../assets/what-loan.png"
import { Link } from 'react-router-dom'

const ChooseUs = () => {
    return (
        <>
            <div className='chooseUs-container'>
                <h1>Why compare loans with LoanCheck?</h1>
                <p>It's simple to compare loans with us, and we'll show you your chance of being approved for each loan deal.</p>
                <div className='card-content'>
                    <div className="card">
                        <img className='firstImg' src={Img} alt="Img" />
                        <h4>It's quick and easy</h4>
                        <p>Compare loans quickly and easily with us. We provide clear and concise information about each loan, so you can easily find the right one for you. Once you've found a loan you like, simply click through to the provider's website to apply. It's that simple!</p>
                    </div>
                    <div className="card">
                        <img className='firstImg1' src={Img1} alt="Img1" />
                        <h4>Protect your credit score</h4>
                        <p>Comparing loans with us won't damage your credit score. We perform a soft search, which is invisible to other lenders. We also show you your chances of being approved for a loan, so you can make informed decisions.</p>
                    </div>
                    <div className="card">
                        <img className='firstImg2' src={Img2} alt="Img2" />
                        <h4>We're highly rated</h4>
                        <p>Our loan service is nothing short of exceptional, earning a remarkable 4.2-star rating from our esteemed customers. They rave about our user-friendly website and the astonishing savings they've achieved on their loans, making it a breeze to find the perfect financial solution.</p>
                    </div>
                </div>
                <div id='loan-btn'>
                    <Link to='./resources'>
                    <button>Find a Loan</button>
                    </Link>
                    </div>
            </div>

            <div className='what-loan'>
                <div className='what-loan-text'>
                    <h1>What is a loan?</h1>
                    <p>A loan is a sum of money that you borrow, usually with interest, and repay over a set period of time.

                        Loans can be a helpful financial tool, especially for large expenses like home renovations or car purchases.

                        We can help you find the right loan for your needs, with the lowest possible interest rates. Our eligibility checker shows you your chances of being approved and your guaranteed rate, so you can make informed decisions.</p>
                        <div className='what-loan-btn'>
                            <Link to='./applicationProcess'>
                            <button>Find Out More</button>
                            </Link>
                            </div>
                </div>
                <div className='what-loan-img'>
                <img className='whatloan' src={Whatloan} alt="whatloan" />
                </div>
                
            </div>
        </>
    )
}

export default ChooseUs
