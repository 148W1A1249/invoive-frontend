import React from "react"
import "../assets/css/sidebar_layout.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Dashboard from '../admin/dashboard';
import Dashboard from '../forall/dashboard/dashboard';
import Operation from '../forall/operations';
import Sidebar from '../forall/sidebar_layout';
import Home from '../forall/dashboard/home';
import Routine from '../forall/dashboard/routine';

function ManagerPage(){
    return<>
    <Router>
        <div className="homeContainer">
            <Sidebar client={"Manager"}></Sidebar>
            <div className="contentContainer" >
                <div className="menu-div bg-danger pt-2 pb-2 mb-5 " style={{height:"70px",opacity:"0.7"}}></div>
                <div className="content-div p-5" >
                    <Switch>
                        {/* <Route path="/dashboard" component={Dashboard} exact={true}/> */}
                        <Route path="/home" component={() => <Home client={"Manager"} />}  exact={true}/>
                        <Route path="/dashboard" component={() => <Dashboard client={"Manager"} />}  exact={true}/>
                        <Route path="/operation" component={() => <Operation client={"Manager"} />} exact={true}/>
                        <Route path="/routine" component={() => <Routine client={"Manager"} />} exact={true}/>
                    </Switch>
                </div> 
            </div>
        </div>
        </Router>
    </>;
}
export default ManagerPage;