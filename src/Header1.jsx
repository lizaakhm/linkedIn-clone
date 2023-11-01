import React from "react";
import './Header1.css'
import Logo from './Images/Linkedinlogo.png'

function Header1 () {
    return(
        <header className="firstheader">
            <div className="headerwithlogo">
                <img  src={Logo}></img>
            </div>
        </header>
    )
}

export default Header1;

