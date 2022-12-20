import React from "react";

function SearchBars({ action }){
    return(
    <form action={`${action}.html`} id="principal__form">   
                    <fieldset>             
                        <input type="text" name="principal__name" id="principal__name" className="principal__input" placeholder="Name" />
                        <button type="submit" id="principal__name--submit"><span className="fa-solid fa-magnifying-glass"></span></button>                
                    </fieldset>  
                    <fieldset>       
                        <select  name="principal__level" id="principal__level" className="principal__input">                
                            <option value="fresh">Fresh</option>
                            <option value="In-training">In-training</option>
                            <option value="rookie">Rookie</option>
                            <option value="champion">Champion</option>
                            <option value="ultimate">Ultimate</option>
                            <option value="mega">Mega</option>                        
                        </select>
                        <button type="submit" id="principal__level--submit"><span className="fa-solid fa-magnifying-glass"></span></button>
                    </fieldset>
    </form>
    )
}
export default SearchBars;