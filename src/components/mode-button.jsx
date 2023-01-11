import React,{ useState, useEffect } from "react";
import "../assets/sass/App.sass";


function ModeButton({ isList, isMyList }){
    
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    

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