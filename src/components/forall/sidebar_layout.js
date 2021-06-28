import React, { useState }from "react"
import "../assets/css/sidebar_layout.css";
import logo from "../assets/images/logo.png";
import { Link} from "react-router-dom";

function Sidebar(props){    
    const [show,setShow] = useState(false);
    let client_resources = [
        {
            client:"Admin",
            clientInfo:[
                {
                    label:"Home",
                    link:"/home"
                },
                {
                    label:"Dashboard",
                    link:"/dashboard"
                },
                {
                    label:"School",
                    link:"/operation"
                },
                {
                    label:"Syllabus",
                    link:"/syllabus"
                },
                {
                    label:"Routine",
                    link:"/routine"
                },
            ],            
        },
        {
            client:"Manager",
            clientInfo:[
                {
                    label:"home",
                    link:"/home"
                },
                {
                    label:"dashboard",
                    link:"/dashboard"
                },
                {
                    label:"School",
                    link:"/operation"
                },
                {
                    label:"Routine",
                    link:"/routine"
                },
            ], 
        },
        {
            client:"EP",
            clientInfo:[
                {
                    label:"home",
                    link:"/home"
                },
                {
                    label:"dashboard",
                    link:"/dashboard"
                },
                {
                    label:"School",
                    link:"/operation"
                },
                {
                    label:"Routine",
                    link:"/routine"
                },
            ], 
        },
        {
            client:"ENP",
            clientInfo:[
                {
                    label:"home",
                    link:"/home"
                },
                {
                    label:"dashboard",
                    link:"/dashboard"
                },
                {
                    label:"School",
                    link:"/operation"
                },
                {
                    label:"Routine",
                    link:"/routine"
                },
            ], 
        },
    ]
    const togglebutton = ()=>{
        setShow(value => !value);
        console.log(show)
        if(show){ 
            document.querySelector("#sidebar").style.display = "block"; 
        }else{
            document.querySelector("#sidebar").style.display = "none"; 
        }
    }
    return<>
    <div className='menu'> 
    <i className="fas fa-bars" onClick={togglebutton}></i>
    </div>
    <div className="sidebar" id='sidebar'>
        <img src={logo} alt="logo" width="100%" className="mb-5 p-auto"/>
        {/* <nav className="nav flex-column justify-content-center m-2" style={{position:"fixed"}}>             */}
        <nav className="nav flex-column justify-content-center m-2">            
            {
                client_resources.map((obj)=>{
                    let out
                    if(obj.client===props.client){                        
                         out = obj.clientInfo.map(info=>{
                            return <Link className="nav-link" to={info.link}>{info.label}</Link>;
                        })
                    }
                    return out
                })
            }
        </nav>
        <div className="footer">
            <div className="row">
                <div className="col-3">
                <i className="fas fa-user-shield fa-2x"></i>
                </div>
                <div className="col-5">
                   {
                       (()=>{
                           if(props.client==="EP"){
                               return <b>Employee</b>
                           }else{
                            return <b>{props.client}</b>
                           }
                       })()
                   }
                </div>
                <div className="col-3">
                <i className="fas fa-sign-out-alt fa-2x "></i>
                </div>
            </div>
        </div>
    </div>
    </>;
}
export default Sidebar;