import React from "react";
import './Header2.css';
import Logo from './Images/Linkedinlogo.png'
import Ovalpic from './Images/Ovalpic.png'

function Header2 () {
    return(
        <header>
         <div className="grayheader">
            <img className="linklogo" src={Logo}></img>
            <ul className="footerul">
                <li>Home</li>
                <li>My Network</li>
                <li>Jobs</li>
                <li>Messaging</li>
                <li>Notificatons</li>
            </ul>
            <img className="ovalimg" src={Ovalpic}></img>
         </div>    
        </header>
    )
}

export default Header2;