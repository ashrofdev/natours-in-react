import React from 'react'
import {Heading} from '../Btns/Btn'
import './tours.css'

const Tours = () => {
    return(
        <div className="tours">
            <Heading text={'MOST POPULAR TOURS'}/>
            <div className="cont">
                <div className="cards">
                    <div className="card card1">
                        <div className="side front">
                            <div className="head">
                                head
                            </div>
                            <h2>THE SEA EXPLORER</h2>
                            <ul>
                                <li>3 days tour</li>
                                <li>up to 30 people</li>
                                <li>2 tour guides</li>
                                <li>sleep in cozy hotels</li>
                            </ul>
                        </div>
                        <div className="side back">
                            back
                        </div>
                    </div>
                    <div className="card card2">
                        <div className="side front">
                            <div className="head">
                                head
                            </div>
                            <h2>THE SEA EXPLORER</h2>
                            <ul>
                                <li>3 days tour</li>
                                <li>up to 30 people</li>
                                <li>2 tour guides</li>
                                <li>sleep in cozy hotels</li>
                            </ul>
                        </div>
                        <div className="side back">
                            back
                        </div>
                    </div>
                    <div className="card card3">
                        <div className="side front">
                            <div className="head">
                                head
                            </div>
                            <h2>THE SEA EXPLORER</h2>
                            <ul>
                                <li>3 days tour</li>
                                <li>up to 30 people</li>
                                <li>2 tour guides</li>
                                <li>sleep in cozy hotels</li>
                            </ul>
                        </div>
                        <div className="side back">
                            back
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tours