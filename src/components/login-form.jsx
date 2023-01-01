import React,{ useState } from "react";
import BackArrow from "./back-arrow";
import { useNavigate } from "react-router-dom";



function LoginForm(){
    //Nos servirá para hacer la redirección desde nuestro formulario
    const navigate = useNavigate();


    const usuariosRegistrados = [
        {user: "crisangar", pass: "Edu_03", email: "crisangar03@gmail.com" , registerDate: "03-05-2021", bornDate: "05-05-1990"},
        {user: "demonSlayer", pass: "Miloka_69", email: "demonSlayer69@gmail.com", registerDate: "07-09-2021", bornDate: "05-07-1988"},
        {user: "javi_2000", pass: "tiranosaurusRex999", email: "javi_2000@gmail.com", registerDate: "05-12-2021", bornDate: "11-02-1994"},
        {user: "digiFan", pass: "Digital_Freak", email: "digiFreak@gmail.com", registerDate: "08-05-2022", bornDate: "02-05-1992"}
    ]
    
    
    //validación de formulario
    const [values,setValues] = useState({
        username: "",
        password: "",                   
        usernameError: false,   
        passwordError: false,                  
    });

    if(localStorage && values.username === "" && values.password === ""){
        //Esto hace que cuando el usuario entre al formulario, si ya entro con anterioridad, este se rellene solo
        //Es importante hacer la comprobacion de si está vacio, ya que si no no nos dejara cambiar el estado
        if(localStorage.getItem('user')){
            values.username = localStorage.getItem('user');
        }
        if(localStorage.getItem('pass')){
            
            values.password = localStorage.getItem('pass');
        }
    }

    function handleSubmit(e){
        
        e.preventDefault();
        //Si todo el formulario es valido entonces aparece el alert. Es importante comprobar también aqui para que, no solo sean validos,
        //sino que la contraseña coincida con la del usuario introducido
        let submitValid = false 
            for(let i=0;i<usuariosRegistrados.length;i++){
                if(values.username === usuariosRegistrados[i].user && values.password === usuariosRegistrados[i].pass){
                    //Aprovechamos el bucle para meter en el localStorage los datos de usuario que no introducimos en el formulario
                    localStorage.setItem("email", usuariosRegistrados[i].email);
                    localStorage.setItem("registerDate", usuariosRegistrados[i].registerDate);
                    localStorage.setItem("bornDate", usuariosRegistrados[i].bornDate);
                    submitValid = true;
                    break;
                }
            }
        if(!values.usernameError && !values.passwordError && submitValid){
            
            localStorage.setItem("user",values.username);
            localStorage.setItem("pass",values.password);             
            alert(`Welcome back, ${values.username}`);  
            navigate("/");          
        }else{
            alert("Username and password not match")
        }
        
    }

    function handleChange(e){
        //Aqui target es el elemento que ejecuta el evento, name el nombre del input y value el valor actual
        const { target } = e;
        const { name, value } = target;

        // Clonamos el estado actual modificando solo el valor del input que lanzó el evento
        const newValues = {
            ...values, [name]: value,
        };
        
        //Por ultimo sincronizamos el nuevo estado
        setValues(newValues);
    }
    function handleUsernameError(){
        //Testea si el usuario existe. Esto solo ocurrirá cuando se quite el foco del elemento, previninendo
        //que el usuario vea el mensaje de error mientras rellena el campo
    
        let userValid = false;
        for(let i=0;i<usuariosRegistrados.length;i++){
            if(values.username === usuariosRegistrados[i].user){
                userValid = true;
                break;
            }
        }
        const usernameError = !userValid;
        setValues((prevState) => ({ ...prevState, usernameError}));
    }    

    function handlePasswordError(){
        
        let passwordValid = false;
        for(let i=0;i<usuariosRegistrados.length;i++){
            if(values.password === usuariosRegistrados[i].pass){
                passwordValid = true;
                break;
            }
        }
        const passwordError = !passwordValid;
        setValues((prevState) => ({ ...prevState, passwordError}));
    }

    
    
    //Fin de validación
    
    

    //OnBlur se activa al retirar el foco de un elemento
    return (
        <form onSubmit={handleSubmit} id="login__form">   
                <fieldset id="login__fieldset"> 
                    <h2 className="login__subtitle">Login</h2> 
                    
                    <label  htmlFor="username" className="formLabel firstLabel">Username</label> 
                    <input type="text" name="username" id="login__username" className="login__input" placeholder="Username" 
                    onChange={handleChange} value={values.username} onBlur={handleUsernameError} aria-errormessage="usernameError"
                    aria-invalid={values.usernameError} required/>
                    <span className="error" id="usernameError" aria-live="assertive" style={{visibility: values.usernameError ? "visible" : "hidden"}}>
                    This user does not exist</span>

                    <label  htmlFor="password" className="formLabel">Password</label>
                    <input type="password" name="password" id="login__password" className="login__input" placeholder="Password" 
                    onChange={handleChange} value={values.password} onBlur={handlePasswordError} aria-errormessage="passwordError"
                    aria-invalid={values.passwordError} required/>         
                    <span className="error" id="passwordError" aria-live="assertive" style={{visibility: values.passwordError ? "visible" : "hidden"}}>
                    Incorrect password</span>     

                    <button type="submit" name="login__submit" id="login__submit" className="buttons">Submit</button>
                    <a href="register.html" id="login__toRegister">Don't you have an account? Go to register</a>
                    <img src={require("../assets/img/Gabumon-sf.png")} alt="gabumon" id="login__img" />
                    <BackArrow />
                </fieldset>                
        </form>
        
    )
}
export default LoginForm;