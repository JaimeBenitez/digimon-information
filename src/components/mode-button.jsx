/**
 * @file mode-button.jsx - Mode Button Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */
import React,{ useState, useEffect } from "react";
import "../assets/sass/App.sass";
/**
 * @module Mode-Button
 */
/**
* Componente que renderiza el botón de cambio a modo oscuro
* @memberof module:Mode-Button
* @param {boolean} isList - Le dice al botón si está en la pantalla de listado
* @param {boolean} isMyList - Le dice al botón si está en la pantalla de favoritos
* @returns {JSX} 
*      
*/
function ModeButton({ isList, isMyList }){
    
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    /**
     * Función que cambia el tema entre modo oscuro y claro, se activa con un clic
     * @memberOf module:Mode-Button       
     */    
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
        setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
        //Esto hace que aqui la pantalla tenga posibilidad de scrolling en toda la pantalla si hay overflow  
        if(isList) {
            document.body.classList.add("list__body");
            document.body.classList.remove("myList__body");
        }
        else if(isMyList){
            document.body.classList.remove("list__body");
            document.body.classList.add("myList__body");
        }else{
            document.body.classList.remove("list__body");
            document.body.classList.remove("myList__body");
        }
    },  [theme, isList, isMyList]);
   
    return(        
        <label id="switch" className={isList || isMyList ? "list__switch" : "switch"}>
                        <input type="checkbox" onClick={toggleTheme} />
                        <span className="slider round"></span>
        </label>
    )
}

export default ModeButton;