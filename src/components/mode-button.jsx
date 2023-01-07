import React,{ useState, useEffect } from "react";
import '../assets/sass/App.sass';


function ModeButton({ isList }){
    
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    //TODO: Conseguir que funcione el cambio de clase para el boton de claro oscuro segun la pantalla

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
        setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    },  [theme]);
   
    return(        
        <label id="switch" className={isList ? "list__switch" : "switch"}>
                        <input type="checkbox" onClick={toggleTheme} />
                        <span className="slider round"></span>
        </label>
    )
}

export default ModeButton;