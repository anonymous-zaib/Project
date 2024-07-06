import React from 'react'
import "./MissionStyles.css";

import Missions from "../assets/mission.png"
import Mission1 from "../assets/mission2.png"
import Mission2 from "../assets/mission4.png"
import Mission3 from "../assets/mission3.png"

const Mission = () => {
    return (
        <div className='main-mission-container'>
            <h1>We're on a mission to Simplifying your<span> financial journey</span></h1>
            <div className="mission-container">
                <div className="mission-card">
                    <img src={Missions} alt="Mission 1" />
                    <div className="mission-card-content">
                        <h2>Mission Simplify</h2>
                        <p>
                        Our goal is to demystify the world of loans, making financial decisions a breeze by simplifying complexities.
                        </p>
                    </div>
                </div>

                <div className="mission-card">
                    <img src={Mission1} alt="Mission 2" />
                    <div className="mission-card-content">
                        <h2>Your Financial Navigator</h2>
                        <p>
                        Consider us your compass through the twists and turns of loans, offering clear directions and valuable insights for a smooth financial journey.
                        </p>
                    </div>
                </div>

                <div className="mission-card">
                    <img src={Mission2} alt="Mission 3" />
                    <div className="mission-card-content">
                        <h2>Empowering Informed Choices</h2>
                        <p>
                        We empower you with the knowledge for confident financial decisions, providing essential insights to shape your financial future.
                        </p>
                    </div>
                </div>

                <div className="mission-card">
                    <img src={Mission3} alt="Mission 4" />
                    <div className="mission-card-content">
                        <h2>Simplicity in Complexity</h2>
                        <p>
                        Bringing simplicity to financial intricacies, we distill complex concepts into understandable information, ensuring ease in navigating your financial journey.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Mission
