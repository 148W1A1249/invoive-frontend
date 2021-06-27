import React from "react";
import LoginPage from "./components/login/login";
import "./components/style.css";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AdminPage from "./components/admin/admin_page";
import EmployePage from "./components/employee/employe_page";
import ManagerPage from "./components/manager/manager_page";
import UserPage from "./components/user/user_page";

function App(){
    return<>
    <Router>
        <Switch>
            <Route path="/" component={LoginPage} exact={true}></Route>
            <Route path="/admin" component={AdminPage} exact={true}></Route>
            <Route path="/manager" component={ManagerPage} exact={true}></Route>
            <Route path="/employe" component={EmployePage} exact={true}></Route>
            <Route path="/user" component={UserPage} exact={true}></Route>
        </Switch>
    </Router>
    </>;
}
export default App;