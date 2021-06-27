import React, { useState  } from 'react';
import Pages from './pages';

function Operation(props){
    let access=[
        {
            client:"Admin",
            clientAccess:[
                {
                    label:"Manager",
                    value:"Manager",
                },
                {
                    label:"Employe",
                    value:"EP"
                },
                {
                    label:"Employe temporary",
                    value:"ENP"
                },
                {
                    label:"Student",
                    value:"student"
                },
            ]
        },
        {
            client:"Manager",
            clientAccess:[
                {
                    label:"Employe",
                    value:"EP"
                },
                {
                    label:"Employe temporary",
                    value:"ENP"
                },
                {
                    label:"Student",
                    value:"student"
                },
            ]
        },
        {
            client:"EP",
            clientAccess:[
                {
                    label:"Student",
                    value:"student"
                }
            ]
        },
    ]
    const [position,setPosition]= useState("");
    const [operation,setOperation]= useState("");
    // const [task,setTask]= useState({});
    // const getinfo = (event)=>{
    //     event.preventDefault();
    //     let data = {position,operation}
    //     console.log(data)
    //     alert(JSON.stringify(data));
    //     setPosition({position:""})
    //     setOperation({operation:""})
    // }
    return<>
    {
        (()=>{
            if(props.client==="EP"){
                return <span>Employee</span>
            }else{
                return <span>{props.client}</span>
            }
        })()
    }
    <div className="container bg-light rounded pt-3">
        <h4 className="text-center pt-2 pb-2">Add or Remove Operations</h4>
        <form>
            <div className="selctClient row pb-3">
                <div className="col-md-6">
                    <select name="position" value={position} onChange={((e)=>setPosition(e.target.value))}>
                        <option value="">--Select Category--</option>
                        
                        {
                            access.map((obj)=>{
                                let out
                                if(obj.client===props.client){                        
                                    out = obj.clientAccess.map(info=>{
                                        return <option value={info.value}>{info.label}</option>;
                                    })
                                }
                                return out
                            })
                            
                        }
                    </select>
                </div>
                <div className="col-md-6">
                    <select name="operation" value={operation} onChange={(e)=>setOperation(e.target.value)}>
                            <option value="">--Select Operation--</option>
                            <option value="create">Create</option>
                            <option value="update">Update</option>
                            <option value="delete">Remove</option>
                            <option value="invoice">Invoice</option>
                        </select>
                </div>
                {/* <div className="col-12 text-center mb-3">
                    <button type="button" className="btn btn-danger " onClick={getinfo}>Get Page</button>
                </div> */}
            </div>
        </form>
    </div>

    <div className="formForall bg-white mt-3 rounded">
        <Pages client={props.client} position={position} operation={operation}></Pages>
    </div>
    </>;
}

export default Operation;