import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ThemeContext } from "../Header/ThemeContext";
import CardItem from "./CardItem";

function StatisticCard(props) {
    const { darkMode } = useContext(ThemeContext);

    const CardItem = [
        {id: 1, title: '1223345', color: 'Jaune', value:'Vaccines '},
        {id: 2, title: '1223345', color: 'Jaune', value:'Vaccines '}
      ];
    return (
        <div class="col-md-4 height-300 ">
            <div class=" row ">
                
                <CardItem value="p" color="jaune" title="1223" size="6" />
            </div>

            <br /><hr />

            <div class=" row">
                <CardItem value="aazz" color="jaune" title="1223" size="4" />
            </div>

            <br /><hr />

            <div class=" row">
                <CardItem value="aazz" color="vert" title="1223" size="4" />
            </div>

        </div>
    );
}

export default StatisticCard;