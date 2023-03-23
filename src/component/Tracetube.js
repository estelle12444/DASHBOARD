import React from "react";


import { useParams } from "react-router-dom";
import Navbar from "./Header/Navbar";

import Menu from "./Header/Menu";


function Tracetube() {

  const params = useParams()
  console.log(params);
  return (
    <div>
      <Navbar name="Tracetube" />
      <Menu />
    
    </div>
  );
}

export default Tracetube;
