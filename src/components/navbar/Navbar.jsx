import "./navbar.css"
import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Navbar() {
  return (
    <div className="navbar_container">
        <div className="left">
            <span className="navLeftItem">HOME</span>
            <span className="navLeftItem">Country</span>
            <span className="navLeftItem">Club</span>
        </div>
        <div className="right">
            <div className="dropdown_container">
             <div className="right_shown">  
              <span>CHOOSE GENRE</span>
                <span><IoMdArrowDropdown className="nav_dropdown"/></span>
             </div>
                <div className="menu">
                    <select className="nav_select">
                        <option>Select Genre</option>
                        <option>Goals</option>
                        <option>Dribbles</option>
                        <option>Funny</option>
                    </select>
                </div>
            </div>
        </div>

    </div>
  )
}



      
