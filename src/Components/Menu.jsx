import react from "react";
import { NavLink } from "react-router-dom";
import "../Styles/menu.css"

import me from '../assets/pixmagen.PNG'
import logo from '../assets/logoB.png'

import { FaInstagram,FaFacebookF,FaGithub } from "react-icons/fa";


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
            <div className="iconsSocial">
                <a href="https://www.instagram.com/andresat96/?hl=es-la"><FaInstagram className="onlyIcon"/></a> 
                <a href="https://www.facebook.com/jorge.a.henao.7"><FaFacebookF className="onlyIcon"/></a> 
                <a href="https://github.com/atehortua9620"><FaGithub className="onlyIcon"/></a> 
            </div>
            </footer>
        </div>
    );
}

export default menu;