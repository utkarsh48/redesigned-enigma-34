import React from 'react';
import Chart from "react-apexcharts";



export default function Charts(props){

  const demos = {
    1: {
      series: [{
        data: [90000, 80000, 50000, 48000, 45000, 35000]
      }],
      options: {
        fill:{
          colors: ["#41bf99"]
        },
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],
          labels: {
            rotate: 45,
            rotateAlways: true,
            offsetY: 12
          }
        },
        yaxis: {
          min: 0,
          max: 100000,
        }
      }
    },
    2: {
      series: [{
        data: [200000, 125000, 90000, 88000, 44000, 40000, 2000]
      }],
      options: {
        fill:{
          colors: ["#41bf99"]
        },
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Service Plumbing', 'Bid work HVAC', 'Service HVAC', 'Bid work plumbing', 'HWT Replacement', 'Maintainance', "Material Sale"],
          labels: {
            rotate: 45,
            rotateAlways: true,
            offsetY: 12
          }
        },
        yaxis: {
          min: 0,
          max: 250000,
        }
      }
    }
  };


  return (
    <div className="charts">
      <Chart options={demos[1].options} series={demos[1].series} type="bar" height={350} />
      <Chart options={demos[2].options} series={demos[2].series} type="bar" height={350} />
    </div>);
}