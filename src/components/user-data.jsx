import React, { useState } from "react";
import BackArrow from "./back-arrow";

    

function UserData(){
    //Creamos un estado para cada hover, ya que si usamos un mismo estado para todos, todos se activan a la vez
    const [userIsActive, setUserActive] = useState(
        "false"
    );
    const handleUserHover = (e) =>{
        setUserActive(!userIsActive);
    };

    const [emailIsActive, setEmailActive] = useState(
        "false"
    );
    const handleEmailHover = (e) =>{
        setEmailActive(!emailIsActive);
    };

    const [savedIsActive, setSavedActive] = useState(
        "false"
    );
    const handleSavedHover = (e) =>{
        setSavedActive(!savedIsActive);
    };

    const [memberIsActive, setMemberActive] = useState(
        "false"
    );
    const handleMemberHover = (e) =>{
        setMemberActive(!memberIsActive);
    };

    const [bornIsActive, setBornActive] = useState(
        "false"
    );
    const handleBornHover = (e) =>{
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