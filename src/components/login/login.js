import "../assets/css/login.css";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {emailValidation} from '../../helpers/controllers';
import { useHistory } from "react-router-dom";


function LoginPage(){
    toast.configure();
    let history = useHistory();
    return<>
   
    <div className="login-container mt-4 mb-3">
   
    <h1 className="text-center">login page</h1>
    <hr/>
    <Formik
     initialValues={{email:"",password:"",category:""}}
     onSubmit={(values,{setSubmitting,resetForm})=>{
         setTimeout(()=>{
            let email = values.email;
            let password = values.password;
            let category = values.category;
            const data = {email,password,category};
            emailValidation(data)
            .then(res=>{       
                if(res.data.type ==="success" && res.data.category ==="Admin"){
                  toast.success(res.data.message); 
                  history.push("/admin",{ ...res.data.user });
                } else if(res.data.type ==="success" && res.data.category ==="Manager"){
                    toast.success(res.data.message);
                    history.push("/manager",{ ...res.data.user });
                }
                else if(res.data.type ==="success" && res.data.category ==="EP"){
                    toast.success(res.data.message);
                    history.push("/employe",{ ...res.data.user });
                }
                else if(res.data.type ==="success" && res.data.category ==="ENP"){
                    toast.success(res.data.message);
                    history.push("/employe",{ ...res.data.user });
                }
                else if(res.data.type ==="success" && res.data.category ==="student"){
                    toast.success(res.data.message);
                    history.push("/user",{ ...res.data.user });
                    
                }
                else{
                  toast.error(res.data.message);
                }      
                resetForm();
                setSubmitting(false); 
              })
              .catch((error) => console.log(error))
            // console.log(data);
            //  resetForm();
            //  setSubmitting(false); 
         },500)
     }}
     validationSchema = {Yup.object().shape({
         email: Yup.string()
         .email()
         .required("Required"),
         password: Yup.string()
         .required("No password provided.")
         .min(8, "Password is too short - should be 8 chars minimum."),
        //  .matches(/(?=.*[0-9])/, "Password must contain a number."),
         category: Yup.string()
         .ensure()
         .required("Category is required!"),
     })}
    >
        {props =>{
             const {values, touched, errors, isSubmitting, handleChange, handleSubmit} = props;
            return<>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className=" font-weight-bold">Email</label>
                    <input type="text" name="email" placeholder="Enter Email"  autoComplete="new-password"
                     value={values.email} onChange={handleChange} className={errors.email && touched.email && "error"}/>
                     {
                         errors.email && touched.email &&  (
                             <div className="input-feedback">{errors.email}</div>
                         )
                     }


                    <label htmlFor="password" className="font-weight-bold">Password</label>
                    <div className="input-group">                        
                        <input type="password" name="password" autoComplete="new-password" placeholder="Enter Password" style={{width:'94%'}} value={values.password} onChange={handleChange} className={errors.password && touched.password && "error"} />
                        <span className="input-group-append">
                         <button className="btn btn-danger " type="button"><i className="fa fa-eye"></i></button>
                        </span> 
                    </div>
                    {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                    )}
                    <label htmlFor="category" className="font-weight-bold">Category</label>
                    <select  name="category" value={values.category} onChange={handleChange} className={errors.category && touched.category && "error"}>
                        <option value="no">--Select Option--</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="EP">Employe perminant</option>
                        <option value="ENP">Employe Non perminant</option>
                        <option value="student">User</option>
                    </select>
                    {errors.category && touched.category && (
                        <div className="input-feedback">{errors.category}</div>
                    )}
                        <button className="btn btn-danger mt-2 pt-2 pb-2 pl-4 pr-4" type="submit" disabled={isSubmitting}>Login</button>
                </form>
            </>;
        }}
    </Formik>
    <hr/>
    {/* <p>forgot password</p>
    <p>sign up</p>
    <hr/> */}
    <div class="alert alert-primary" role="alert" style={{width:"100%"}}>
        <span><b>Admin: </b> admin@gmail.com</span><br/>
        <span> <b>password: </b>admin001</span>
        <hr/>
        <span><b>Manager: </b>manager@gmail.com</span><br/>
        <span><b>password: </b>manager001</span>
        <hr/>
        <span><b>Employe: </b>employe@gmail.com</span><br/>
        <span><b>password: </b>employe001</span>
    </div>
    </div>
   
    </>;
}
export default LoginPage;