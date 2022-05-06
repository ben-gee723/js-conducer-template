// DOES NOT WORK
/*
    What Tech: chartjs 
    Why not: MCould be implmenented, but had problems with refresh/loading the page
*/
import React, { useEffect, createRef } from 'react';
// import { Chart, Line } from 'react-chartjs-2';
// const Chart = require('chart.js');
import { Chart } from 'chart.js';

export const DashboardChart = () => {
    let chartRef = createRef()

    let viewCounter;

    const xValues = ['01', 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    useEffect(() => {
        const ctx = chartRef.current.getContext("2d")
        viewCounter = new Chart(ctx, {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    data: [80, 140, 160, 100, 170, 110, 130, 210, 830, 478],
                    borderColor: "violet",
                    fill: false
                }, {
                    data: [160, 170, 170, 190, 200, 270, 400, 930, 350, 200],
                    borderColor: "red",
                    fill: false
                }]
            },
            options: {
                legend: { display: "none" }
            }
        });

        return () => {
            viewCounter.destroy()
        }
    }, [])
    return (
        <>
            {/* <canvas id={viewCounter} className="lineChart"></canvas> */}
            <canvas id="myChart" className="lineChart" ref={chartRef}></canvas>
            {/* <Chart type='line' data={chartData} /> */}
        </>
    )
}