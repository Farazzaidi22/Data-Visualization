import './App.css'


import LiabilitiesVsPlan from './pages/LiabilitiesVsPlan'
import AssetsVsPlan from './pages/AssetsVsPlan'
import HomePage from './pages/HomePage'
import { FinancialDashboard } from './pages/FinancialDashboard'
import { IncomeStatement } from './pages/IncomeStatement'
import { BalanceSheet } from './pages/BalanceSheet'
import { JTIS } from './pages/JTIS'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function App () {

  return (
    <>
      <FinancialDashboard />


      <hr />

      {/* <AssetsVsPlan />
      <hr />

      <HomePage />
      <hr />

      <FinancialDashboard />
      <hr />

      <JTIS />
      <hr />

      <IncomeStatement />
      <hr />

      <BalanceSheet />
      <hr />

      <FinancialDashboard />
      <hr /> */}


      {/* <LiabilitiesVsPlan /> */ }
    </>
  )
}

export default App
