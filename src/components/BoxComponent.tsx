import "../css/FinancialDashboard.css";



export const BoxComponent = ( props: any ) => {


    const { boxhHeaderTitle, titleNumber, icon } = props;

    return (

        <div className="grid-item bottom-right-border"
            style={ {
                width: "350px",
                // borderRadius: "10px"
            } }>
            <h3>{ boxhHeaderTitle }</h3>

            <div style={ {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                borderTop: "1px solid black"
            } }>


                { icon } {/* Render the icon directly */ }

                <div style={ {} }>

                    <h3>{ titleNumber }</h3>

                    <p>16.1%</p>

                    <p className="top-card-text">vs previous month</p>
                </div>


            </div>
        </div>
    )
}