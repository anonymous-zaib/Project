import React from 'react'
import "./LoanTypesStyles.css"

import Pic1 from "../assets/liability_8520558.png"
import Pic2 from "../assets/unsecured_8993501.png"
import Pic3 from "../assets/investor_8682675.png"
import { Link } from 'react-router-dom'

const LoanTypes = () => {
    return (
        <div className='type-loan'>
            <h1>What are the different types of loans?</h1>
            <p>There are different types of loans available depending on your needs. Which loan you can get will depend on your financial situation… </p>

            <div class="type-loan-cards">
                <div class="loan-card">
                    <img className='firstpic' src={Pic1} alt="Pic1" />
                    <div class="card-content">
                        <h1>Unsecured or personal loans</h1>
                        <p>Unsecured loans, also known as personal loans, don't require collateral. Lenders base their decision on your creditworthiness, considering factors like your credit score and repayment history.</p>
                    </div>
                </div>

                <div class="loan-card">
                    <img className='secondpic' src={Pic2} alt="Pic2" />
                    <div class="card-content">
                        <h1>Secured or homeowner loans</h1>
                        <p>Secured loans, such as homeowner loans, require collateral, typically a property you own or are mortgaging. If you default on payments, the lender can repossess the asset, putting your homeownership at risk.</p>
                    </div>
                </div>

                <div class="loan-card">
                    <img className='thirdpic' src={Pic3} alt="Pic3" />
                    <div class="card-content">
                        <h1>Guarantor loans</h1>
                        <p>Guarantor loans are an alternative for individuals with poor or limited credit history. These loans function similarly to regular loans, but require a guarantor who agrees to assume responsibility for repayments if the borrower defaults.</p>
                    </div>
                </div>
            </div>
            <div id='loan-btn'>
                <Link to='./loanDetails'>
                <button>Compare Loan</button>
                </Link>
                </div>
        </div>
    )
}

export default LoanTypes
