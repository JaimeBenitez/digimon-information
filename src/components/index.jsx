import React from "react";
import Navbar from './navbar';
import PrincipalImage from "./principal-image";
import PrincipalButton from "./principal-button";
import Button from "./button";
import LoggedButton from "./logged-button";
import NotLoggedButton from "./not-logged-button";
import { useNavigate } from "react-router-dom";

function Index(){   
    const navigate = useNavigate();

    //Para quitar el overflow en el caso de que se venga desde una página de lista
    document.body.classList.remove("list__body");
    
   
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
                <section className="principal__button--section">                    
                    <PrincipalButton>Enter to the digiworld</PrincipalButton>
                </section>
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