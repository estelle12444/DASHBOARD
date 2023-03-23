

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Header/ThemeContext";
function Bloc() {
    
  const { darkMode } = useContext(ThemeContext);
    return (
        <div class="container-fluid">
            <div className=" content-wrapper">
                <div class="row">
                    <div class="col-md-6 ">
                        <section class="maps-leaflet ">

                            <div class="card  "className={darkMode ? "card-dark" : "card"} >
                                <div class="card-header">
                                    <h4 class="card-title">Different Point Sizes Chart</h4>
                                    <a class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></a>
                                    <div class="heading-elements">
                                        <ul class="list-inline mb-0">
                                            <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
                                            <li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
                                            <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                                            <li><a data-action="close"><i class="ft-x"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div id="maps-leaflet-basic" class="maps-leaflet-container"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-12 taille">
                                <div class="card" className={darkMode ? "card-dark" : "card"} >
                                    <div class="card-header">
                                        <h4 class="card-title">Different Point Sizes Chart</h4>
                                        <a class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></a>
                                        <div class="heading-elements">
                                            <ul class="list-inline mb-0">
                                                <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
                                                <li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
                                                <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                                                <li><a data-action="close"><i class="ft-x"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-content collapse show">
                                        <div class="card-body chartjs">
                                            <canvas id="different-point-sizes" height="400"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

}

export default Bloc;

