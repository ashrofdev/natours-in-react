import React from 'react'
import {BtnGreen, Heading} from '../Btns/Btn'
import './booking.css'

const onclick = () => {
    document.querySelector('.r1').classList.toggle('check')
    document.querySelector('.r2').classList.remove('check')
}
const onclick2 = () => {
    document.querySelector('.r2').classList.toggle('check')
    document.querySelector('.r1').classList.remove('check')
}

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
                            <div className="r r1">
                                <span></span>
                            </div>
                            <input onChange={onclick} name="tour" placeholder="testing" type="radio"/>Small tour group
                        </label>
                        <label>
                            <div className="r r2">
                                <span></span>
                            </div>
                            <input onChange={onclick2} name="tour" placeholder="testing" type="radio"/>Large tour group
                        </label>
                    </div>
                    <BtnGreen name="NEXT STEP"/>
                </div>
            </div>
        </div>
    )
}
export default Booking