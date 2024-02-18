import { CiMoneyCheck1, CiStopwatch } from "react-icons/ci";
import { FaWallet, FaCoins, FaChartPie } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { GrCurrency } from "react-icons/gr";
import { IoBarChartSharp } from "react-icons/io5";
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
                                <BoxComponent boxhHeaderTitle={ "Total Income" } titleNumber="4,719,00" icon={ <FiDollarSign size={ 60 } /> } />
                                <BoxComponent boxhHeaderTitle={ "Net Profit" } titleNumber="629,00" icon={ <IoBarChartSharp size={ 60 } /> } />
                            </div>
                            <div className="grid-column">
                                <BoxComponent boxhHeaderTitle={ "Total Expense" } titleNumber="3,270,00" icon={ <FaWallet size={ 60 } /> } />
                                <BoxComponent boxhHeaderTitle={ "Cash at the end of month" } titleNumber="7,684,00" icon={ <GrCurrency size={ 60 } /> } />
                            </div>
                        </div>
                    </div>

                    <div
                        style={ {
                            width: "20%",
                            height: "500px",
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
                                <BoxComponent boxhHeaderTitle={ "Accounts Receivable" } titleNumber="609,00" icon={ <FaCoins size={ 60 } /> } />
                                <BoxComponent boxhHeaderTitle={ "Quick Ratio" } titleNumber="102" icon={ <FaChartPie size={ 60 } /> } />
                            </div>
                            <div className="grid-column">
                                <BoxComponent boxhHeaderTitle={ "Accounts Payable" } titleNumber="538,00" icon={ <CiMoneyCheck1 size={ 60 } /> } />
                                <BoxComponent boxhHeaderTitle={ "Current Ratio" } titleNumber="302" icon={ <CiStopwatch size={ 60 } /> } />
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
