import react from "react";
import { NavLink } from "react-router-dom";
import "../Styles/menu.css"

import me from '../assets/pixmagen.PNG'
import logo from '../assets/logoB.png'



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
            <footer className="footerIM">
            <img className="logo" src={logo} alt="logo" />
            <p className="parrafo">Developed and designed by Andres Atehortua Henao</p>
            </footer>
        </div>
    );
}

export default menu;