import React,{useState} from "react";

function DigimonCard({index, name, img, level}){
    const [isSelected, setIsSelected] = useState(false);
    
    function handleSelection(){
        setIsSelected(!isSelected)
       
      
    }
   //Esto nos permitira guardar los nombres de los digimon en el local storage
   function handleSave(){
    //En esta lista iremos guardando los digimon que formarán parte de la lista de favoritos del usuario
    let digimonList = []
    //Si está en la lista ya no se incluirá
    if(localStorage.getItem('digimonlist')){
      digimonList = localStorage.getItem('digimonlist').split(',');  
    }
    if(digimonList.indexOf(name) === -1){  
      digimonList.push(name);  
      localStorage.setItem("digimonlist",digimonList);
    }        
   }
    
    return (
        <div key={index} className={isSelected ? 'list__output--selected' : 'list__output'} onClick={handleSelection}>
              <h2 className="list__output--title" id="digimon__name" >{name}</h2>
              <section className="list__output--section">
                <img src={img} className="list__output--img" alt="digimon" />  
              </section> 
              <section className="list__output--section">             
                <h3 className="list__output--subtitle">{level}</h3> 

                
                <button id="list__save" className="buttons" disabled={isSelected ? false : true} onClick={handleSave}>Save</button>                                
              </section>
             
        </div>  
    )

}

export default DigimonCard;