import React from 'react';

import foto from '../assets_portafo/pixmagen.PNG'
import '../Styles/Profile.css';

export default function MyProfile (){

    return(
        <div className="container">
            <img src={foto} alt="foto perfil"></img>
            <div>
                <h1 className=" type title">Front-end developer</h1>
                <p className="type">Hello, it’s Andrés Atehortúa, i’m a front-end developer.<br/>i’m a person interested in a lot of fields as sports,<br/> technology, photography and music.<br/> Along of my formation as front-end developer,<br/> i’ve worked in the following projects at Acamica.</p>
            </div>

        </div>
    );

}