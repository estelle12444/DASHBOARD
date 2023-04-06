import React, { useContext } from "react";


import Navbar from "./component/Header/Navbar";
import { Link } from "react-router-dom";

import { ThemeContext } from "./component/Header/ThemeContext";
import './App.css';
import StatisticCard from "./component/Body/StatisticCard";
import Table from "./component/Body/TableComponent";

function SectionTitle(props) {
  return (
    <div className="titre">{props.title} </div>
  )
}

function Vaccination() {

  const values = [
    { id: "dsdsds", value: "fdfdfd", title: "dsdsds" },
    { id: "dsdsds", value: "fdfdfd", title: "dsdsds" }
  ]

  const SubHead = [
    "Name", "Position", "Office", "Age", "Start date", "Salary"
  ]

  const Element = [
    { 
      Name: "Herrod Chandler", Position: "Sales Assistant", 
      Office: "San Francisco", Age: "59", Start_date: "2012/08/06", 
      Salary: "$137,500" 
    },
    { Name: "Rhona Davidson", Position: "Integration Specialist",
     Office: "Tokyo", Age: "55", Start_date: "2022/08/06", 
     Salary: "$157,500" 
    }
  ]

 

  const { darkMode } = useContext(ThemeContext);
  return (

    <div>
      <Navbar name="Vaccination" />

      <SectionTitle title="Couverture Vaccination " />
      <div class="  container-fluid">

        <div className=" content-wrapper">
          <div class=" row">
            <StatisticCard general={values} partial={values} complete={values} />

            <div class=" col-md-4  ">
              <div class=" card taille " className={darkMode ? "card-dark" : "card"}  >
                <div class="card-content ">

                  <div class="col-md-12 col-sm-12 border-right-grey border-right-lighten-2 ">
                    <div id="sales-and-expenses" ></div>

                  </div>
                </div>
              </div>
            </div>

            <Table donnee={SubHead} value={Element} />

          </div>

        </div>

      </div>
      <SectionTitle title="Infections Vaccinanale" />
      <div class="container-fluid">
        <div className=" content-wrapper">
          <div class="row">
            <div class="col-md-6 ">
              <section class="maps-leaflet ">

                <div class="card  " className={darkMode ? "card-dark" : "card"} >
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
      <SectionTitle title="Post Vaccination" />
      <div class="  container-fluid">

        <div className=" content-wrapper">
          <div class=" row">
            <StatisticCard general={values} partial={values} complete={values} />

            <div class=" col-md-4 taille">
              <div class="row">
                <div class="col-12 taille">
                  <div class="card"  >

                    <div class="card-content collapse show">
                      <div class="card-body chartjs">
                        <canvas id="combo-bar-line" height="400"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Table donnee={SubHead} value={Element} />

          </div>

        </div>
      </div>
      <br /><br />

    </div>
  );
}

export default Vaccination;
