import React from 'react';
import '../css/Table.css'; // Import CSS for styling

function TableComponent ( { columns, data }: any ) {
    return (
        <table className="custom-table">
            <thead>
                <tr>
                    { columns.map( ( column: any, index: number ) => (
                        <th key={ index } className="green-header">
                            { column }
                        </th>
                    ) ) }
                </tr>
            </thead>
            <tbody>
                { data.map( ( row: any, rowIndex: number ) => (
                    <tr key={ rowIndex } className={ rowIndex === data.length - 1 ? 'highlighted-row' : '' }>
                        { row.map( ( cell: any, cellIndex: number ) => (
                            <td key={ cellIndex }>{ cell }</td>
                        ) ) }
                    </tr>
                ) ) }
            </tbody>
        </table>
    );
}

export default TableComponent;
