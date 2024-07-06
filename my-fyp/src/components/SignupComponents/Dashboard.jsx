
// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';

// const Dashboard = () => {
  
//     return (
//         <div>
//             <header class="react-header">
//         <h1>Dashboard</h1>
//     </header>
//     <nav class="react-nav">
//         <ul>
//             <li>Overview</li>
//             <li>Profile</li>
//             <li>Settings</li>
//             <li>Logout</li>
//         </ul>
//     </nav>
//     <main class="react-main">
//         <section id="react-overview" class="react-section">
//             <h2>Overview</h2>
//             <div class="react-card">
//                 <h3>Card 1</h3>
//                 <p>Content for Card 1</p>
//             </div>
//             <div class="react-card">
//                 <h3>Card 2</h3>
//                 <p>Content for Card 2</p>
//             </div>
//             <div class="react-card">
//                 <h3>Card 3</h3>
//                 <p>Content for Card 3</p>
//             </div>
//         </section>
//         <section id="react-profile" class="react-section">
//             <h2>Profile</h2>
//             <p>Username: </p>
//             <p>Email: </p>
//         </section>
//         <section id="react-settings" class="react-section">
//             <h2>Settings</h2>
//             <p>User settings go here.</p>
//         </section>
//     </main>
//         </div>
//     );
// }

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate()
    const handleLogout = () =>{
        axios.get('http://localhost:3000/auth/logout')
        .then(res => {
            if(res.data.status){
                navigate('/')
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3000/auth/profile')
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div>
            <header className="react-header">
                <h1>Dashboard</h1>
            </header>
            <nav className="react-nav">
                <ul>
                    <li>Overview</li>
                    <li>Profile</li>
                    <li>Instruction</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </nav>
            <main className="react-main">
                <section id="react-overview" className="react-section">
                    <h2>Overview</h2>
                    <div className="react-card">
                        <h3>Financial Summary:</h3>
                        <p>View your current financial standing at a glance. Track expenses, monitor income, and stay informed about your overall financial health</p>
                    </div>
                    <div className="react-card">
                        <h3>Recent Transactions:</h3>
                        <p>Stay up-to-date with your latest transactions. Easily monitor spending, track payments, and manage your budget effectively</p>
                    </div>
                    <div className="react-card">
                        <h3>Upcoming Events:</h3>
                        <p>Keep track of important financial events. Be informed about upcoming bills, payments, and other financial commitments to stay organized and prepared.</p>
                    </div>
                </section>
                <section id="react-profile" className="react-section">
                    <h2>Profile</h2>
                    <p>Fullname: {userData.fullname}</p>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <Link to='../eligibilityCheck'>
                        <button className='btn'>CheckEligibility</button>
                    </Link>
                </section>
                <section id="react-settings" className="react-section">
                    <h2>Instructions:</h2>
                    <p>Sign Up</p>
                    <p>Profile Setup</p>
                    <p>Check Eligibility</p>
                    <p>View Results</p>
                    <p>Compare Loans</p>
                    <p>Bank Links</p>
                    <p>Apply Online</p>
                    <p>Read Resources</p>
                    <p>Get Support</p>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
