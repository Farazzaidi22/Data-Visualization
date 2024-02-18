import "../css/BalanceSheet.css";

export const BalanceSheet = (props: any) => {
  return (
    <>
      <div className="parent-container">
        <div className="table-container">
          <div className="column-1">
            <div className="header-box">
              <p className="income-statement-tckz-header dark-bg-header header">Income Statement in TCKZ</p>
            </div>
            <p className="large-text">&nbsp;&nbsp;Cash & balances with centrl banks</p>
            <p className="large-text">&nbsp;&nbsp;Due from financial institutions</p>
            <p className="large-text">&nbsp;&nbsp;Securities</p>
            <p className="large-text">&nbsp;&nbsp;Loans & advances to customers (excl. expo)</p>
            <p className="large-text">&nbsp;&nbsp;Intangible/Tangible fixed assets</p>
            <p className="large-text">&nbsp;&nbsp;Other assets</p>
            <p className="operating-income bold-text">Total Assets</p>
            <p className="large-text">&nbsp;&nbsp;Deposits and Loans from banks</p>
            <p className="large-text">&nbsp;&nbsp;Deposits and Loans from customers</p>
            <p className="large-text">&nbsp;&nbsp;Other loabilities and provisions</p>
            <p className="large-text">&nbsp;&nbsp;Subordinated liabilities</p>
            <p className="large-text">&nbsp;&nbsp;Equity</p>
            <p className="bold-text">Total liabilities</p>
          </div>


          <div className="column-2">
            <div className="actual-amount-column column-2-1">
              <div className="header-box">
                <p className="actual-10-2023-header dark-bg-header header">Actual<br></br>10/2023</p>
              </div>
              <p className="large-text">51 329</p>
              <p className="large-text">24 170</p>
              <p className="large-text">25 486</p>
              <p className="large-text">-1 316</p>
              <p className="large-text">1 333</p>
              <p className="large-text">5 169</p>
              <p className="other-operating-income bold-text">1 234</p>
              <p className="large-text">4 555</p>
              <p className="large-text">6 544</p>
              <p className="large-text">3 097</p>
              <p className="large-text">9 567</p>
              <p className="large-text">6 375</p>
              <p className="bold-text">6 946</p>
            </div>

            <div className="planned-amount-column column-2-2">
              <div className="header-box">
                <p className="planned-10-2023-header light-bg-header header">Plan<br></br>10/2023</p>
              </div>
              <p className="large-text">51 329</p>
              <p className="large-text">24 170</p>
              <p className="large-text">25 486</p>
              <p className="large-text">-1 316</p>
              <p className="large-text">1 333</p>
              <p className="large-text">5 169</p>
              <p className="other-operating-income bold-text">1 234</p>
              <p className="large-text">4 555</p>
              <p className="large-text">6 544</p>
              <p className="large-text">3 097</p>
              <p className="large-text">9 567</p>
              <p className="large-text">6 375</p>
              <p className="bold-text">6 946</p>
            </div>
          </div>


          <div className="column-3">
            <div className="column-3-headers light-bg-header">
              <p className="column-3-main-header">Actual x Plan</p>
              <div className="column-3-sub-headers">
                <p className="numerical-difference-header">&#9653; abs</p>
                <p className="percentage-difference">&#9653; ins %</p>
              </div>
            </div>
            <div className="numerical-and-percentage-columns">
              <div className="numerical-difference column-3-1">
              <p className="large-text">51 329</p>
              <p className="large-text">24 170</p>
              <p className="large-text">25 486</p>
              <p className="large-text">-1 316</p>
              <p className="large-text">1 333</p>
              <p className="large-text">5 169</p>
              <p className="other-operating-income bold-text">1 234</p>
              <p className="large-text">4 555</p>
              <p className="large-text">6 544</p>
              <p className="large-text">3 097</p>
              <p className="large-text">9 567</p>
              <p className="large-text">6 375</p>
              <p className="bold-text">6 946</p>
              </div>

              <div className="percentage-difference column-3-2">
              <p className="large-text">51 329</p>
              <p className="large-text">24 170</p>
              <p className="large-text">25 486</p>
              <p className="large-text">-1 316</p>
              <p className="large-text">1 333</p>
              <p className="large-text">5 169</p>
              <p className="other-operating-income bold-text">1 234</p>
              <p className="large-text">4 555</p>
              <p className="large-text">6 544</p>
              <p className="large-text">3 097</p>
              <p className="large-text">9 567</p>
              <p className="large-text">6 375</p>
              <p className="bold-text">6 946</p>
              </div>
            </div>
          </div>

          <div className="column-4">
            <div className="column-4-1">
              <div className="header-box">
                <p className="Forecast-12-2023 white-bg-header header">Forecast<br></br>12/2023</p>
              </div>
              <p className="large-text">51 329</p>
              <p className="large-text">24 170</p>
              <p className="large-text">25 486</p>
              <p className="large-text">-1 316</p>
              <p className="large-text">1 333</p>
              <p className="large-text">5 169</p>
              <p className="other-operating-income bold-text">1 234</p>
              <p className="large-text">4 555</p>
              <p className="large-text">6 544</p>
              <p className="large-text">3 097</p>
              <p className="large-text">9 567</p>
              <p className="large-text">6 375</p>
              <p className="bold-text">6 946</p>
            </div>

            <div className="column-4-2">
              <div className="header-box">
                <p className="Plan-12-2023 light-bg-header header">Plan<br></br>12/2023</p>
              </div>
              <p className="large-text">51 329</p>
              <p className="large-text">24 170</p>
              <p className="large-text">25 486</p>
              <p className="large-text">-1 316</p>
              <p className="large-text">1 333</p>
              <p className="large-text">5 169</p>
              <p className="other-operating-income bold-text">1 234</p>
              <p className="large-text">4 555</p>
              <p className="large-text">6 544</p>
              <p className="large-text">3 097</p>
              <p className="large-text">9 567</p>
              <p className="large-text">6 375</p>
              <p className="bold-text">6 946</p>
            </div>

            <div className="column-4-3">
              <div className="header-box">
                <p className="Actual-12-2023 dark-bg-header header">Actual<br></br>12/2023</p>
              </div>
              <p className="large-text">51 329</p>
              <p className="large-text">24 170</p>
              <p className="large-text">25 486</p>
              <p className="large-text">-1 316</p>
              <p className="large-text">1 333</p>
              <p className="large-text">5 169</p>
              <p className="other-operating-income bold-text">1 234</p>
              <p className="large-text">4 555</p>
              <p className="large-text">6 544</p>
              <p className="large-text">3 097</p>
              <p className="large-text">9 567</p>
              <p className="large-text">6 375</p>
              <p className="bold-text">6 946</p>
            </div>

            <div className="column-4-4">
              <div className="header-box">
                <p className="Distribution-to-12-2023 dark-bg-header header">Distribution to<br></br>12/2023</p>
              </div>
              <p className="large-text">51 329</p>
              <p className="large-text">24 170</p>
              <p className="large-text">25 486</p>
              <p className="large-text">-1 316</p>
              <p className="large-text">1 333</p>
              <p className="large-text">5 169</p>
              <p className="other-operating-income bold-text">1 234</p>
              <p className="large-text">4 555</p>
              <p className="large-text">6 544</p>
              <p className="large-text">3 097</p>
              <p className="large-text">9 567</p>
              <p className="large-text">6 375</p>
              <p className="bold-text">6 946</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};