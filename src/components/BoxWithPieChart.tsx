import "../css/FinancialDashboard.css";
import { SingleDoughnutChart } from "./SingleDoughnutChart";



export const BoxWithPieChart = () => {


    return (

        <div className="grid-item bottom-right-border"
            style={ {
                width: "400px",
                // borderRadius: "10px"
                margin: "0% 1%"
            } }>
            <h3>% of Income Budget</h3>

            <div style={ {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                borderTop: "1px solid black",
            } }>


                <div style={ { marginTop: "5%" } }>
                    <SingleDoughnutChart
                        perc1={ 85 }
                        perc2={ 15 }
                        color1={ "#29AAE2" }
                        color2={ "#093F6B" }
                        chartTitle={ "Net Profit Margin %" }
                        centerText={ "13.3%" }
                    />
                </div>

                <div className="bottom-row-card">
                    <span className="bottom-card-text" >Budget</span>
                    <span className="bottom-card-text" >5000</span>
                </div>

                <div className="bottom-row-card">
                    <span className="bottom-card-text" >Budget</span>
                    <span className="bottom-card-text" >5000</span>
                </div>
            </div>
        </div>
    )
}