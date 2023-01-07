
import React, {useState, useEffect} from "react";
import ModeButton from "./mode-button";
import Logo from "./logo";



function List () {
  
  const [result,setResult] = useState([]);
  const [nameValue,setName] = useState("");
  const [levelValue,setLevel] = useState("");
  
  //Esto hace que aqui la pantalla tenga posibilidad de scrolling en toda la pantalla si hay overflow  
  document.body.classList.add("list__body");

  function enableListButton(){
    document.getElementById("list__all").disabled = false;
  }
  
  
  function handleNameChange(e){
        
    const { target } = e;
    const { value } = target;    
    setName(value);
  }



  function handleLevelChange(e){
    
    const { target } = e;
    const { value } = target;    
    setLevel(value);
  }

  function handleNameSubmit(e){
    e.preventDefault();
    enableListButton();    
    fetchData(nameValue,undefined)

}
  function handleLevelSubmit(e){
    e.preventDefault();
    enableListButton();
    fetchData(undefined,levelValue)
  }

  async function fetchData (digimonName = undefined, digimonLevel = undefined){    
    let url = "";
    if(digimonName){
      url = `https://digimon-api.vercel.app/api/digimon/name/${digimonName} `
    }
    else if(digimonLevel) {
      url = `https://digimon-api.vercel.app/api/digimon/level/${digimonLevel} `
    } else {
      url = `https://digimon-api.vercel.app/api/digimon`
    } 
    try {      
      const response = await fetch(url);
      if(response.status === 200){
        const json = await response.json();    
        setResult(json);    
      } else { 
        setResult(undefined);  
      }
               
    } catch (error) {                
        console.log("error", error);
    }
    
  }
  useEffect(() => {        
    fetchData();
  }, []);    
  
  //TODO Añadir la funcionalidad Save
  //TODO Añadir boton hacia myList y el backarrow
  //TODO Añadir ordenaciones (Quizas un sistema de radio buttons)
 
  return(
    <main className="list__main">
      <section id="list">
        <ModeButton isList={true}/>
        <Logo />
        <form  id="principal__form">   
          <fieldset>             
            <input type="text" name="name" id="principal__name" className="principal__input" placeholder="Name" value={nameValue} onChange={handleNameChange} />
            <button type="submit" id="principal__name--submit" onClick={handleNameSubmit}><span className="fa-solid fa-magnifying-glass"></span></button>
            <button id="list__save" className="buttons" disabled>Save</button>                
          </fieldset>                     
          <fieldset>       
            <select  name="level" id="principal__level" className="principal__input" value={levelValue} onChange={handleLevelChange}>                
              <option value='Fresh'>Fresh</option>
              <option value='In Training'>In Training</option>
              <option value='Rookie'>Rookie</option>
              <option value='Armor'>Armor</option>
              <option value='Champion'>Champion</option>
              <option value='Ultimate'>Ultimate</option>
              <option value='Mega'>Mega</option>                        
            </select>
            <button type="submit" id="principal__level--submit" onClick={handleLevelSubmit}><span className="fa-solid fa-magnifying-glass"></span></button>
            {/* El comportamiento por defecto de list__all al ser un boton dentro de un formulario recargará la pag, sacando el listado completo */}
            <button id="list__all" className="buttons" disabled>List All</button>  
          </fieldset>
        </form>
      </section>
      <section id='list__output'>
        
        {
          //Si result no es undefined saca el map
          result ?
           result.map((digimon,index) => (
            <div key={index} className='list__output'>
              <h2 className="list__output--title">{digimon.name}</h2>
              <section className="list__output--section">
                <img src={digimon.img} className="list__output--img" alt="digimon" />  
              </section> 
              <section className="list__output--section">             
                  <h3 className="list__output--subtitle">{digimon.level}</h3>                 
              </section>
            </div>
          ))
          
          : <div>
            <h1 class="error__title">ERROR 400 - DIGIMON NOT FOUND</h1>
            <h2 class="error__subtitle">Did you search for a Pokemon?</h2>
            <img id="error__img--meme" src={require('../assets/img/digimon-meme.png')} alt='error'/>
          </div>
          
        }
        
      </section>

    </main>
  )
};

export default List;