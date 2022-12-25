import React from "react";
import Navbar from './navbar';
import PrincipalImage from "./principal-image";
import SearchBars from "./search-bars";
import Button from "./button";


function Index(){   
    
    return (
        <main>
            <PrincipalImage />
            <section id="principal">               
                <Navbar />
                <h1 className="principal__title">Digimon <span className="principal__title--span">information</span></h1>
                <h2 className="principal__subtitle">Your best <span className="principal__subtitle--span">digimon database</span></h2>
                    <SearchBars action="lista" />
                    <nav id="principal__nav-buttons">
                        <Button direction="contact">Contact</Button>
                        <Button direction="register">Register</Button>
                        <Button direction="login">Login</Button>
                    </nav>
                
            </section>
        </main>
    )



}

export default Index