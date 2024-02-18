import React from "react";
import { faker } from "@faker-js/faker";

import "../css/HomePage.css"; // Import CSS file for styling
import { BarChart } from "../components/BarChart";
import { DoughnutChart } from "../components/DoughnutChart";
import { SingleLineChart } from "../components/SingleLineChart";
import { StackedBarChart } from "../components/StackedBarChart";
import { SingleBarChart } from "../components/SingleBarChart";

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


const barChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false, // Hide dataset labels
        },
        title: {
            display: true,
            text: "Income and Expense",
            font: {
                size: 25, // Adjust the font size as needed
            },
        },
    },
    scales: {
        y: {
            grid: {
                display: false, // Show y-axis gridlines
            },
            ticks: {
                display: false, // Hide value labels on y-axis
            }
        },
        x: {
            grid: {
                display: false, // Show y-axis gridlines
            },
            ticks: {
                display: false // Hide value labels on y-axis
            }
        }
    },
    elements: {
        point: {
            radius: 0 // Set point radius to 0 to hide points
        }
    }
};



const HomePage = () => {
    const [ barChartData, setBarChartData ] = React.useState( {
        labels: columns, // Use columns as labels
        datasets: [
            {
                label: "",
                data: columns.map( () => faker.number.int( { min: 0, max: 300000 } ) ),
                backgroundColor: "#DBDBDB",
            },
        ],
    } );

    return (
        <div className="grid-container">
            {/* First row */ }
            <div className="first-row">
                <div className="grid-item first-column">
                    <StackedBarChart
                        chartData={ barChartData }
                        chartOptions={ barChartOptions }
                    />
                </div>
                <div className="grid-item second-column">
                    <DoughnutChart
                        chartTitle={ "Net Profit Margin %" }
                        centerText={ "15.4%" }

                        perc1={ 75 }
                        white1={ 25 }

                        perc2={ 85 }
                        white2={ 15 }

                        color1={ "#FC5B56" }
                        color2={ "#02B1A3" }
                    />
                </div>
                <div className="grid-item third-column">
                    <SingleBarChart chartData={ barChartData } chartOptions={ barChartOptions } />
                </div>
            </div>

            {/* Second row */ }
            <div className="first-row">
                <div className="grid-item second-row">
                    <SingleLineChart chartTitle={ "Income" } titleNumber={ 4800 } />
                    <span className="positive-indicator">6.6%</span>
                    <span>vs. previous month</span>
                </div>
                <div className="grid-item second-row">
                    <SingleLineChart chartTitle={ "Expenses" } titleNumber={ 3059 } />
                    <span className="negative-indicator">6.6%</span>
                    <span>vs. previous month</span>
                </div>

                <div className="grid-item second-row">
                    <DoughnutChart
                        chartTitle={ "% of Income Budget" }
                        centerText={ "94%" }

                        perc1={ 94 }
                        white1={ 6 }

                        perc2={ 5 }
                        white2={ 95 }

                        color1={ "#02B1A3" }
                        color2={ "#435362" }
                    />
                </div>

                <div className="grid-item second-row">
                    <SingleLineChart chartTitle={ "Accounts Receivable" } titleNumber={ 991 } />
                    <span className="negative-indicator">-6.5%</span>
                    <span>vs. previous month</span>
                </div>
                <div className="grid-item second-row">
                    <SingleLineChart chartTitle={ "Accounts Payable" } titleNumber={ 867 } />
                    <span className="negative-indicator">-1.9%</span>
                    <span>vs. previous month</span>
                </div>
            </div>

            {/* Third row */ }
            <div className="first-row">
                <div className="grid-item third-row">
                    <SingleLineChart chartTitle={ "Net Profit" } titleNumber={ 746 } />
                    <span className="positive-indicator">5.9%</span>
                    <span>vs. previous month</span>
                </div>
                <div className="grid-item third-row">
                    <SingleLineChart chartTitle={ "Cash at EOM" } titleNumber={ 4167 } />
                    <span className="negative-indicator">-5.0%</span>
                    <span>vs. previous month</span>
                </div>

                <div className="grid-item third-row">
                    <DoughnutChart
                        chartTitle={ "% of Expense Budget" }
                        centerText={ "83%" }

                        perc1={ 85 }
                        white1={ 15 }

                        perc2={ 25 }
                        white2={ 75 }


                        color1={ "#02B1A3" }
                        color2={ "#435362" }
                    />
                </div>

                <div className="grid-item third-row">
                    <SingleLineChart chartTitle={ "Quick Ratio" } titleNumber={ 1.44 } />
                    <span className="positive-indicator">10.5%</span>
                    <span>vs. previous month</span>
                </div>
                <div className="grid-item third-row">
                    <SingleLineChart chartTitle={ "Current Ratio" } titleNumber={ 3.66 } />
                    <span className="negative-indicator">-10.9%</span>
                    <span>vs. previous month</span>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
