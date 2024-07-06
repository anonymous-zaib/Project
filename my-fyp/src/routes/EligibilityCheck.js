import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroEligibility from '../components/EligibilityCheck/HeroEligibility'
// import ResultPage from '../components/EligibilityCheck/ResultPage'

const EligibilityCheck = () => {
  return (
    <div>
      <Navbar />
      <HeroEligibility />
      {/* <ResultPage /> */}
      <Footer />
    </div>
  )
}

export default EligibilityCheck
