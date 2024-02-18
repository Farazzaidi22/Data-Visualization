import React from 'react';
import { Pie } from 'react-chartjs-2';

import { Chart, ArcElement } from 'chart.js';
Chart.register( ArcElement );



export function SingleDoughnutChart ( props: any ) {

    const { chartTitle, centerText, perc1, perc2, color1, color2 } = props;

    const data = {
        datasets: [
            {
                data: [ perc1, perc2, ],
                backgroundColor: [ color1, color2 ],
                borderColor: [ color1, color2 ],
                borderWidth: 1,
                cutout: '80%', // Adjust the width of the outer circle (half circle)
            },
        ],
    };

    return (
        <Pie
            data={ data }
            options={ {
                plugins: {
                    legend: {
                        display: false, // Hide the legend
                    },
                    title: {
                        display: true,
                        text: chartTitle,
                        font: {
                            size: 20 // Adjust the font size as needed
                        }
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
                        const text = centerText;
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
