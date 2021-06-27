import React from 'react';
//create imports
import ManagerCreatePage from './mangerCreate';
import PerminentEmployeeCreatePage from './employePcreate';
import TemporaryEmployeeCreatePage from './employeTcreate';
import UserCreatePage from './userCreate';
// update imports
import ManagerUpdatePage from './managerUpdate';
// delete imports
import Remove from './remove';
// invoice
import Invoice from './invoice';


function Pages(props){
    // console.log(props);
    return<>
    <div className="container">
        {
           (()=>{
                 if(props.position ==="" || props.operation===""){
                    return <></>
                }
                else if(props.operation==="create"){
                    if(props.position ==="Manager"){return <> <ManagerCreatePage/></>}
                    else if(props.position ==="EP"){return <> <PerminentEmployeeCreatePage/></>}
                    else if(props.position ==="ENP"){return <><TemporaryEmployeeCreatePage/></>}
                    else if(props.position ==="student"){return <> <UserCreatePage/></>}
                }
                else if(props.operation==="update"){
                    if(props.position ==="Manager"){return <> <ManagerUpdatePage/></>}
                    else if(props.position ==="EP"){return <> EP update page</>}
                    else if(props.position ==="ENP"){return <> ENP update page</>}
                    else if(props.position ==="student"){return <> student update page</>}
                }
                else if(props.operation==="delete"){
                    if(props.position ==="Manager"){return <> <Remove data={"Manager"}/></>}
                    else if(props.position ==="EP"){return <><Remove data={"EP"}/></>}
                    else if(props.position ==="ENP"){return <> <Remove data={"ENP"}/></>}
                    else if(props.position ==="student"){return <> <Remove data={"student"}/></>}
                }
                else if(props.operation==="invoice"){
                    if(props.position ==="Manager"){return <> <Invoice data={"Manager"}/></>}
                    else if(props.position ==="EP"){return <><Invoice data={"EP"}/></>}
                    else if(props.position ==="ENP"){return <> <Invoice data={"ENP"}/></>}
                    else if(props.position ==="student"){return <> <Invoice data={"student"}/></>}
                }
           })()
        }
    </div>
    </>
}

export default Pages;