import React, { useState } from "react";
import Navbar from './navbar';
import PrincipalImage from "./principal-image";
import BackArrow from "./back-arrow";


function Contact(){
    //Usamos el estado para cambiar la clase del elemento que queremos
    const [isActive, setActive] = useState(
        "false"
    );
    const handleToogle = (e) => {
        e.preventDefault();
        setActive(!isActive);

    }
    //En este caso para que funcione el evento necesitamos toda la página junta, sin separar por componentes
    return (
        <main>        
            <PrincipalImage />   
            <section id="contact">
                <Navbar />              
                <form  id="contact__form">   
                    <fieldset id="contact__fieldset"> 
                        <h2 className="contact__subtitle">Contact Data</h2>            
                        <button className="buttons" id="contact__collaborators" onClick={handleToogle}>Collaborators</button>
                        <a href="https://digimon-api.vercel.app/" id="contact__faq" className="buttons">Faq</a>
                        <a href="suggestions.html" id="contact__suggestions" className="buttons">Suggestions</a>
                        <img src={require("../assets/img/Patamon-sf.png")} alt ="patamon" id="contact__img" />
                        <BackArrow />
                    </fieldset>                
                </form>                               
            </section>
            <section className= {isActive ? 'hide' : 'show'}>
                <h2 className="collaborators__title">Original API Idea</h2>
                <h3 className="collaborators__subtitle">Shadow Smith</h3>
                <h2 className="collaborators__title">Web Development <span className="collaborators__title--span">& Design</span></h2>
                <h3 className="collaborators__subtitle">Jaime Benitez</h3>
                <h2 className="collaborators__title">Special thanks</h2>
                <h3 className="collaborators__subtitle">Alejandro Carmona - Design</h3>
                <h3 className="collaborators__subtitle">Cristina Garcia - Frontend Development</h3>
                <h3 className="collaborators__subtitle">Jose Manuel Sánchez - Backend Development</h3>
                {/* En este caso no usamos el componente back-arrow ya que este tiene la funcionalidad de volver a la pag de contacto en el modo 
                responsive, no el de volver al index que tienen los demas */}
                <button  id="collaborators__back" ><img src={require("../assets/img/back-arrow.svg")} alt="back" className="arrow" /></button>
            </section>
    </main>
    )
}

export default Contact;
