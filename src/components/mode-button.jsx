import React,{ useState, useEffect } from "react";
import '../assets/sass/App.sass';


function ModeButton(){
    
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
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
        <label id="switch" className="switch">
                        <input type="checkbox" onClick={toggleTheme} />
                        <span className="slider round"></span>
        </label>
    )
}

export default ModeButton;