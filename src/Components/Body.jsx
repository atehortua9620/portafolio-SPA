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
                <a href=" https://developer.mozilla.org/es/docs/Web/CSS "><img className="tech" src={css} alt="tech" /></a>
                <a href="https://developer.mozilla.org/es/docs/Web/HTML"><img className="tech" src={html} alt="tech" /></a>
                <a href="https://es.reactjs.org/"><img className="tech" src={rect} alt="tech" /></a>
                <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript"><img className="tech" src={js} alt="tech" /></a>
            </div>


        </div>
    )


}