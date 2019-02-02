import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SiteNavbar from "./components/utilities/SiteNavbar";
import Landing from "./components/public/Landing";
import Login from "./components/public/Login";
import Dashboard from "./components/manager/Dashboard";
import Employee from "./components/manager/Employee";
import Employees from "./components/manager/Employees";
import Shifts from "./components/manager/Shifts";
import Shift from "./components/manager/Shift";
import EmployeesNew from "./components/manager/EmployeesNew";
import Settings from "./components/manager/Settings";
import InventoryItems from "./components/manager/InventoryItems";

import axios from "axios";

class App extends Component {
  render() {
    (function() {
      const token = localStorage.getItem("auth_token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      } else {
        axios.defaults.headers.common["Authorization"] = null;
        /*if setting null does not remove `Authorization` header then try
          delete axios.defaults.headers.common['Authorization'];
        */
      }
    })();
    return (
      <div className="app">
        <Router>
          <div>
            <SiteNavbar />
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <Route exact path="/login" component={Login} />
            </Switch>
            <Switch>
              <Route exact path="/shifts" component={Shifts} />
            </Switch>
            <Switch>
              <Route exact path="/shift" component={Shift} />
            </Switch>
            <Switch>
              <Route exact path="/employee" component={Employee} />
            </Switch>
            <Switch>
              <Route exact path="/employees" component={Employees} />
            </Switch>
            <Switch>
              <Route exact path="/employeesnew" component={EmployeesNew} />
            </Switch>
            <Switch>
              <Route exact path="/settings" component={Settings} />
            </Switch>
            <Switch>
              <Route exact path="/inventory-items" component={InventoryItems} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
