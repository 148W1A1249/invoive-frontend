import React from "react"
import "../assets/css/sidebar_layout.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from '../forall/dashboard/dashboard';
// import Dashboard from './dashboard';
import Operation from '../forall/operations';
import Sidebar from '../forall/sidebar_layout';
import Syllabus from '../forall/dashboard/syllabus';
import Routine from '../forall/dashboard/routine';
import Home from '../forall/dashboard/home';

function Admin(){
    return<>
    <Router>
        <div className="homeContainer">
            <Sidebar client={"Admin"}></Sidebar>
                <div className="contentContainer" style={{width:"264px"}}>
                    <div className="menu-div bg-danger pt-2 pb-2 mb-5 d-none d-sm-block" style={{height:"70px",opacity:"0.7"}}>
                    </div>
                    <div className="content-div p-5">
                        <Switch>
                            {/* <Route path="/dashboard"  component={Dashboard} exact={true}/> */}
                            <Route path="/home" component={() => <Home client={"Admin"} />}  exact={true}/>
                            <Route path="/dashboard" component={() => <Dashboard client={"Admin"} />}  exact={true}/>
                            <Route path="/operation" component={() => <Operation client={"Admin"} />} exact={true}/>
                            <Route path="/syllabus" component={() => <Syllabus client={"Admin"} />} exact={true}/>
                            <Route path="/routine" component={() => <Routine client={"Admin"} />} exact={true}/>
                        </Switch>
                    </div> 
                </div>            
        </div>
        </Router>
    </>;
}
export default Admin;