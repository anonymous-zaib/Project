import React from 'react'
import "./HeroStyles.css"
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <>
        <div className='hero'>
            <div className='Content'>
                <h1><span>Welcome to LoanCheck </span>- Your Ultimate Loan Eligibility<br></br> Checker!</h1>
                <div className="btn-hero">
                    <Link to='./login'>
                    <button>Login</button>
                    </Link>
                    <Link to='./signup'>
                    <button id='btn-2'>Signup</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero
