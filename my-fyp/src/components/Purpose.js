import React from 'react'
import "./PurposeStyles.css"

import FirstImg from "../assets/first1.png"

const Purpose = () => {
    return (
        <div className='purpose'>
            <div className='purpose-text'>
                <h2>Purpose</h2>
                <p>Are you in need of financial assistance?<span> LoanCheck</span> is here to help you navigate the complex
                    world of loans, ensuring you access the right financial support when you need it most. Whether you're
                    looking for government-backed schemes or private lenders, our platform simplifies the process of
                    checking your loan eligibility.</p>
            </div>
            <div className='purpose-image'>
                <img className='first-image' src={FirstImg} alt="FirstImg"/>
            </div>
        </div>
    )
}

export default Purpose
