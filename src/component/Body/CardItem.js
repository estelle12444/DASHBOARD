import React, { useContext } from "react";
import { Color } from "./Function";



function CardItem(props) {
    /*const { darkMode } = useContext(ThemeContext);*/
    return (
        <div>
            <div class="col-md-{...props.Size}">
                <div class="text-left">
                    <Color jaune >{props.value}</Color>
                    <small class="text">{props.title}</small>
                </div>
            </div>
        </div>     
         );
         
}

export default CardItem;