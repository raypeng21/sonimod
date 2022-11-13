import React from 'react'
import logo from "../assets/images/logo_main.png";
import {  Link } from "react-router-dom";
import  './Main.css';

function Main() {
  return (
    <div className='main_container'>
        <div className="center_box">
            <img className='biglogo' src={logo} alt="" />
            <div className="nav_box">
                    <div className="nav_top">
                    <i class="ri-user-location-fill"></i>
                    <input className='address_box' type="text" placeholder='  Enter your address' />
                    </div>
                    <div className="nav_bottom">
                    <Link to="/sonimod">
                    <button className='main_button'> Start your Sonimod Order  </button>

                    </Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Main