import { FiDollarSign } from "react-icons/fi"
import "../css/FinancialDashboard.css";



export const BoxComponent = () => {


    return (

        <div className="grid-item bottom-right-border"
            style={ {
                width: "300px",
                // borderRadius: "10px"
            } }>
            <h3>Total Income</h3>

            <div style={ {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                borderTop: "1px solid black"
            } }>


                <FiDollarSign size={ 80 } />

                <div style={ {} }>

                    <h3>4 719 00</h3>

                    <p>16.1%</p>

                    <p>vs previous month</p>
                </div>


            </div>
        </div>
    )
}