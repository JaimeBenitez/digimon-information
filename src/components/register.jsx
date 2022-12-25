import React from "react";
import Navbar from './navbar';
import PrincipalImage from "./principal-image";
import RegisterForm from "./register-form";

function Register(){
    
    return (
        <main>        
            <PrincipalImage />   
            <section id="register">
                <Navbar />              
                <RegisterForm />                 
            </section>
    </main>
    )
}

export default Register;
