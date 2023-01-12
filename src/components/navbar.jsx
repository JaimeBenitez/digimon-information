/**
 * @file navbar.jsx - Navbar Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */
import React from "react";
import ModeButton from "./mode-button";

function Navbar(){
    return(
        <nav className="nav-rss">
            <ul>
                {/* Usamos el .default en las imagenes para que webpack no nos de problemas al cargarlas */}
                <li><a href="https://www.github.com" target="_blank" rel="noreferrer"><img src={require("../assets/img/github.svg").default} className="svg" alt="github" /></a></li>
                <li><a href="https://www.instagram.com" target="_blank " rel="noreferrer"><img src={require("../assets/img/instagram-filled.svg").default} className="svg" alt="instagram" /></a></li>
                <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img src={require("../assets/img/twitter-logo-fill.svg").default} className="svg" alt="twitter" /></a></li>
            </ul>
            <div className="nav__section">                    
                <ModeButton isList={false} />
                <a href="user.html"><img src={require("../assets/img/user-circle.svg").default} className={localStorage.getItem("user") ? "user__link" : "user__link--hide"} alt="user"/></a>
            </div>                
        </nav>
    )
}

export default Navbar;