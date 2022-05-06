//  WORKING
/*
    What: react-chartjs-2, used in conjunction with Martin's dataset
    Packages:
        - npm i react-chartjs-2 chart.js
*/
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['01', 200, 300, 400, 500, 600, 700, 800, 900, 1000];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [80, 140, 160, 100, 170, 110, 130, 210, 830, 478],
            borderColor: "violet",
            fill: false
        },
        {
            label: 'Dataset 2',
            data: [160, 170, 170, 190, 200, 270, 400, 930, 350, 200],
            borderColor: "red",
            fill: false
        },
    ],
    options: {
        legend: { display: "none" }
    }
};

function LineChartReactMartin() {
    return <Line options={options} data={data} />;
}


export default LineChartReactMartin;