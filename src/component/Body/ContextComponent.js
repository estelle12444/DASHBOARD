import React, { Component, createContext, useContext } from "react";
import styled from "styled-components";

export const ColorContext = createContext("noir");

export const ChartContext = createContext("line");

export const TableContext = createContext(0);

export const LinkContext = createContext("menu");

export const ImageContext = createContext("");