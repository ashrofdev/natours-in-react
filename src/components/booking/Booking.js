import React from 'react'
import {BtnGreen, Heading} from '../Btns/Btn'
import './booking.css'

const Booking = () => {
    return (
        <div className="booking">
            <div className="cont">
                <div className="book">
                    <Heading text="START BOOKING NOW" />
                    <input placeholder="Full Name"/>
                    <input placeholder="Email Address" type="email"/>
                    <div className="checks">
                        <input placeholder="testing" type="radio"/>
                        <input type="radio"/>
                    </div>
                    <BtnGreen name="NEXT STEP"/>
                </div>
            </div>
        </div>
    )
}
export default Booking