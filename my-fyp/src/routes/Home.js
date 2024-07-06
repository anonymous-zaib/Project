import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Purpose from '../components/Purpose'
import ChooseUs from '../components/ChooseUs'
import LoanTypes from '../components/LoanTypes'
import FAQ from '../components/LoanDetails/FAQ'
import LoanCalculator from '../components/LoanCalculator'
// import Mission from '../components/Mission'
import Financial from '../components/Financial'


const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Purpose />
        <ChooseUs />
        <LoanTypes />
        <LoanCalculator />
        <Financial />
        {/* <Mission /> */}
        <FAQ />
        <Footer />
      </div>
    </>
  )
}

export default Home
