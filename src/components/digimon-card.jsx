import React from "react";

function DigimonCard({index, name, img, level}){

    return (
        <div key={index} className='list__output'>
              <h2 className="list__output--title">{name}</h2>
              <section className="list__output--section">
                <img src={img} className="list__output--img" alt="digimon" />  
              </section> 
              <section className="list__output--section">             
                  <h3 className="list__output--subtitle">{level}</h3>                 
              </section>
        </div>  
    )

}

export default DigimonCard;