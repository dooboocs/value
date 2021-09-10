import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  BillsPage,
  OverviewPage,
  TransactionPage,
  InstallmentsPage,
} from "pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={OverviewPage} />
        <Route path="/transactions" component={TransactionPage} />
        <Route path="/bills" component={BillsPage} />
        <Route path="/installments" component={InstallmentsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
