import React from 'react'
import "./HeroAppProStyles.css";

import AppPro1 from "../../assets/AppPro1.png"
import AppPro2 from "../../assets/AppPro2.png"
import AppPro3 from "../../assets/AppPro3.png"
import AppPro4 from "../../assets/AppPro4.png"
import AppPro5 from "../../assets/AppPro5.png"
import AppPro6 from "../../assets/AppPro6.png"
import AppPro7 from "../../assets/AppPro7.png"

const HeroAppPro = () => {
    return (
        <div className='hero-AppPro'>
            <h1>Application Process</h1>
            <div className='procontent-section'>
                <div className='content-row'>
                    <div className='text-box'>
                        <h1>1. Choosing the Right Loan:</h1>
                        <p>Identify your need: Be clear about why you need the loan. This will guide you towards the appropriate loan type, like personal loan, car loan, mortgage, business loan, etc.
                            Compare lenders and rates: Research diverse lenders like banks, NBFCs, and online platforms. Use online comparison tools to compare interest rates, fees, loan terms, and eligibility criteria.</p>
                    </div>
                    <div className='proImg'>
                        <img className='img-box' src={AppPro1} alt="AppPro1" />
                    </div>
                </div>
                <div className='content-row'>
                    <img className='img-box' src={AppPro2} alt="AppPro2" />
                    <div className='text-box' id="text-box-1">
                        <h1>2. Checking your Eligibility:</h1>
                        <p>Each loan product has its own eligibility criteria. These may include:

                            Age: Usually 21 years or older for salaried individuals, 25 years or older for self-employed.
                            Income: Minimum monthly salary or income stipulated by the lender.
                            Employment status: Salaried, self-employed, pensioner.
                            Credit score: A good credit history is preferred.
                            Debt-to-income ratio: Lenders assess your existing debt and income to determine affordability.</p>
                    </div>
                </div>
                <div className='content-row'>
                    <div className='text-box'>
                        <h1>3. Gathering Documents:</h1>
                        <p>Required documents might differ depending on the lender and loan type, but commonly include:

                            Identity documents: CNIC, passport, driving license.
                            Income proof: Pay slips (past 3-6 months), bank statements, tax returns, business financials.
                            Collateral documents: Car title, property deed (if applicable).
                            Additional documents: Utility bills, employment letter, guarantor details (if required).</p>
                    </div>
                    <img className='img-box' src={AppPro3} alt="AppPro1" />
                </div>
                <div className='content-row'>
                    <img className='img-box' src={AppPro4} alt="AppPro1" />
                    <div className='text-box' id="text-box-2">
                        <h1>4. Submitting your Application:</h1>
                        <p>Choose your preferred method:

                            Online: Many lenders offer online application portals. Ensure accurate and complete information.
                            In person: Visit a branch with all documents. A representative can assist you.
                            Mail: Some lenders accept applications by mail, though less common now.</p>
                    </div>
                </div>
                <div className='content-row'>
                    <div className='text-box'>
                        <h1>5. Loan Processing and Approval:</h1>
                        <p>Application review: The lender assesses your application against eligibility criteria and documents.
                            Credit check: Your credit score and history are evaluated.
                            Valuation (if applicable): Collateral like property may be valued.
                            Approval decision: You'll receive notification within a few days to a few weeks.</p>
                    </div>
                    <img className='img-box' src={AppPro5} alt="AppPro1" />
                </div>
                <div className='content-row'>
                    <img className='img-box' src={AppPro6} alt="AppPro1" />
                    <div className='text-box' id="text-box-3">
                        <h1>6. Signing the Loan Agreement:</h1>
                        <p>If approved, review the loan agreement thoroughly. This document outlines:
                            Loan amount and purpose.
                            Interest rate and markup (Islamic financing).
                            Repayment schedule and monthly installments.
                            Fees and charges.
                            Late payment penalties.
                            Collateral details (if applicable).
                            Once understood, sign the agreement for legal binding.</p>
                    </div>
                </div>
                <div className='content-row'>
                    <div className='text-box'>
                        <h1>7. Disbursement and Repayment:</h1>
                        <p>Upon completion of formalities, the loan amount is disbursed to your bank account.
                            Make monthly installments on time, as per the schedule, to avoid late fees and penalties.
                            Consider automated debit for convenience and on-time payments.</p>
                    </div>
                    <img className='img-box' src={AppPro7} alt="AppPro1" />
                </div>
            </div>
        </div>
    )
}

export default HeroAppPro
