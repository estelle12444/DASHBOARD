import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ThemeContext } from "../Header/ThemeContext";
import styled from "styled-components";
import { ColorContext } from "./Function";

function Content({ items }) {

    return (
        <div class="row">
                {items.map((item) =>
                <div key={item.id} class="col-md-4 text-left">
                    <ColoredText> {item.value} </ColoredText>
                    <small class="text">{item.title}</small>
                </div>
            )}
        </div>
    )
}

function ColoredText({children}){
    const textColor = useContext(ColorContext)
    
    switch(textColor){
        case 'jaune':
            return <h3  style={{color:"rgb(192, 192, 52)"}}> {children} </h3>
        case 'vert':
            return <h3  style={{color:"rgb(38, 207, 134)"}}> {children} </h3>
        case 'noir':
        default:
            return <h3  style={{color:"#000"}}> {children} </h3>  
    }
}

function StatisticCard({ general, partial, complete }) {
    return (
        <div class="col-md-4 height-300 ">
            <ColorContext.Provider>
                <Content items={general} />
            </ColorContext.Provider>
            <br /><hr />
            <ColorContext.Provider value="jaune">
                <Content items={partial} />
            </ColorContext.Provider>
            <br /><hr />
            <ColorContext.Provider value="vert">
                <Content items={complete} />
            </ColorContext.Provider>
        </div>
    );
}

export default StatisticCard;