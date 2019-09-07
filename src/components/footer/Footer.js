import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <img src={require('../img/logo-green-1x.png')}/>
            <div className="foot">
                <div className="left">
                    <ul>
                        <li>company</li>
                        <li>contact us</li>
                        <li>carears</li>
                        <li>privacy policy</li>
                        <li>terms</li>
                        <li>company</li>
                    </ul>
                </div>
                <div className="text">
                Newly built in React by SALMAN ASHRAF. Initialy
                built by JONAS SCHMEDTMANN for his online course 
                ADVANCED CSS AND SASS. Copyright © by Jonas Schmedtmann.
                 You are 100% allowed to use this webpage for both personal
                  and commercial use, but NOT to claim it as your own design.
                   A credit to the original author, Jonas Schmedtmann, is of course 
                   highly appreciated!
                </div>
            </div>
        </div>
    )
}
export default Footer