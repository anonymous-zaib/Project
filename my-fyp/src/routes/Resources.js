import React from 'react'
import Navbar from '../components/Navbar'
import Resourceshero from '../components/Resources/Resourceshero'
import LoanGov from '../components/Resources/LoanGov'
import Footer from '../components/Footer'
import Title from '../components/Resources/Title'
import ResourcesItems from '../components/Resources/ResourcesItems'

const Resources = () => {
  return (
    <div>
    <Navbar />
    <Resourceshero  />
    <Title title="Explore Your Loan Options" subTitle="Discover a variety of loan types tailored to your needs. Whether you're planning for personal expenses, dream of owning a home, or desire a new car, explore our curated selection of loan options to find the perfect fit for you."  />
    <Title title="Personal Loan" />
    <ResourcesItems />
    <LoanGov />
    <Footer />
    </div>
  )
}

export default Resources
