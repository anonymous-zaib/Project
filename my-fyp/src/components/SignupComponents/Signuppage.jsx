
import React, { useState } from 'react'
 import './Signup.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate()

    const validateUsername = (username) => {
        return /^[a-zA-Z]+$/.test(username)
    }

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
    }

    const validatePassword = (password) => {
        return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setUsernameError("")
        setEmailError("")
        setPasswordError("")

        let isValid = true

        if (!validateUsername(username)) {
            setUsernameError("Username should contain only alphabets")
            isValid = false
        }

        if (!validateEmail(email)) {
            setEmailError("Invalid email address")
            isValid = false
        }

        if (!validatePassword(password)) {
            setPasswordError("Password should contain at least 8 characters including alphabets, numbers, and special characters")
            isValid = false
        }

        if (isValid) {
            Axios.post('http://localhost:3000/auth/signup', {
                fullname,
                username,
                email,
                password,
            }).then(response => {
                if (response.data.status) {
                    navigate('/login')
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <div className='new-signup-form'>
            <div className="sign-up-container">
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    {/* <div className="error">{usernameError}</div> */}
                    <label htmlFor="username">Fullname</label>
                    <input type="text" placeholder='username' onChange={(e) => setFullname(e.target.value)} required/>

                    <div className="error">{usernameError}</div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} required/>

                    <div className="error">{emailError}</div>
                    <label htmlFor="email">Email</label>
                    <input type="email" autoComplete='off' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>

                    <div className="error">{passwordError}</div>
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder='******' onChange={(e) => setPassword(e.target.value)} required/>

                    <button type='submit' className='signup-btn'>Sign Up</button>
                    <p>Have an Account?<Link to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup
