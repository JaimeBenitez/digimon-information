/**
 * @file myList.jsx - My List Page
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */


import React, {useState, useEffect} from "react";
import ModeButton from "./mode-button";
import Logo from "./logo";
import Button from "./button";
import BackArrow from "./back-arrow";
/**
 * @module My-List
 */
/**
* Componente que renderiza la pantalla de lista de favoritos.
* @memberof module:My-List
* @returns {JSX}       
*/
function MyList () {
  
  const [result,setResult] = useState(undefined); 
  const [isClicked,setIsClicked] = useState(false);   
  const [digimonList,setDigimonList] = useState(localStorage.getItem("digimonlist") ? localStorage.getItem("digimonlist").split(",") : []);
  
  /**
   * Función que cambia el estado de IsClicked y nos permite mostrar la tarjeta del digimon
   * @memberOf module:My-List       
   */ 
  function handleClicked(){
    setIsClicked(true);
  }
  /**
   * Función que nos permite cambiar el estado de la lista de digimon, borrando el digimon elegido
   * @memberOf module:My-List    
   * @param {string} digimon - El digimon que se va a borrar
   */
  function digimonDelete(digimon){ 
    //OJO - Si hacemos newDigimonList = digimonList nos dara problemas porque hara los cambios a la vez en ambas listas y el renderizado fallara
    //Esta es la mejor manera de clonar un array de manera segura
    let newDigimonList = [].concat(digimonList)  
    for(let i=0; i<digimonList.length; i++){
      if(newDigimonList[i] === digimon){
        newDigimonList.splice(i, 1);        
      }
    }    
    setDigimonList(newDigimonList);
    localStorage.setItem("digimonlist", digimonList);        
  }  
  /**
   * Funcion que nos permite activar con un click la función de borrar digimon, mostrándonos antes un mensaje de confirmación
   * @memberOf module:My-List 
   * @param {string} e - El evento con el que se activa la función, en este caso un click  
   * @param {string} digimon - El digimon que se va a borrar
   */
  function handleDelete(e,digimon){  
    e.preventDefault() 
    if(window.confirm("Are you sure you want to delete this digimon?")){
    digimonDelete(digimon)
    }
  }
  /**
   * Función que nos permite hacer desaparecer con un click la tarjeta de digimon en modo responsive
   * @memberOf module:My-List       
   */
  function handleDigimonBack(){
    setIsClicked(false); //Esto nos permitirá hacer desaparecer la tarjeta en responsive
    setResult(undefined); 
  }
  /**
   * Función que activa la tarjeta asociada al digimon que se está seleccionando
   * @memberOf module:My-List 
   * @param {string} e - El evento con el que se activa la función, en este caso un click
   */
  function handleSubmit(e){ 
    e.preventDefault();
    handleClicked();    
    const { target } = e;
    const { value } = target;  
    fetchData(value)
  }
  /**
   * Función asíncrona que realiza una llamada a la api usando el nombre del digimon seleccionado 
   * @memberOf module:My-List 
   * @param {string} digimonName - El nombre del digimon a mostrar
   */
  async function fetchData (digimonName){    
    if(digimonName){
      let url = `https://digimon-api.vercel.app/api/digimon/name/${digimonName}`      
      try {      
        const response = await fetch(url);
        if(response.status === 200){
          const json = await response.json();    
          setResult(json);    
        }                            
      } catch (error) {                
          console.log("error", error);
      }
    }else{
      //Si no recibe un nombre no devuelve nada
      return
    }  
  } 
    
  useEffect(() =>{       
    fetchData()    
  }, []);   
  
  return(
    //Como en esta pagina si tenemos un header usamos una empty tag para devolver mas de un elemento
    <>
    <header id="myList__header">
      <ModeButton isMyList={true}/> 
      <div>          
        <Logo isMyList={true}/>
        <span className="myList__title">My saved list</span>
      </div>    
    </header>
    <main id="myList__main">             
      <section id="myList">        
        <form className="myList__names">  
            {/* Para poder pasar parametros en el onClick es necesario crear una funcion anonima en el mismo onclick */}
        {digimonList.map((digimon,index) =>(
          
          <div key={index} className="myList__nameList">            
            <button type="submit" className="myList__deleteButton" onClick={(e) => handleDelete(e,digimon)} value={digimon}><img src={require("../assets/img/delete.svg").default} className="svg myList__delete" alt="delete" /></button>
            <button  type="submit" className= "myList__digimon" onClick={handleSubmit} value={digimon}>{digimon}</button>            
          </div>
        ))
        }                 
        </form> 
        {          
          result  ?
          //Al devolvernos un array es necesario sacar el indice 0 del resultado
          <div className={isClicked ? 'myList__output' : 'output-hide'} >
                <span className="myList__output--title">{result[0].name}</span>
                <section className="myList__output--section">
                <img src={result[0].img} className="myList__output--img" alt='digimon img'/>  
                </section> 
                <section className="myList__output--section">  
                    <span className="myList__output--subtitle">Level</span>           
                    <span className="myList__output--text"> {result[0].level}</span>                    
                </section>
                
                <button  className="digimon__back" onClick={handleDigimonBack}><img src={require('../assets/img/back-arrow.svg').default} className="digimon__arrow"  alt='back'/></button>                
          </div>
          :
          <div className={isClicked ? 'output-hide' : 'myList__img__container'}>
            <picture>
              <source
                media="(min-width: 980px)"
                srcSet={require("../assets/img/wallpaper.jpg")}/>                            
              <source srcSet={require("../assets/img/Omegamon_tri.png")}/>
              <img src={require("../assets/img/wallpaper.jpg")} className="myList__img" alt="digimon" />   
            </picture>    
        </div> 
        }               
      </section>      
      <nav className="list__nav">
            <Button direction="list" id="myList__toList">List</Button>
            <BackArrow />
      </nav>
    </main>
    </>
  )

};

export default MyList;