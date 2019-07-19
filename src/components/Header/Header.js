import React from 'react'
import './head.css'
import {BtnWhite, BtnGreen} from '../Btns/Btn'

const Header =()=>{
    return (
        <div className="header">
            <img className="logo"/>
            <header>
                <h1 className="main-heading">OUTDOORS</h1>
                <h3 className="sub-heading">IS WHERE LIFE HAPPENS</h3>
            </header>
            <BtnWhite name={'DISCOVER OUR TOURS'}/>
        </div>
    )
}

export default Header