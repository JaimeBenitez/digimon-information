/**
 * @file user.jsx - User Page
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */


import React from "react";
import Navbar from "./navbar";
import PrincipalImage from "./principal-image";
import UserData from "./user-data";
/**
 * @module User
 */
/**
* Componente que renderiza la pantalla de usuario
* @memberof module:User-Data
* @returns {JSX}       
*/
function User(){
    
    return (
        <main>        
            <PrincipalImage />   
            <section id="user">
                <Navbar />              
                <UserData />                 
            </section>
    </main>
    )
}

export default User;