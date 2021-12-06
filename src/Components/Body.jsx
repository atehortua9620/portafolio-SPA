import React from 'react';
import '../Styles/Body.css';
import css from '../assets_portafo/CSS.png';
import html from '../assets_portafo/HTML.png';
import rect from '../assets_portafo/react.png';
import js from '../assets_portafo/JAVASCRIPT.png';

export default function ImBody (){

    return(
        <div className="containerbody">
            
            <h2>SKILLS</h2>
            <div className="techcontainer">
                <img className="tech" src={css} alt="tech" />
                <img className="tech" src={html} alt="tech" />
                <img className="tech" src={rect} alt="tech" />
                <img className="tech" src={js} alt="tech" />
            </div>


        </div>
    )


}