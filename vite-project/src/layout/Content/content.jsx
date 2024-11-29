import "./content.css"
import logo2 from '../../assets/icons/icons8-high-intensity-beam-spotlight-for-party-function-24.png'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// pie chart //
import {ArcElement} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



const content = () => {
  // BarChart
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
//  PieChart
ChartJS.register(ArcElement, Tooltip, Legend);

 const datas = {
   labels:['Energy', 'Environment', 'Retail', 'Manufacturing', 'Information Technology'],
  datasets: [
    {
      label: 'Intensity',
      data: [5, 4, 7, 9, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  




//Barchart

   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };
    
  const labels = ['Energy', 'Environment', 'Retail', 'Manufacturing', 'Information Technology'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Likelihood',
      data:[6,2,1,7,5,8],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Relevence',
      data:[3,4,1,7,5,8],
      backgroundColor: 'rgba(53, 162, 230, 0.5)',
    },
    {
      label: 'Intensity',
      data:[6,4,2,5,7,1],
      backgroundColor: 'rgba(51, 16, 235, 0.5)',
    },
  ],
};
  return (
    <div className="main-container">
         <div className="container">
        <div className="inner-box">
            <div className="box">
                <h1>Sectors</h1>
                <div className="min-max">
                <p>Total Sectors are available</p>
                <span className="number">30</span>
                </div>
             
                
            </div>
            <div className="box">
                <h1>Country</h1>
                <div className="min-max">
                <p>Total Sectors are available</p>
                <span className="number">18</span>
                </div>
               
            </div>
            <div className="box">
                <h1>Topic</h1>
                <div className="min-max">
                <p>Total Sectors are available</p>
                <span className="number">24</span>
                </div>
                
            </div>
            <div className="box">
                <h1>City</h1>
                <div className="min-max">
                <p>Total Sectors are available</p>
                <span className="number">44</span>
                </div>
              
            </div>
        </div>
    </div>
    <div className="main-chart">
      <div className="inner-chart">
      <div className="boxchart">
                <h2>Intensity</h2>
                <p>The calculated intensity shown</p>
                <div className="min-max">
                  <h4>Min : <span className="number">2</span> </h4>
                  
                  <h4>Max : <span className="number">7</span> </h4>
                
                </div>
            
                <h2>Relevence</h2>
                <p>The calculated Relevence shown</p>
                <div className="min-max">
                  <h4>Min : <span className="number">4</span> </h4>
                
                  <h4>Max : <span className="number">8</span> </h4>
                </div>
               
             
                <h2>Likelihood</h2>
                <p>The calculated Likelihood shown</p>
                <div className="min-max">
                  <h4>Min : <span className="number">3</span> </h4>
                  
                  <h4>Max : <span className="number">5</span> </h4>
                </div>         
            </div>
        <div className="chart" style={{width:500,height:359}}>
          <h2>BarChart</h2>
          <p>Denotes the data values</p>
        <Bar options={options} data={data} />
        </div>
        <div className="chart"  style={{width:330,height:359}} >
          
        <Doughnut options={options}  data={datas}/>
        </div>
       
           
      </div>
    </div>
    <div className="main-footer">
      <h2 style={{color:'#6D9588'}}></h2>
      <div className="inner-footer">
        <div className="box">
          <h3>pestle</h3>
          <p>For industries</p>
         
         
        </div>
        <div className="box">
        <h3>source</h3>
        <p>Name of Sourse</p>
         
        </div>
        <div className="box">
        <h3>published</h3>
        <p>Date</p>
         
        </div>
        <div className="box">
        <h3>end_year</h3>
        <p>Date</p>
         
        </div>
        <div className="box">
         <h3>start_year</h3>
         <p>Date</p>
         
        </div>
        <div className="box">
          <h3>insight</h3>
          <p>Insigth for Topic </p>
       
        </div>
        <div className="box">
          <h3>impact</h3>
          <p>Impact of topic</p>
       
        </div>
      </div>
    </div>
    </div>
  )
}

export default content