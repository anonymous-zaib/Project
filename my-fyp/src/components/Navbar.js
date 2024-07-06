import React, { useState } from 'react'
import "./NavbarStyles.css"
import { Link } from 'react-router-dom'

import { FaBars, FaTimes } from "react-icons/fa"
const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/">
                    <h1>Loan<span>Check</span></h1>
                </Link>
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* <li>
                    <Link to="/Login">EligibilityCheck</Link>
                </li> */}
                <li>
                    <Link to="/resources">Resources</Link>
                </li>
                <li>
                    <Link to="/loanDetails">LoanDetails</Link>
                </li>
                <li>
                    <Link to="/applicationProcess">ApplicationProcess</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                {/* <div className='btn'><Link to="/signup"><button>Login</button></Link></div> */}
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />
                ) : (<FaBars size={20} style={{ color: "#fff" }} />)}


            </div>
        </div>
    )
}

export default Navbar
