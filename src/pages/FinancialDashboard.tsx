import { BoxComponent } from "../components/BoxComponent";
import { BoxWithPieChart } from "../components/BoxWithPieChart";
import { MultitypeChart } from "../components/MultitypeChart";
import { SingleDoughnutChart } from "../components/SingleDoughnutChart";

import "../css/FinancialDashboard.css";

export const FinancialDashboard = ( props: any ) => {
    return (
        <>
            <h1>FINANCIAL DASHBOARD</h1>
            <div className="grid-container">

                <div style={ {
                    width: "100%",
                    display: "flex"
                } }>
                    {/* First row */ }
                    <div className="grid-container-new">
                        <div className="grid-row">
                            <div className="grid-column">
                                <BoxComponent />
                                <BoxComponent />
                            </div>
                            <div className="grid-column">
                                <BoxComponent />
                                <BoxComponent />
                            </div>
                        </div>
                    </div>

                    <div
                        style={ {
                            width: "20%",
                            height: "500px",
                            border: "1px solid green",
                        } }
                    >
                        <SingleDoughnutChart
                            perc1={ 85 }
                            perc2={ 15 }
                            color1={ "#29AAE2" }
                            color2={ "#093F6B" }
                            chartTitle={ "Net Profit Margin %" }
                            centerText={ "13.3%" }
                        />
                    </div>

                    {/* Second row */ }
                    <div className="grid-container-new">
                        <div className="grid-row">
                            <div className="grid-column">
                                <BoxComponent />
                                <BoxComponent />
                            </div>
                            <div className="grid-column">
                                <BoxComponent />
                                <BoxComponent />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third row */ }
                <div className="first-row">

                    <MultitypeChart />

                    <BoxWithPieChart />

                    <BoxWithPieChart />

                </div>
            </div>
        </>
    );
};
