import React, { useState } from 'react';
import './HeroEligibilityStyles.css';
import axios from 'axios'; // Import Axios

function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    purpose: '',
    amount: '',
    years: '',
    email: '',
    title: '',
    firstName: '',
    lastName: '',
    // birthDate: '',
    age: '', // Add age to the state
    maritalStatus: '',
    homeOwner: '',
    address: '',
    yearsAtAddress: '',
    employmentStatus: '',
    job: '',
    industry: '',
    employer: '',
    income: '',
    otherIncome: '',
    rentOrMortgage: '',
    dependents: '',
    contactEmail: '',
  });

  const [loanDetails, setLoanDetails] = useState(null);
  const [eligibilityMessage, setEligibilityMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      // Send form data to backend
      const response = await axios.post('http://localhost:3000/form/submit', formData);
      console.log(response.data); // Log response from backend

      // Set loan details from response
      setLoanDetails(response.data.loans);

      // Reset form data if submission is successful
      setFormData({
        purpose: '',
        amount: '',
        years: '',
        email: '',
        title: '',
        firstName: '',
        lastName: '',
        // birthDate: '',
        age: '', // Reset age
        maritalStatus: '',
        homeOwner: '',
        address: '',
        yearsAtAddress: '',
        employmentStatus: '',
        job: '',
        industry: '',
        employer: '',
        income: '',
        otherIncome: '',
        rentOrMortgage: '',
        dependents: '',
        contactEmail: '',
      });

      // Show eligibility message
      setEligibilityMessage('You are eligible for the following loans:');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="eligi-form-container">
      <form onSubmit={handleSubmit} className="eligibility-form">
        <section className="eligibility-form-section">
          <h2>What will you use this money for?</h2>
          <select name="purpose" value={formData.purpose} onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="Home">Home</option>
            <option value="Business">Business</option>
            <option value="Car">Car</option>
            <option value="Wedding">Wedding</option>
            <option value="Holiday">Holiday</option>
            <option value="Something else">Something else</option>
          </select>
          {errors.purpose && <span className="error">{errors.purpose}</span>}
        </section>

        <section className="eligibility-form-section">
          <h2>How much would you like to borrow?</h2>
          <select name="amount" value={formData.amount} onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="10000">£10,000</option>
            <option value="20000">£20,000</option>
            <option value="30000">£30,000</option>
            <option value="100000">£100,000</option>
            <option value="500000">£500,000</option>
            <option value="Another amount">Another amount</option>
          </select>
          {errors.amount && <span className="error">{errors.amount}</span>}
        </section>

        <section className="eligibility-form-section">
          <h2>How many years do you want to borrow it for?</h2>
          <select name="years" value={formData.years} onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="1 year">1 year</option>
            <option value="2 year">2 year</option>
            <option value="3 year">3 year</option>
            <option value="4 year">4 year</option>
            <option value="5 year">5 year</option>
            <option value="6 year">6 year</option>
          </select>
          {errors.years && <span className="error">{errors.years}</span>}
        </section>

        <section className="eligibility-form-section">
          <h2>About You</h2>
          <label>
            What's your email address?
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          {errors.email && <span className="error">{errors.email}</span>}
          <label>
            What's your title?
            <select name="title" value={formData.title} onChange={handleInputChange}>
              <option value="">Select an option</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
            </select>
          </label>
          {errors.title && <span className="error">{errors.title}</span>}
          <label>
            First Name
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          </label>
          {errors.firstName && <span className="error">{errors.firstName}</span>}

          <label>
            What is your last name?
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          </label>
          {errors.lastName && <span className="error">{errors.lastName}</span>}
          {/* <label>
            When were you born?
            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />
          </label> */}
          {errors.birthDate && <span className="error">{errors.birthDate}</span>}
          <label>
            Age
            <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
          </label>
          {errors.age && <span className="error">{errors.age}</span>}
          <label>
            What's your marital status?
            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange}>
              <option value="">Select an option</option>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
              <option value="Divorced">Divorced</option>
              <option value="Living with partner">Living with partner</option>
            </select>
          </label>
          {errors.maritalStatus && <span className="error">{errors.maritalStatus}</span>}
        </section>

        <section className="eligibility-form-section">
          <h2>Your home</h2>
          <label>
            Are you a homeowner?
            <select name="homeOwner" value={formData.homeOwner} onChange={handleInputChange}>
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          {errors.homeOwner && <span className="error">{errors.homeOwner}</span>}

          <label>
            What's your address?
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
          </label>
          {errors.address && <span className="error">{errors.address}</span>}
          <label>
            How many years have you lived at this address?
            <select name="yearsAtAddress" value={formData.yearsAtAddress} onChange={handleInputChange}>
              <option value="">Select an option</option>
              <option value="1 year">1 year</option>
              <option value="2 year">2 year</option>
            <option value="3 year">3 year</option>
            <option value="4 year">4 year</option>
            <option value="5 year">5 year</option>
            <option value="6 year">6 year</option>
            </select>
          </label>
          {errors.yearsAtAddress && <span className="error">{errors.yearsAtAddress}</span>}
        </section>

        <section className="eligibility-form-section">
          <h2>Your finances</h2>
          <label>
            What's your employment status?
            <input type="text" name="employmentStatus" value={formData.employmentStatus} onChange={handleInputChange} />
          </label>
          {errors.employmentStatus && <span className="error">{errors.employmentStatus}</span>}
          <label>
            What job do you do?
            <input type="text" name="job" value={formData.job} onChange={handleInputChange} />
          </label>
          {errors.job && <span className="error">{errors.job}</span>}
          <label>
            Which industry do you work in?
            <input type="text" name="industry" value={formData.industry} onChange={handleInputChange} />
          </label>
          {errors.industry && <span className="error">{errors.industry}</span>}
          <label>
            What is the name of your employer?
            <input type="text" name="employer" value={formData.employer} onChange={handleInputChange} />
          </label>
          {errors.employer && <span className="error">{errors.employer}</span>}
          <label>
            What's your annual income before tax?
            <input type="number" name="income" value={formData.income} onChange={handleInputChange} />
            </label>
            {errors.income && <span className="error">{errors.income}</span>}
          <label>
            Do you have any other household income?
            <select name="otherIncome" value={formData.otherIncome} onChange={handleInputChange}>
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          {errors.otherIncome && <span className="error">{errors.otherIncome}</span>}
          <label>
            How much do you pay towards your rent or mortgage each month?
            <input type="number" name="rentOrMortgage" value={formData.rentOrMortgage} onChange={handleInputChange} />
          </label>
          {errors.rentOrMortgage && <span className="error">{errors.rentOrMortgage}</span>}
          <label>
            How many people depend on you financially?
            <select name="dependents" value={formData.dependents} onChange={handleInputChange}>
              <option value="">Select an option</option>
              <option value="None">None</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3 or more">3 or more</option>
            </select>
          </label>
          {errors.dependents && <span className="error">{errors.dependents}</span>}

        </section>

        <section className="eligibility-form-section">
          <h2>Your contact information</h2>
          <label>
            Your email address?
            <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleInputChange} />
          </label>
          {errors.contactEmail && <span className="error">{errors.contactEmail}</span>}
        </section>

        <button id="eligibility-btn" type="submit">Submit</button>
      </form>
      
      {/* Display loan details and eligibility message */}
      {loanDetails && (
        <div className="loan-details-container">
          <h2>{eligibilityMessage}</h2>
          <ul>
            {loanDetails.map((loan) => (
              <li key={loan._id}>
                <p>{loan.loanName}</p>
                <a href={loan.link} target="_blank" rel="noopener noreferrer">Apply Now</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LoanApplicationForm;
