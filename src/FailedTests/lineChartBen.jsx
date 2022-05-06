// DOES NOT WORK
/*
    What: react-chartjs-2
    Why not: not properly implemented/set-up
*/

import React from "react";
import { Chart, Line } from 'react-chartjs-2';


const chartData =
{
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
        {
            id: 1,
            label: '',
            data: [5, 6, 7],
        },
        {
            id: 2,
            label: '',
            data: [3, 2, 1],
        },
    ],
}
    ;


function BenLineChart() {
    return (<></>

        // <Line
        //     datasetIdKey='id'
        //     data={chartData}
        // />
        // <Chart type='line' data={chartData} />

    )
}

export default BenLineChart;