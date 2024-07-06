import React from 'react'
import "./FAQStyles.css";
import { useState } from 'react';

const FAQ = () => {
    
    const faqs = [
        {
          question: 'What information will I need to provide in my loan application?',
          answer: 'When applying for a loan, you’ll need to provide personal details such as your name, contact details and address. You’ll also have to let the lender know your employment status and your income. You will also be asked what you need the loan for and how much you’re looking to borrow. You should expect to be asked about any debts and assets you have as well as if you’re a homeowner.',
        },
        {
          question: 'What are secured and unsecured loans?',
          answer: 'A secured loan is a loan you can take out that’s tied to an asset of yours as security. For example a mortgage is a type of secured loan, and the asset would be the house you take the mortgage out on – when you repay the loan the house is yours, but if you don’t repay then the lender could seize your house.    An unsecured loan isn’t tied to any collateral, and as a result you normally need at least a fair credit score to qualify. There is also often a maximum amount you’ll be allowed to borrow.',
        },
        {
            question:'How much can I borrow?',
            answer:'The amount you’ll be eligible to borrow will depend on your personal circumstances – if you have a poor or limited credit history, you may not be able to borrow as much as someone with a good credit history.'
        },
        {
            question:'How long can I take out a loan for?',
            answer:'The length of your loan can vary depending on the type of loan you take out and the provider you choose, but it could be anywhere between a year and ten years. Taking out a loan for a longer period of time may reduce your monthly payments, but you may end up paying more for the loan due to interest payments.'
        },
        {
            question:'How do I know if I’m eligible for a loan?',
            answer:'Different lenders and different types of loans will have varying requirements, but in general whether or not you qualify will depend on your personal details and your credit history. However you can always compare loans on MoneySuperMarket – all you need to do is answer a few questions about the loan you want to take out and you’ll be given a tailored list, which you can sort by interest rates and the likelihood of your application being accepted.'
        },
        {
            question:'How do I apply for a loan?',
            answer:'You can generally apply for loans by contacting the provider you choose – either by calling through the phone, sending an application form through the post, applying online, or dropping in to their branch (if they have one) to apply in person.'
        },
        {
            question:'Do I need a good credit rating?',
            answer:'For many loans you’ll need a good credit history to be accepted, but some providers also offer loans designed for people with poor or no credit. For example, you can get guarantor loans where someone else will commit to make your repayments if you can’t.'
        },
        {
            question:'What is a soft search?',
            answer:'A soft-search or soft-application is a way of finding out where you stand in terms of getting a loan without leaving a mark on your credit report. It’s a useful way of finding a loan you’ll be eligible for without harming your chances of being accepted.'
        },
        {
            question:'What if I miss repayments?',
            answer:'Missing repayments can mean you might be fined by your lender, and it could also end any low or zero interest incentives you have. It may even lead to a hike in the interest rate you’ll make future repayments at.'
        },
        {
            question:'What if I’m struggling to repay my loan?',
            answer:'If you’re struggling with your finances and you think you might not be able to make your repayments, you should call your lender as soon as possible – they may be able to help you work out an easier repayment plan or a repayment holiday. Not letting your bank know could mean you’ll be penalised for missing any payments.'
        }
        // Add more FAQs as needed
      ];
    
      const FaqItem = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleOpen = () => {
          setIsOpen(!isOpen);
        };
    
        return (
          <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="question" onClick={toggleOpen}>
              <span className="question-text">{question}</span>
              <span className="icon">▼</span>
              <div className="line"></div>
            </div>
            <div className="answer">{answer}</div>
          </div>
        );
      };
    
      return (
        
        <div className="faq-container">
            <div className='heading'><h1>FAQs</h1></div>   
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      );
}

export default FAQ
