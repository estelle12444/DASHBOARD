import React, { useContext } from "react";

import Contenu from "./component/Body/Contenu";
import Bloc from "./component/Body/bloc";
import Colum from "./component/Body/Colum";
import Navbar from "./component/Header/Navbar";

import { ThemeContext } from "./component/Header/ThemeContext";
import './App.css';



function Vaccination() {

  const { darkMode } = useContext(ThemeContext);
  return (

    <div>
      <Navbar name="Vaccination" />
      <div className="titre">Couverture Vaccination  </div>
      <Contenu />
      <div className="titre"> Infections Vaccinanale </div>
      <Bloc />
      <div className="titre">Post Vaccination </div>
      <Colum />
      <br/><br/>
    </div>
  );
}

export default Vaccination;
