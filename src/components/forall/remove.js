import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RemovePerson} from '../../helpers/controllers';

function Remove(props){
    toast.configure();
    return<>
        <div className="container p-5">
            <div className="container">
            <h3 className="text-center">Remove {props.data} page</h3>
            <Formik
            initialValues={{email:"",}}
            onSubmit={(values,{setSubmitting,resetForm})=>{
                setTimeout(()=>{
                    let email = values.email;
                    let category = props.data;
                    const data = {email ,category};
                    RemovePerson(data)
                    .then(res=>{
                        if(res.data.type ==="success"){
                            toast.success(res.data.message); 
                        }else{
                            toast.error(res.data.message);
                        }                         
                        resetForm();
                        setSubmitting(false); 
                    })
                    .catch((error) => console.log(error))                      
                },500)
            }}
            validationSchema = {Yup.object().shape({
                email: Yup.string()
                .email()
                .required("Required"),
            })}
            >
                {props =>{
                    const {values, touched, errors, isSubmitting, handleChange, handleSubmit} = props;
                    return<>
                        <form onSubmit={handleSubmit}>
                        <div className="row">                            
                            <div className="col-12 text-right mt-3">
                                <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter Email" className={errors.email && touched.email && "error"} style={{margin:"5px",width:"50%",float:"right",borderRadius:"50px",outline: 'none',paddingLeft:"30px"}}/>
                                {
                                    errors.email && touched.email &&  (
                                        <div className="input-feedback">{errors.email}</div>
                                    )
                                }
                            </div>
                            <div className="col-12 text-right mb-3">
                                <button className="btn btn-danger mt-2 pt-2 pb-2 pl-4 pr-4 mr-4" type="submit" disabled={isSubmitting}>Remove</button>
                            </div>
                        </div>
                        </form>
                    </>;
                }}
            </Formik>
    
            </div>
        </div>
    </>;
}

export default Remove;