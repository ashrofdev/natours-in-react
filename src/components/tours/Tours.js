import React from 'react'
import {Heading} from '../Btns/Btn'
import './tours.css'

const Tours = () => {
    return(
        <div className="tours">
            <Heading text={'MOST POPULAR TOURS'}/>
            <div className="cont">
                <div className="cards">
                    <div className="card">
                        <div className="side front">
                            front
                        </div>
                        <div className="side back">
                            back
                        </div>
                    </div>
                    <div className="card">
                        <div className="side front">
                            front
                        </div>
                        <div className="side back">
                            back
                        </div>
                    </div>
                    <div className="card">
                        <div className="side front">
                            front
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