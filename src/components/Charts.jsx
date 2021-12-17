import React from 'react';
import Chart from "react-apexcharts";



export default function Charts(props){

  const {data} = props;


  return (
    <div className="charts">
      <div className="chart-container">
        <div className="d-heading">Revenue By Job Location</div>
        <div className="chart b-shadow-01">
          <Chart options={data[1].options} series={data[1].series} type="bar" height={350} />
        </div>
      </div>
      <div className="chart-container">
        <div className="d-heading">Revenue By Job Type</div>
        <div className="chart b-shadow-01">
          <Chart options={data[2].options} series={data[2].series} type="bar" height={350} />
        </div>
      </div>
    </div>);
}