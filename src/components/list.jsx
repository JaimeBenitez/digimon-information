/**
 * @file list.jsx - List page
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */
import React, {useState, useEffect} from "react";
import ModeButton from "./mode-button";
import Logo from "./logo";
import Button from "./button";
import BackArrow from "./back-arrow";
import DigimonCard from "./digimon-card";
/**
 * @module List
 */
/**
 * Lista que nos permitirá hacer la ordenación por nivel
 * @memberof module:List
 * @type {Array<string>} 
 */
const levels = [
  "Fresh",
  "In Training",
  "Rookie",
  "Armor",
  "Champion",
  "Ultimate",
  "Mega"              
]

/**
* Componente que renderiza la pantalla de listado. <br/>
* @memberof module:List
* - fetchData(digimonName: El nombre del digimon a buscar, digimonLevel: El nivel del digimon a buscar):  
* @returns {JSX}       
*/
function List () {
  
  const [result,setResult] = useState([]);
  const [nameValue,setName] = useState("");
  const [levelValue,setLevel] = useState("Fresh");
  const [sortByName,setSortByName] = useState(undefined);
  //Cuando sortByLevel es true hablamos de lista descendiente, si es false hablamos de lista ascendente
  const [sortByLevel,setSortByLevel] = useState(undefined);  
  const [isEnabled,setIsEnabled] = useState(false);
 
  /**
   * Cambia el estado y habilita el boton de lista completa si se ha realizado una busqueda previa
   * @memberof module:List
   */
  function enableListButton(){
    setIsEnabled(true)
  } 
  
  /**
   * Función que activan la ordenación por nombre de manera ascendente 
   * @memberof module:List
   */
  function handleSortByNameAsc(){    
    setSortByName(false);
  }

  /**
   * Función que activan la ordenación por nombre de manera descendente 
   * @memberof module:List
   */
  function handleSortByNameDesc(){    
    setSortByName(true);
  }
  /**
   * Función que activan la ordenación por nivel de manera ascendente 
   * @memberof module:List
   */
  function handleSortByLevelAsc(){    
    setSortByLevel(false);
  }
  /**
   * Función que activan la ordenación por nivel de manera descendente 
   * @memberof module:List
   */
  function handleSortByLevelDesc(){    
    setSortByLevel(true);
  }
  /**
   * Función que ordena el map usando los check de los radio button y la función sort
   * @memberOf module:List   
   * @param {object} a - 1º elemento a ordenar
   * @param {object} b - 2º elemento a ordenar
   * @returns {number} - El numero que nos dira que elemento va primero, si es 1 el 1º sera el elemeno a y si es -1 lo sera el elemento b
   */  
  function sortResults(a,b){
    if(sortByLevel !== undefined){     
      //Comprobamos los indices de la lista de niveles 
      if(levels.indexOf(a.level) < levels.indexOf(b.level)){
        return sortByLevel ? 1 : -1;
      }
      else if(levels.indexOf(a.level) > levels.indexOf(b.level)){
        return sortByLevel ? -1 : 1;
      }
      else{
        if(sortByName !== undefined){           
          if(a.name < b.name){
            return sortByName ? 1 : -1;      
          }else{      
            return sortByName ? -1 : 1;      
          }
        }
      }        
    }else if(sortByName !== undefined){
      if(a.name < b.name){
        return sortByName ? 1 : -1;      
      }else{      
        return sortByName ? -1 : 1;      
        }
      }    
    //Si no hay nada checkeado se deja tal cual sale de la API
    return 0;
  }
  /**
   * Función que maneja el estado del input del campo nombre
   * @memberOf module:List   
   * @param {string} e - Evento que activa la función, en este caso un cambio en el input  
   */  
  function handleNameChange(e){        
    const { target } = e;
    const { value } = target;    
    setName(value);
  }
  /**
   * Función que maneja el estado del input del campo nivel
   * @memberOf module:List   
   * @param {string} e - Evento que activa la función, en este caso un cambio en el input  
   */  
  function handleLevelChange(e){    
    const { target } = e;
    const { value } = target;    
    setLevel(value);
  }
  /**
   * Función que realiza la llamada a la api cuando se hace el submit del campo nombre y habilita el botón de listado completo
   * @memberOf module:List   
   * @param {string} e - Evento que activa la función, en este caso un click 
   */  
  function handleNameSubmit(e){
    e.preventDefault();
    enableListButton();    
    fetchData(nameValue,undefined);
  }
  /**
   * Función que realiza la llamada a la api cuando se hace el submit del campo nivel y habilita el botón de listado completo
   * @memberOf module:List   
   * @param {string} e - Evento que activa la función, en este caso un click 
   */ 
  function handleLevelSubmit(e){
    e.preventDefault();
    enableListButton();
    fetchData(undefined,levelValue);
  }
  /**
   * Función que realiza la llamada a la api cuando se pulsa en el botón de lista completa
   * @memberOf module:List   
   * @param {string} e - Evento que activa la función, en este caso un click 
   */ 
  function handleListAll(e){    
    e.preventDefault();    
    fetchData();
  }
  
  /**
   * Función asincrona que realiza una llamada a la api segun que parámetros reciba
   * @memberOf module:List   
   * @param {string} digimonName - Nombre del digimon a buscar
   * @param {string} digimonLevel - Nivel de los digimon a buscar
   */ 
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
 

  return(
    <main className="list__main">
      <section id="list">
        <ModeButton isList={true}/>
        <Logo />
        <form  id="principal__form">   
          <fieldset>      
            <label htmlFor="list__sort--NameAscending" className="sortingLabels">Sort A-Z</label>
            <input type="radio" name="list__sortName" className="list__sort" checked={sortByName === false} onChange={handleSortByNameAsc} />
            <label htmlFor="list__sort--NameDescending" className="sortingLabels">Sort Z-A</label>
            <input type="radio" name="list__sortName" className="list__sort" checked={sortByName === true} onChange={handleSortByNameDesc}/> 
            <input type="text" name="name" id="principal__name" className="principal__input" placeholder="Name" value={nameValue} onChange={handleNameChange} />
            <button type="submit" id="principal__name--submit" onClick={handleNameSubmit}><span className="fa-solid fa-magnifying-glass"></span></button>       
          </fieldset>                     
          <fieldset> 
            <label htmlFor="list__sort--LevelAscending" className="sortingLabels">Level Asc</label>
            <input type="radio" name="list__sortLevel" className="list__sort" checked={sortByLevel === false} onChange={handleSortByLevelAsc}/>
            <label htmlFor="list__sort--LevelDescending" className="sortingLabels">Level Desc</label>
            <input type="radio" name="list__sortLevel" className="list__sort" checked={sortByLevel === true} onChange={handleSortByLevelDesc}/>  

            <select  name="level" id="principal__level" className="principal__input" value={levelValue} onChange={handleLevelChange}>                
              <option value="Fresh">Fresh</option>
              <option value="In Training">In Training</option>
              <option value="Rookie">Rookie</option>
              <option value="Armor">Armor</option>
              <option value="Champion">Champion</option>
              <option value="Ultimate">Ultimate</option>
              <option value="Mega">Mega</option>                        
            </select>
            <button type="submit" id="principal__level--submit" onClick={handleLevelSubmit}><span className="fa-solid fa-magnifying-glass"></span></button>  
          </fieldset>
          {/* Al estar el boton inicialmente deshabilitado, aunque lo habilites mediante una función no te permite llamar apropiadamente a eventos, de ahi la necesidad
          de un 2º botón */}
          <button id={isEnabled ? "list__all--hide" : "list__all--disabled"} type="submit" className="buttons" onClick={handleListAll} disabled>List All</button>
          <button id={isEnabled ? "list__all--enabled" : "list__all--hide"} type="submit" className="buttons" onClick={handleListAll}>List All</button>    
        </form>
      </section>
      <section id="list__output">
        
        {
          
          //Si result no es undefined saca el map
          result ? 
             //Esto nos permite realizar las ordenaciones segun los radios marcados
            result.sort(sortResults)
            .map((digimon,index) => (
              <DigimonCard key={index} name={digimon.name} img={digimon.img} level={digimon.level} />
            ))   
                                            
          : <div id="digimon__meme">
            <h1 className="error__title">ERROR 400 - DIGIMON NOT FOUND</h1>
            <h2 className="error__subtitle">Did you search for a Pokemon?</h2>
            <img id="error__img--meme" src={require("../assets/img/digimon-meme.png")} alt="error"/>
            </div>   
        }    

      </section>      
      <nav className="list__nav">
            <Button direction="myList" id="list__toMyList">My List</Button>
            <BackArrow />
      </nav>
    </main>
  )
};

export default List;