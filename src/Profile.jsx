import React from "react";
import './Profile.css'
import Background from './Images/Background.png'
import ProfileImage from './Images/Profimg.png'
import Redmark from './Images/bookmark 1.png'
import Pen from './Images/pen.png'
import Camera from './Images/camera.png'


function Profile () {
    return(
        <div className="profileparentdiv"> 
          <div className="bckimg">
            <img className="backimg" src={Background}></img>
          </div>
          <img className="pfp" src={ProfileImage}></img>
          <div className="infoside">
            
            <div className="topside">
                <img src={Redmark} className="redmark"></img>
                <div className="icons">
                    <img src={Pen}></img>
                    <img src={Camera}></img>
                </div>
            </div>

            <div className="bottomside"></div>
          </div>
        </div>
    )
}

export default Profile;