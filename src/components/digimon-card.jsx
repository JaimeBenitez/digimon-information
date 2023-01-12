/**
 * @file digimon-card.jsx - Digimon Card Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React,{useState} from "react";

function DigimonCard({index, name, img, level}){
    const [isSelected, setIsSelected] = useState(false);
    
    /**
     * Funcion que cambia el estado para cambiar el estilo de la carta y activar el boton de save
     * @param {string} e - El evento que activa la función, en este caso click 
     *      
     */
    function handleSelection(){
        setIsSelected(!isSelected)      
    }
    
    /**
     * Funcion que nos permitira guardar los nombres de los digimon en el local storage al pulsar en Save    
     *     
     */   
    function handleSave(){
    //En esta lista iremos guardando los digimon que formarán parte de la lista de favoritos del usuario
      let digimonList = []
      //Si está en la lista ya no se incluirá
      if(localStorage.getItem("digimonlist")){
        digimonList = localStorage.getItem("digimonlist").split(",");  
      }
      if(digimonList.indexOf(name) === -1){  
        digimonList.push(name);  
        localStorage.setItem("digimonlist",digimonList);
      }        
    }
    
    return (
        <div key={index} className={isSelected ? "list__card--selected" : "list__card"} onClick={handleSelection}>
              <h2 className="list__card--title" id="digimon__name" >{name}</h2>
              <section className="list__card--section">
                <img src={img} className="list__card--img" alt="digimon" />  
              </section> 
              <section className="list__card--section">             
                <h3 className="list__card--subtitle">{level}</h3>                 
                <button id="list__save" className="buttons" disabled={isSelected ? false : true} onClick={handleSave}>Save</button>                                
              </section>             
        </div>  
    )

}

export default DigimonCard;