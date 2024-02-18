import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import {
    Chart,
} from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import "../css/FinancialDashboard.css";


ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

export const options = {
    responsive: true,
    scales: {
        y: {
            grid: {
                display: true, // Show y-axis gridlines
            },
            ticks: {
                display: true, // Hide value labels on y-axis
                count: 11 // Show only 11 gridlines on y-axis
            }
        },
        x: {
            grid: {
                display: false, // Show y-axis gridlines
            },
            ticks: {
                display: true // Hide value labels on y-axis
            }
        }
    },
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
        },
    },

};

const labels = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ];

const data = {
    labels,
    datasets: [
        {
            type: 'line' as const,
            label: 'Net Profit',
            backgroundColor: '#A6C9D3',
            borderColor: '#A6C9D3',
            borderWidth: 2,
            fill: false,
            data: labels.map( () => faker.number.int( { min: 0, max: 1000 } ) ),
        },
        {
            type: 'bar' as const,
            label: 'Total Expense',
            backgroundColor: '#0BB0F5',
            data: labels.map( () => faker.number.int( { min: -5000, max: 0 } ) ),
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar' as const,
            label: 'Total Income',
            backgroundColor: '#003F77',
            data: labels.map( () => faker.number.int( { min: 0, max: 5000 } ) ),
        },
    ],
};

export function MultitypeChart () {

    return (

        <div className="grid-item first-column">

            <h2>Income and Expense</h2>
            <Chart
                type='bar'
                options={ options }
                data={ data }
            />
        </div>
    );
}
