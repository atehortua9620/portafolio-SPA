import react from "react";
import { FaMugHot } from "react-icons/fa";

import "../Styles/notFound.css"


function notFound(){

    return(
        <div className="notfound">
            <FaMugHot className="notFoundIcon"/>
            <h1 className=" ">SORRY...PAGE NOT FOUND</h1>
        </div>
    );
}

export default notFound;