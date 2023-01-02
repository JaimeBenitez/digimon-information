import React from "react";
import Navbar from './navbar';
import PrincipalImage from "./principal-image";
import UserData from "./user-data";

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