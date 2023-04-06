import React, { useContext } from "react";
import ApexCharts from "apexCharts"
import { ChartContext } from "./ContextComponent";

// Initializing Column Basic Chart
var $primary = "#666ee8",
  $secondary = "#6B6F82",
  $success = "#1C9066",
  $info = "#1E9FF2",
  $warning = "#FF9149",
  $danger = "#FF4961",
  $black = "#00000";

var $themeColor = [$primary, $success, $info, $warning, $danger, $secondary,$black];

var columnBasicChart = {
    chart: {
      height: 350,
      type: "bar"
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }
    ],
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        }
      }
    },
    fill: {
      colors: $themeColor
    }
  };

var column_basic_chart = new ApexCharts(
    document.querySelector("#sales-and-expenses"),
    columnBasicChart
);
column_basic_chart.render();

  

function Chart({data}){
    const component = useContext(ChartContext)
    switch (component) {
        case 'pie':
            return <PieChart data={data}/>
        case 'line':
            return <LineChart data={data}/>
        case 'Combo':
            return <ComboBarChart data={data}/>
        case 'Column':
        default:
            return <ColumnChart data={data}/>
    }
}

function PieChart(){

}

function LineChart(){

}

function ComboBarChart(){

}


function ColumnChart() {
    return(
        <div class=" col-md-4  ">
        <div class=" card taille "  >
            <div class="card-content ">

                <div class="col-md-12 col-sm-12 border-right-grey border-right-lighten-2 ">
                    <div id="sales-and-expenses" ></div>

                </div>
            </div>
        </div>
    </div>
    )
    
}

export default Chart;