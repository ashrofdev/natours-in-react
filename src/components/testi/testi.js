import React from 'react'
import {Heading, Link} from '../Btns/Btn'
import './testi.css'


const Testi = () => {
    return (
        <div className = "testi">
            <Heading text={'WE MAKE PEOPLE GENUINELY HAPPY'}/>
            <div className="cont">
                <div className="cards">
                    <div className="card">
                    card 1
                    </div>
                    <div className="card">
                    card 2
                    </div>
                </div>
            </div>
            <Link text={'READ ALL STORIES'}/>
            <video autoPlay loop>
                <source src={require('../img/video.mp4')}/>
            </video>
        </div>
    )
}
export default Testi