import React from "react";
import "./index.css";

import Home from "./routes/Home";
import EligibilityCheck from "./routes/EligibilityCheck";
import Resources from "./routes/Resources";
import LoanDetails from "./routes/LoanDetails";
import ApplicationProcess from "./routes/ApplicationProcess";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
// import Login from "./routes/Login";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import DashHome from "./components/SignupComponents/DashHome";
import BankLinks from "./components/BankLinks/BankLinks";
import CalculatorLoan from "./components/Calculator/calculateLoan"
// import Signup from "./components/Signup";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/eligibilityCheck" element={<EligibilityCheck/>} />
      <Route path="/resources" element={<Resources/>} />
      <Route path="/loanDetails" element={<LoanDetails/>} />
      <Route path="/applicationProcess" element={<ApplicationProcess/>} />
      <Route path="/contact" element={<Contact/>} />
      {/* <Route path="/signup" element={<Login/>} /> */}
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/signup" element={<Signup />} />  
      <Route path="/login" element={<Login />} />  
      <Route path="/dashhome" element={<DashHome />} /> 
      <Route path="/banklinks" element={<BankLinks />} /> 
      <Route path="/calculator" element={<CalculatorLoan />} /> 
    </Routes>
    </>
  );
}

export default App;
