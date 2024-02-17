import React from 'react';
import { BarChart } from '../components/BarChart';
import { StackedBarChart } from '../components/StackedBarChart';
import { LineChart } from '../components/LineChart';
import { DoughnutChart } from '../components/DoughnutChart';


import { Chart, ArcElement } from 'chart.js'
Chart.register( ArcElement );


const LiabilitiesVsPlan = () => {


    return (
        <div style={ {
            border: "1px solid red",
            width: "100%",
            height: "60vh"
        } }>
            <h2>Bar Chart Example</h2>
            {/* <BarChart /> */ }
            {/* <StackedBarChart /> */ }

            {/* <LineChart />  */ }

            <DoughnutChart />

        </div>
    );
};

export default LiabilitiesVsPlan;
