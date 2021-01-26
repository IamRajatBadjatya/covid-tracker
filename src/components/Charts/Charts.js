import React, { useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';


const initialConifg = {
    labels: [],
    datasets: [
      {
        label: '',
        data: []
      }
    ]
  };
  

const Charts = (props) => {
    const {data: {confirmed, recovered, deaths}, country} = props;
    const [dailyData, setDailyData]= useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
           const initialData = await fetchDailyData();
           setDailyData(initialData);
           console.log(dailyData);
        }
        fetchAPI();
    }, []);
    const config = {...initialConifg};
    config.labels = dailyData.length ? dailyData.map(date => date.reportDate): [];
    config.datasets = [
        {
            label: 'Infected',
            backgroundColor: 'rgba(0,0,255,0.4)',
            data: dailyData.length ? dailyData.map(infected => infected.totalConfirmed) : [],
            fill: true,
            borderColor: 'rgba(0,0,255,0.8)',
        },
        {
            label: 'Deaths',
            backgroundColor: 'rgba(255,0,0,0.4)',
            data:  dailyData.length ? dailyData.map(infected => infected.totalDeath) : [],
            borderColor: 'rgba(255,0,0,0.8)',
            fill: true
        }
    ]
    
    const lineChart = (
        <Line data={config}>
        </Line>
    );

    const barConfig = confirmed ? {
        labels: ['Infected',  'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'Current State of Covid Cases',
            backgroundColor: ['rgba(0,0,255,0.2)', 'rgba(0,255, 0,0.2)', 'rgba(255,0,0,0.2)'],
            borderColor: ['rgba(0,0,255,0.8)', 'rgba(0,255, 0,0.8)', 'rgba(255,0,0,0.2)'],
            borderWidth: 1,
            hoverBackgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255, 0,0.5)', 'rgba(255,0,0,0.5)'],
            hoverBorderColor: ['rgba(0,0,355,0.9)', 'rgba(0,255, 0,0.9)', 'rgba(255,0,0,0.9)'],
            data: [confirmed.value, recovered.value, deaths.value]
          },
        ]
      } : null;
      
    const barchart = (
        <Bar
        data={barConfig}
      />
    );

    return (
        <div className={styles.container}>
            {country ? barchart : lineChart}
        </div>
    
    )
}

export default Charts;

