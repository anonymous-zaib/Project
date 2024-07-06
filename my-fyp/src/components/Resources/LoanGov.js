import React from 'react'
import "./LoanGovStyles.css";
import { Link } from 'react-router-dom';

const LoanGov = () => {
  return (
    <>
      <div className='title'>
        <h1>Kamyab Jawan Youth Entrepreneurship Scheme:</h1>
      </div>
      <div className='main-resources-item'>
        <div className='resources-container'>
          <span>Target Audience:</span> Young Pakistanis between 18 and 45 years old (exceptions for IT/E-commerce businesses).<br></br>
          <span>Goal:</span> Empower young people to establish, expand, or strengthen their businesses.<br></br>
          <span>Loan Features:</span> Tier 1: PKR 100,000 to PKR 1,000,000<br></br>
          Tier 2: PKR 1,000,000 to PKR 10,000,000<br></br>
          Tier 3: PKR 10,000,000 to PKR 25,000,000<br></br>
          <span>Eligibility:</span> Pakistani citizenship.
          Valid CNIC (Computerized National Identity Card).
          Minimum educational qualification may vary (matriculation or equivalent is generally required).
          Entrepreneurial potential and a viable business plan.<br></br>
          <span>Repayment term:</span> Typically longer than other loans, ranging from 10 to 30 years.<br></br>
          <span>Benefits:</span> Access to relatively affordable financing compared to traditional commercial loans (subject to confirmation on current program details).
          Support for young people to pursue their business aspirations.
          Potential for longer repayment terms easing the financial burden.<br></br>
          <h3>Start your loan journey today - compare offers and apply now!</h3>
          <Link to='/banklinks'>
            <button className='btn'>Check Links</button>
          </Link>
        </div>
      </div>

      <div className='title'>
        <h1>
          Prime Minister's Youth Business Loan:
        </h1>
      </div>
      <div className='main-resources-item'>
        <div className='resources-container'>
          <span>Target Audience:</span> Young Pakistani entrepreneurs between 21 and 45 years old (exceptions for IT professionals with matriculation or equivalent qualification - age 18 may apply).<br></br>
          <span>Goal:</span> Provide young people with subsidized financing to establish or expand their businesses.<br></br>
          <span>Loan Features:</span> Specific loan amount details might be subject to change, but it generally offered a significant sum to kickstart businesses.
          Interest rates were historically subsidized by the government, making them lower than traditional commercial loans.
          Repayment terms were reported to be flexible, potentially extending up to 8 years with a grace period.<br></br>
          <span>Eligibility:</span> Pakistani citizenship.
          Valid CNIC.
          Educational qualification (details may vary).
          A viable business plan demonstrating entrepreneurial potential.
          Meeting income or business turnover requirements (if applicable).<br></br>
          <span>Repayment term:</span> Typically longer than other loans, ranging from 10 to 30 years.<br></br>
          <span>Benefits:</span> Access to affordable financing for young entrepreneurs.
          Competitive interest rates (generally lower than traditional personal loans).
          Flexible repayment terms (typically ranging from 3 to 8 years).
          Promotes self-employment, job creation, and economic development.<br></br>
          <h3>Start your loan journey today - compare offers and apply now!</h3>
          <Link to='/banklinks'>
            <button className='btn'>Check Links</button>
          </Link>
        </div>
      </div>

      <div className='title'>
        <h1>
          Apna Rozgar Scheme:
        </h1>
      </div>
      <div className='main-resources-item'>
        <div className='resources-container'>
          <span>Target Audience:</span> Unemployed individuals residing in Punjab, Pakistan.
          May have specific eligibility criteria regarding age, education, or domicile.<br></br>
          <span>Goal:</span>Provide financial assistance to individuals for establishing small businesses or income-generating activities.<br></br>
          <span>Loan Features:</span>The program might offer subsidized loans through designated banks. Specific loan amounts and interest rates may vary depending on loan type and updates from the program.
          Potential loan categories could include:
          Loans for purchasing vehicles like Suzuki Ravi or Suzuki Bolan for transportation-based businesses.
          Financing for equipment or machinery needed for setting up small businesses.<br></br>
          <span>Eligibility:</span> Details might change, but potential requirements could include:
          Pakistani citizenship and Punjab residency.
          Valid CNIC.
          Completion of a relevant skill development training program (may vary).
          A viable business plan demonstrating feasibility.<br></br>
          <span>Repayment term:</span> Typically longer than other loans, ranging from 10 to 30 years.<br></br>
          <span>Benefits:</span>Access to financial resources for starting small businesses.
          Potential for subsidized loan terms compared to traditional commercial loans (subject to confirmation on current program details).
          Promotes self-employment and economic activity within Punjab.<br></br>
          <h3>Start your loan journey today - compare offers and apply now!</h3>
          <Link to='/banklinks'>
            <button className='btn'>Check Links</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default LoanGov
