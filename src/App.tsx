import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-tabs/style/react-tabs.css';

import HomePage from './pages/HomePage';
import LiabilitiesVsPlan from './pages/LiabilitiesVsPlan';
import AssetsVsPlan from './pages/AssetsVsPlan';
import { FinancialDashboard } from './pages/FinancialDashboard';
import { JTIS } from './pages/JTIS';
import { IncomeStatement } from './pages/IncomeStatement';
import { BalanceSheet } from './pages/BalanceSheet';


function App () {
  const [ toggled, setToggled ] = useState( false );

  const handleToggleSidebar = ( value: boolean ) => {
    setToggled( value );
  };

  return (
    <BrowserRouter>
      <div style={
        {
          width: "100%",
          height: "100vh",
          display: 'flex'
        }
      }>


        <div style={
          {
            width: "15%",

          }
        }>
          <Sidebar>
            <Menu menuItemStyles={ {
              button: {
                // the active class will be added automatically by react router
                // so we can use it to style the active menu item
                [ `&.active` ]: {
                  backgroundColor: '#13395e',
                  color: '#b6c8d9',
                },
              },
            } }>
              <MenuItem component={ <Link to="/" /> }> Home Page </MenuItem>
              <MenuItem component={ <Link to="/liabilities-vs-plan" /> }> Liabilities vs Plan </MenuItem>
              <MenuItem component={ <Link to="/assets-vs-plan" /> }> Assets vs Plan </MenuItem>
              <MenuItem component={ <Link to="/financial-dashboard" /> }> Financial Dashboard </MenuItem>
              <MenuItem component={ <Link to="/jtis" /> }> JTIS </MenuItem>
              <MenuItem component={ <Link to="/income-statement" /> }> Income Statement </MenuItem>
              <MenuItem component={ <Link to="/balance-sheet" /> }> Balance Sheet </MenuItem>
            </Menu>
          </Sidebar>
        </div>

        <main style={
          {
            width: "90%",
          }
        }>
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/liabilities-vs-plan" element={ <LiabilitiesVsPlan /> } />
            <Route path="/assets-vs-plan" element={ <AssetsVsPlan /> } />
            <Route path="/financial-dashboard" element={ <FinancialDashboard /> } />
            <Route path="/jtis" element={ <JTIS /> } />
            <Route path="/income-statement" element={ <IncomeStatement /> } />
            <Route path="/balance-sheet" element={ <BalanceSheet /> } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
