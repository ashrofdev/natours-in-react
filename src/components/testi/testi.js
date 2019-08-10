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
                        <div className="conte">
                            <div className="img">
                                <img src={require('../img/nat-8.jpg')} />
                            </div>
                            <div className="text">
                                <h4>I HAD THE BEST WEEK EVER WITH MY FAMILY</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                     elit. Aperiam, ipsum sapiente aspernatur libero 
                                     repellat quis consequatur ducimus quam nisi exerci
                                     tationem omnis earum qui. Aperiam, ipsum sapiente 
                                     aspernatur libero
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="conte">
                            <div className="img">
                                <img src={require('../img/nat-9.jpg')} />
                            </div>
                            <div className="text">
                                <h4>I HAD THE BEST WEEK EVER WITH MY FAMILY</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Aperiam, ipsum sapiente aspernatur libero repellat quis cons
                                     equatur ducimus quam nisi exercitationem omnis earum qui. Aper
                                     iam, ipsum sapiente aspernatur libero
                                </p>
                            </div>
                        </div>
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