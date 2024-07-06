import React from 'react'
import Navbar from '../components/Navbar'
import HeroLoanDetails from '../components/LoanDetails/HeroLoanDetails'
import Footer from '../components/Footer'
import FAQ from '../components/LoanDetails/FAQ'

const LoanDetails = () => {
  return (
    <div>
      <Navbar />
      <HeroLoanDetails />
      <FAQ />
      <Footer />
    </div>
  )
}

export default LoanDetails
