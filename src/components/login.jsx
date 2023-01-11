import React from "react";
import Navbar from "./navbar";
import PrincipalImage from "./principal-image";
import LoginForm from "./login-form";

function Login(){
    
    return (
        <main>        
            <PrincipalImage />   
            <section id="login">
                <Navbar />              
                <LoginForm />                 
            </section>
    </main>
    )
}

export default Login;
