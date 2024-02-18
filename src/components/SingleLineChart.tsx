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

export function SingleLineChart ( props: any ) {
    const { chartTitle, titleNumber } = props;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide dataset labels
            },
            title: {
                display: true,
                text: titleNumber,
                font: {
                    size: 20 // Adjust the font size as needed
                }
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

    const labels = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ];

    const data = {
        labels,
        datasets: [
            {
                data: labels.map( () => faker.number.float( { min: 0, max: 0.100 } ) ),
                borderColor: '#00AC99',
                backgroundColor: '#00AC99',
                tension: 0, // Ensure lines are straight without bezier curves
            },
        ],
    };

    return (

        <>
            <h2>{ chartTitle }</h2>
            <Line options={ options } data={ data } />
        </>
    );
}
