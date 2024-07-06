// import React, { useState } from 'react';
// import './calculateLoan.css';

// function LoanCalculator() {
//   const [calculationType, setCalculationType] = useState('monthly');
//   const [amount, setAmount] = useState('');
//   const [years, setYears] = useState('1');
//   const [interestRate, setInterestRate] = useState('0.1');
//   const [result, setResult] = useState('');

//   const calculateLoan = () => {
//     const amountValue = parseFloat(amount);
//     const yearsValue = parseInt(years);
//     const interestRateValue = parseFloat(interestRate) / 100;

//     const monthlyInterestRate = interestRateValue / 12;
//     const totalMonths = yearsValue * 12;

//     let resultText = '';
//     let monthlyPayment = 0;

//     if (calculationType === 'monthly') {
//       if (!isNaN(amountValue) && !isNaN(yearsValue) && !isNaN(interestRateValue)) {
//         monthlyPayment = calculateMonthlyPayment(amountValue, monthlyInterestRate, totalMonths);
//         const totalPayment = monthlyPayment * totalMonths;
//         resultText = `Monthly Payment: PKR ${monthlyPayment.toFixed(2)} | Total Payment: PKR ${totalPayment.toFixed(2)}`;
//       }
//     } else if (calculationType === 'afford') {
//       if (!isNaN(yearsValue) && !isNaN(interestRateValue)) {
//         monthlyPayment = amountValue / totalMonths;
//         resultText = `You can afford to pay PKR ${monthlyPayment.toFixed(2)} per month for ${years} years at an interest rate of ${interestRate}%`;
//       }
//     }

//     setResult(resultText);
//   };

//   const calculateMonthlyPayment = (amount, monthlyInterestRate, totalMonths) => {
//     if (monthlyInterestRate === 0) {
//       return amount / totalMonths;
//     } else {
//       return (amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
//     }
//   };

//   const handleCalculationTypeChange = (event) => {
//     setCalculationType(event.target.value);
//     setResult('');
//   };

//   return (
//     <div className="container">
//       <h1>Loan Calculator</h1>
//       <div className="calculator">
//         <div className="radio-buttons">
//           <label>
//             <input
//               type="radio"
//               name="calculationType"
//               value="monthly"
//               checked={calculationType === 'monthly'}
//               onChange={handleCalculationTypeChange}
//             /> Calculate monthly repayments
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="calculationType"
//               value="afford"
//               checked={calculationType === 'afford'}
//               onChange={handleCalculationTypeChange}
//             /> What can I afford?
//           </label>
//         </div>
//         <div className="inputs">
//           <h3>Amount you wish to borrow:</h3>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter amount in PKR"
//           />
//           <h3>For how long?</h3>
//           <select value={years} onChange={(e) => setYears(e.target.value)}>
//             {Array.from({ length: 20 }, (_, i) => i + 1).map((year) => (
//               <option key={year} value={year}>{year} Year</option>
//             ))}
//           </select>
//           <h3>APR interest rate:</h3>
//           <select value={interestRate} onChange={(e) => setInterestRate(e.target.value)}>
//             {Array.from({ length: 260 }, (_, i) => i + 1).map((rate) => (
//               <option key={rate} value={(rate / 10).toFixed(1)}>{(rate / 10).toFixed(1)}%</option>
//             ))}
//           </select>
//           <button onClick={calculateLoan}>Calculate</button>
//         </div>
//         <div className="result">{result}</div>
//       </div>
//     </div>
//   );
// }

// export default LoanCalculator;

import React, { useState } from 'react';
import './calculateLoan.css';

function LoanCalculator() {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [interest, setInterest] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [totalCost, setTotalCost] = useState('');

  const calculateLoan = () => {
    const loanAmount = parseFloat(amount);
    const loanTerm = parseFloat(term) * 12;
    const loanInterest = parseFloat(interest) / 100 / 12;

    const monthlyPayment = (loanAmount * loanInterest) / (1 - Math.pow(1 + loanInterest, -loanTerm));
    const totalInterest = monthlyPayment * loanTerm - loanAmount;
    const totalCost = loanAmount + totalInterest;

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
    setTotalCost(totalCost.toFixed(2));
  };

  return (
    <div className='loan-cal-main'>
      <div className='cal-main-hed'>
      <h1>Loan Calculator</h1>
      </div>
      
      <div className="loancalculator-container">
        <div className="input-field">
          <label htmlFor="amount">Amount you wish to borrow</label>
          <input type="number" id="amount" placeholder="Enter amount e.g. £1,500" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="term">Loan Term (Years)</label>
          <input type="number" id="term" placeholder="For how long?" value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="interest">APR Interest Rate</label>
          <input type="number" id="interest" placeholder="0.1%" value={interest} onChange={(e) => setInterest(e.target.value)} />
        </div>
        <button className='loan-btn' onClick={calculateLoan}>Calculate</button>
      </div>
      <div className="results-container">
        <p>Monthly Payment: <span id="monthly-payment">£{monthlyPayment}</span></p>
        <p>Total Interest Paid: <span id="total-interest">£{totalInterest}</span></p>
        <p>Total Cost of Loan: <span id="total-cost">£{totalCost}</span></p>
      </div>
    </div>
  );
}

export default LoanCalculator;
