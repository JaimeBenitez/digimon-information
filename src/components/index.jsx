import React from "react";
import Navbar from './navbar';
import PrincipalImage from "./principal-image";
import SearchBars from "./search-bars";
import Button from "./button";
import LoggedButton from "./logged-button";
import NotLoggedButton from "./not-logged-button";
import { useNavigate } from "react-router-dom";

function Index(){   
    const navigate = useNavigate();

   
    function logOut(){        
        if(window.confirm("Are you sure you want to log out? If you do your saved digimon list will lost")) {
            localStorage.clear();
            navigate("/"); 
                    
        }
    }

    
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
                        <NotLoggedButton direction="register">Register</NotLoggedButton>
                        <NotLoggedButton direction="login">Login</NotLoggedButton>
                        <LoggedButton direction="contact">My List</LoggedButton>
                        <button className={localStorage.getItem("user") ? "buttons" : "buttons--hide"} onClick={logOut}>Log out</button>
                    </nav>
                
            </section>
        </main>
    )



}

export default Index