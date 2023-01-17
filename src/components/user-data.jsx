/**
 * @file user-data.jsx - User Data Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */


import React, { useState } from "react";
import BackArrow from "./back-arrow";
/**
 * @module User-Data
 */
    
/**
* Componente que renderiza los datos del usuario
* @memberof module:User-Data
* @returns {JSX}      
*/
function UserData(){
    //Creamos un estado para cada hover, ya que si usamos un mismo estado para todos, todos se activan a la vez
    const [userIsActive, setUserActive] = useState(
        "false"
    );
    /**
    * Funcion que controla el hover del nombre de usuario
    * @memberof module:User-Data 
    */
    const handleUserHover = () =>{
        setUserActive(!userIsActive);
    };

    const [emailIsActive, setEmailActive] = useState(
        "false"
    );

    /**
    * Funcion que controla el hover del email
    * @memberof module:User-Data
    */
    const handleEmailHover = () =>{
        setEmailActive(!emailIsActive);
    };

    const [savedIsActive, setSavedActive] = useState(
        "false"
    );
    /**
    * Funcion que controla el hover del numero de digimon guardados 
    * @memberof module:User-Data
    */
    const handleSavedHover = () =>{
        setSavedActive(!savedIsActive);
    };

    const [memberIsActive, setMemberActive] = useState(
        "false"
    );

    /**
    * Funcion que controla el hover de la fecha de union a la página
    * @memberof module:User-Data
    */
    const handleMemberHover = () =>{
        setMemberActive(!memberIsActive);
    };

    const [bornIsActive, setBornActive] = useState(
        "false"
    );

    /**
    * Funcion que controla el hover de la fecha de nacimiento
    * @memberof module:User-Data
    */
    const handleBornHover = () =>{
        setBornActive(!bornIsActive);
    };

    let digimonList = []
    if(localStorage.getItem("digimonlist")){
    digimonList = localStorage.getItem("digimonlist").split(",")
    }
   
    let count = 0;

    for(let i = 0; i < digimonList.length; i++){
        
        count++;
    }


    return(
        <section className="user__data"> 
                <span className="user__title">User Data</span> 

                <span className="user__subtitle">Username</span>
                <span className={userIsActive ? "user__text" : "user__text--hover"} onMouseOver={handleUserHover} onMouseLeave={handleUserHover}>
                    {localStorage.getItem("user")}</span>  

                <span className="user__subtitle">Email:</span>                        
                <span className={emailIsActive ? "user__text" : "user__text--hover"} onMouseOver={handleEmailHover} onMouseLeave={handleEmailHover}>
                    {localStorage.getItem("email")}</span>

                <span className="user__subtitle">Digimon Saved:</span>                        
                <span className={savedIsActive ? "user__text" : "user__text--hover"} onMouseOver={handleSavedHover} onMouseLeave={handleSavedHover}>
                    {count}</span>

                <span className="user__subtitle">Member since:</span>  
                <span className={memberIsActive ? "user__text" : "user__text--hover"} onMouseOver={handleMemberHover} onMouseLeave={handleMemberHover}>
                    {localStorage.getItem("registerDate")}</span>

                <span className="user__subtitle">Born in:</span>                        
                <span className={bornIsActive ? "user__text" : "user__text--hover"} onMouseOver={handleBornHover} onMouseLeave={handleBornHover}>
                    {localStorage.getItem("bornDate")}</span>    

                <BackArrow />
            </section>  
    )
}
export default UserData;