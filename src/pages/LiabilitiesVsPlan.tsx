import React from "react";
import { BarChart } from "../components/BarChart";
import { StackedBarChart } from "../components/StackedBarChart";
import { LineChart } from "../components/LineChart";
import { DoughnutChart } from "../components/DoughnutChart";

import "../css/LiabilitiesVsPlan.css"; // Import CSS for styling

import { Chart, ArcElement } from "chart.js";
import TableComponent from "../components/TableComponent";

Chart.register( ArcElement );

const columns = [
    "Liabilities",
    "Deposits from banks",
    "Deposits from customers current accounts",

    "Deposits from customers current tagesgeld",
    "Deposits from customers term accounts",
    "Deposits from customers call deposits",

    "Other liabilities",

];
const data = [
    [ "Actual", 9807707, 27346447, 9807707, 27346447, 9807707, 27346447, ],
    [ "Plan", 1414167, 33796156, 9807707, 27346447, 9807707, 27346447, ],
    [ "Diff", 8393539, 33796156, 9807707, 27346447, 9807707, 27346447, ],
];

const LiabilitiesVsPlan = () => {
    return (
        // <div style={ {
        //     border: "1px solid red",
        //     width: "100%",
        //     height: "60vh"
        // } }>
        //     <h2>Bar Chart Example</h2>
        //     {/* <BarChart /> */ }
        //     {/* <StackedBarChart /> */ }

        //     {/* <LineChart />  */ }

        //     <DoughnutChart />

        // </div>

        <>
            <h2>Liabilities vs Plan 10/2023</h2>

            <div className="grid-container">
                <div className="first-column">
                    <div className="full-width-box">
                        <TableComponent columns={ columns } data={ data } />
                    </div>
                    <div className="full-width-box">
                        <LineChart />
                    </div>
                </div>
                <div className="second-column">
                    <div className="box">
                        <LineChart />
                    </div>
                    <div className="box">
                        <LineChart />
                    </div>
                    <div className="box">
                        <LineChart />
                    </div>
                    <div className="box">
                        <LineChart />
                    </div>
                    <div className="box">
                        <LineChart />
                    </div>
                    <div className="box">
                        <LineChart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LiabilitiesVsPlan;
