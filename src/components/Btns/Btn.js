import React from 'react'
import './btn.css'

export const BtnWhite = ({name}) => {
    return <button className="btn btn-white" style={{fontSize: '1.3rem', padding: '1.5rem 3rem'}}>{name}</button>
}

export const BtnGreen = ({name}) => {
    return <button className="btn btn-green" style={{fontSize: '1.1rem', color: 'white', padding: '1rem 2rem'}}>{name}</button>
}