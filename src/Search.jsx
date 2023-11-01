import React from "react";
import './Search.css'
import Searchlogo from './Images/search.png'

function Search () {
    return(
        <div className="searchdiv">
            <img src={Searchlogo}></img>
            <input className="searchinput" type="text" placeholder="Search"></input>
        </div>
    )
}

export default Search;