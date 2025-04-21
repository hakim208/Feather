import React from 'react'
import "./navbar.css"


const Navbar = ({ img ,karzina }) => {
    return (
        <div className='nav'>
            <div className="box-Text">
                <p>Furniture</p>
                <p>Why Feather</p>
                <p>Feather for Business</p>
            </div>
            <img src={img} alt="" />
            <div className="box-Text">
                <p>Check if We Deliver</p>
                <p>Search</p>
                <p>Account</p>
            </div>
            <img src={karzina} alt="" />
        </div>
    )
}

export default Navbar
