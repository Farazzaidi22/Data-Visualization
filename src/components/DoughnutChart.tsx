import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { Chart, ArcElement } from "chart.js";
Chart.register( ArcElement );


export const data = {
    labels: [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
    datasets: [
        {
            label: 'First Series',
            data: [ 12, 19, 3, 5, 2, 3 ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
        {
            label: 'Second Series',
            data: [ 8, 15, 6, 10, 5, 8 ], // Add data for the second series
            backgroundColor: [
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export function DoughnutChart () {
    return (
        <Doughnut
            data={ data }
            options={ {
                cutout: '80%', // Adjust the width of the donut chart
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function ( context ) {
                                let label = context.label || '';
                                if ( label ) {
                                    label += ': ';
                                }
                                if ( context.parsed ) {
                                    label += context.parsed + ' votes';
                                }
                                return label;
                            },
                        },
                    },
                },
            } }
            plugins={ [
                {
                    id: 'xyz',
                    beforeDraw ( chart ) {
                        const { width } = chart;
                        const { height } = chart;
                        const { ctx } = chart;
                        ctx.restore();
                        const fontSize = ( height / 150 ).toFixed( 2 );
                        ctx.font = `${ fontSize }em sans-serif`;
                        ctx.textBaseline = 'top';
                        const text = '23';
                        const textX = Math.round( ( width - ctx.measureText( text ).width ) / 2 );
                        const textY = height / 2;
                        ctx.fillText( text, textX, textY );
                        ctx.save();
                    },
                },
            ] }
        />
    );
}
