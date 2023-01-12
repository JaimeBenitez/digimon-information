
import React, {useState, useEffect} from "react";
import ModeButton from "./mode-button";
import Logo from "./logo";
import Button from "./button";
import BackArrow from "./back-arrow";
import DigimonCard from "./digimon-card";

//Lista que nos permitirá hacer la ordenación por nivel
const levels = [
  "Fresh",
  "In Training",
  "Rookie",
  "Armor",
  "Champion",
  "Ultimate",
  "Mega"              
]
function List () {
  
  const [result,setResult] = useState([]);
  const [nameValue,setName] = useState("");
  const [levelValue,setLevel] = useState("Fresh");
  const [sortByName,setSortByName] = useState(undefined);
  const [sortByLevel,setSortByLevel] = useState(undefined);  
  const [isEnabled,setIsEnabled] = useState(false);
 
  function enableListButton(){
    setIsEnabled(true)
  }  
  function handleSortByNameAsc(){    
    setSortByName(false);
  }
  function handleSortByNameDesc(){    
    setSortByName(true);
  }

  function handleSortByLevelAsc(){    
    setSortByLevel(false);
  }

  function handleSortByLevelDesc(){    
    setSortByLevel(true);
  }
 /*Funcion que ordena el map usando los check de los radio button y la funcion sort
 Cuando devuelve 1 significa que b va antes que a, si es -1 a va antes de b
 Cuando sortByLevel es true hablamos de lista descendiente, si es false hablamos de lista ascendente */
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
    fetchData(nameValue,undefined);

  }
  function handleLevelSubmit(e){
    e.preventDefault();
    enableListButton();
    fetchData(undefined,levelValue);
  }

  function handleListAll(e){    
    e.preventDefault();    
    fetchData();
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