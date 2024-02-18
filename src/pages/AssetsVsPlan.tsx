import React from "react";
import { faker } from '@faker-js/faker';


import { BarChart } from "../components/BarChart";
import { LineChart } from "../components/LineChart";

import "../css/LiabilitiesVsPlan.css"; // Import CSS for styling


import TableComponent from "../components/TableComponent";


// Box 1
const columns = [
    "Assets",
    "Due from banks",
    "Securities",

    "Cooperate loans",
    "Margin trading",
    "Other assets",

    "Total assets",

];

const tableData = [
    [ "Actual", 9807707, 27346447, 9807707, 27346447, 9807707, 27346447, ],
    [ "Plan", 1414167, 33796156, 9807707, 27346447, 9807707, 27346447, ],
    [ "Diff", 8393539, 33796156, 9807707, 27346447, 9807707, 27346447, ],
];

const barChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Assets vs Plan',
            font: {
                size: 25 // Adjust the font size as needed
            }
        },
    },
};


// Box 2
const lineChartTitles = [
    "Due from banks",
    "Securities",

    "Corporate loans",
    "Margin trading",

    "Other assets",
    "Total assets",

];



const AssetsVsPlan = () => {

    const [ barChartData, setBarChartData ] = React.useState( {
        labels: columns, // Use columns as labels
        datasets: [
            {
                label: 'Assets',
                data: columns.map( () => faker.number.int( { min: 0, max: 300000 } ) ),
                backgroundColor: '#006055',
            },
            {
                label: 'Plan',
                data: columns.map( () => faker.number.int( { min: 0, max: 300000 } ) ),
                backgroundColor: '#BFB592',
            },
        ],
    } );




    return (
        <>
            <h1>Assets vs Plan 10/2023</h1>

            <div className="grid-container">
                <div className="first-column">
                    <div className="full-width-box">
                        <TableComponent columns={ columns } data={ tableData } />
                    </div>
                    <div className="full-width-box">
                        <BarChart chartData={ barChartData } chartOptions={ barChartOptions } />
                    </div>
                </div>
                <div className="second-column">

                    {
                        lineChartTitles.map( ( item: string, index: number ) => {

                            return (
                                <div key={ index } className="box">
                                    <LineChart chartTitle={ item } />
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
        </>
    );
};

export default AssetsVsPlan;
