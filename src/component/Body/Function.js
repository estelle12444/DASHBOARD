import React, { Component, useContext } from "react";
import styled from "styled-components";


export const Color = styled.h3`
    color: ${props=>props.jaune ? "rgb(192, 192, 52)": props.vert ? "rgb(38, 207, 134)": "#000"};
`;

export const Size = 4;


