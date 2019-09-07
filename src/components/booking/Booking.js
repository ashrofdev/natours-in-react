import React from 'react'
import {BtnGreen, Heading} from '../Btns/Btn'
import './booking.css'

const Booking = () => {
    return (
        <div className="booking">
            <div className="cont">
                <div className="book">
                    <Heading text="START BOOKING NOW" />
                    <input className="input" placeholder="Full Name"/>
                    <input className="input" placeholder="Email Address" type="email"/>
                    <div className="checks">
                        <label>
                            <input name="tour" placeholder="testing" type="radio"/>Small tour group
                        </label>
                        <label>
                            <input name="tour" placeholder="testing" type="radio"/>Large tour group
                        </label>
                    </div>
                    <BtnGreen name="NEXT STEP"/>
                </div>
            </div>
        </div>
    )
}
export default Booking