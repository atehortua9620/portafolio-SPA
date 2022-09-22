import react from "react";
import { NavLink } from "react-router-dom";
import "../Styles/menu.css"

import me from '../assets/pixmagen.PNG'


function menu (){
    return(
        <div className="fullContainer">
            <img className="imgMenu" src={me} alt="soyyo" />
            <ul className="itemsContainer">
                <NavLink className="linkMenu" to="/">HOME</NavLink>
                <NavLink className="linkMenu" to="/about">ABOUT ME</NavLink>
                <NavLink className="linkMenu" to="/hobbies">MY HOBBIES</NavLink>
                <NavLink className="linkMenu" to="/projects">PROJECTS</NavLink>
            </ul>
        </div>
    );
}

export default menu;