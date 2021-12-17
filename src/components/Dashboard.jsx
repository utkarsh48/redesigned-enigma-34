import React from 'react';
import "../assets/css/Dashboard.css";
import Charts from "./Charts";
import Banner from "./Banner";


export default function Dashboard(props){
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
    <main>
      <div className="actual">
        <div className="d-heading">Company Metrics</div>
        <div className='banners'>
          <Banner label="Total Revenue" content="$406,411.29" color="green" />
          <Banner label="Total Jobs Avg" content="$620" />
          <Banner label="Tickets Created" content="655" />
          <Banner label="Tickets Scheduled" content="735" />
          <Banner label="Outstanding Amount" content="$110,448.8" color="red" />
          <Banner label="Memberships Sold" content="105" />
          <Banner label="Jobs Completed" content="436" />
          <Banner label="Total Canceled" content="65" />
        </div>
        <Charts data={demos}/>
      </div>
    </main>
  );
}