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
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function LineChart ( props: any ) {
    const { chartTitle } = props;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide dataset labels
            },
            title: {
                display: true,
                text: chartTitle,
                font: {
                    size: 20 // Adjust the font size as needed
                }
            },
        },
        scales: {
            y: {
                grid: {
                    display: true, // Show y-axis gridlines
                },
                ticks: {
                    display: false, // Hide value labels on y-axis
                    count: 4 // Show only 4 gridlines on y-axis
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

    const labels = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ];

    const data = {
        labels,
        datasets: [
            {
                data: labels.map( () => faker.number.int( { min: 100, max: 1000 } ) ),
                borderColor: '#006055',
                backgroundColor: '#006055',
                tension: 0, // Ensure lines are straight without bezier curves
            },
            {
                data: labels.map( () => faker.number.int( { min: 100, max: 1000 } ) ),
                borderColor: '#BFB592',
                backgroundColor: '#BFB592',
                tension: 0, // Ensure lines are straight without bezier curves
            },
        ],
    };

    return <Line options={ options } data={ data } />;
}
