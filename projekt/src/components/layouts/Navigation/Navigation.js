import React from 'react';
import {NavLink} from 'react-router-dom'
import "./Navigation.scss"


const Navigation = () => {
    const selectedStyle={
        backgroundColor: "#b4d455"
    }


    return(
        <nav>
            <ul>
                <li><NavLink exact to="/" activeStyle={selectedStyle}>Home</NavLink></li>
                <li><NavLink exact to="/calendarPage/:id" activeStyle={selectedStyle}>Calendar</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={selectedStyle}>About Event</NavLink></li>

            </ul>

        </nav>
    )
}

export default Navigation;