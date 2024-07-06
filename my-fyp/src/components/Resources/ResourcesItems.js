import React from 'react'
import './ResourcesItems.css'
import { Link } from 'react-router-dom'

const ResourcesItems = () => {
    return (
        <>
            <div className='main-resources-item'>
                <div className='resources-container'>
                    <span>Purpose:</span>Covers various personal needs like debt consolidation, medical bills, home renovations, travel, etc.<br></br>
                    <span>Eligibility:</span> Usually requires salaried employment, minimum income threshold, and a good credit score.<br></br>
                    <span>Loan amount:</span> Varies depending on lender, typically ranging from PKR 50,000 to PKR 5,000,000.<br></br>
                    <span>Interest rates:</span> Vary depending on lender, loan amount, and repayment term, typically ranging from 15% to 25% per annum.<br></br>
                    <span>Repayment term:</span> Typically ranges from 12 months to 60 months.<br></br>
                    <span>Features:</span> May offer flexible repayment options, secured or unsecured options (secured loans require collateral), and online application processes.
                    <h3>Start your personal loan journey today - compare offers and apply now!</h3>
                    <Link to='/banklinks'>
                    <button className='btn'>Check Links</button>
                    </Link>
                </div>
            </div>

            <div className='title'>
                <h1>Home Loan:</h1>
            </div>
            <div className='main-resources-item'>
                <div className='resources-container'>
                    <span>Purpose:</span> Purchase or refinance a residential property.<br></br>
                    <span>Eligibility:</span> Requires stable income, good credit score, and property documents.<br></br>
                    <span>Loan amount:</span> Varies depending on lender, property value, and down payment. Typically ranges from PKR 1,000,000 to PKR 50,000,000.<br></br>
                    <span>Interest rates:</span> Vary depending on lender, loan amount, repayment term, and type of financing (conventional or Islamic banking). Typically lower than personal loan rates, ranging from 8% to 15% per annum.<br></br>
                    <span>Repayment term:</span> Typically longer than other loans, ranging from 10 to 30 years.<br></br>
                    <span>Features:</span> May offer fixed or variable interest rates, extended repayment terms, and government-backed loan options for specific segments.<br></br>
                    <h3>Start your personal loan journey today - compare offers and apply now!</h3>
                    <Link to='/banklinks'>
                    <button className='btn'>Check Links</button>
                    </Link>
                </div>
            </div>

            <div className='title'>
                <h1>Car Loan:</h1>
            </div>
            <div className='main-resources-item'>
                <div className='resources-container'>
                    <span>Purpose:</span> Purchase a new or used car.<br></br>
                    <span>Eligibility:</span> Requires income verification, good credit score, and sometimes down payment.<br></br>
                    <span>Loan amount:</span> Varies depending on lender, car value, and down payment. Typically ranges from PKR 500,000 to PKR 5,000,000.<br></br>
                    <span>Interest rates:</span> Vary depending on lender, loan amount, and repayment term. Typically higher than home loans, ranging from 12% to 18% per annum.<br></br>
                    <span>Repayment term:</span> Typically shorter than home loans, ranging from 1 to 7 years.<br></br>
                    <span>Features:</span> May offer flexible repayment options, fixed or variable interest rates, and loan options for different car types (new, used, imported).<br></br>
                    <Link to='/banklinks'>
                    <button className='btn'>Check Links</button>
                    </Link>
                </div>
            </div>

            <div className='title'>
                <h1>Education Loan:</h1>
            </div>
            <div className='main-resources-item'>
                <div className='resources-container'>
                    <span>Purpose:</span> Cover educational expenses, including tuition fees, accommodation, and living costs.<br></br>
                    <span>Eligibility:</span>  Varies depending on lender and program. May require student enrollment proof, guarantor, and good academic record.<br></br>
                    <span>Loan amount:</span>  Varies depending on lender and program. Typically covers a significant portion of the total educational expenses.<br></br>
                    <span>Interest rates:</span>Vary depending on lender, loan amount, and repayment term. May offer competitive rates compared to other loan options, ranging from 8% to 15% per annum.<br></br>
                    <span>Repayment term:</span>  Starts after education completion, typically ranging from 3 to 7 years.<br></br>
                    <span>Features:</span>  May offer flexible repayment options, scholarship opportunities, and loan programs for specific study abroad destinations.<br></br>
                    <Link to='/banklinks'>
                    <button className='btn'>Check Links</button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default ResourcesItems
