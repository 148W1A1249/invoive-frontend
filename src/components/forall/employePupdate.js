import React from "react";
import {Formik} from 'formik';
import * as Yup from "yup";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {createPerminentEmployeer} from '../../helpers/controllers';

function PerminentEmployeeUpdatePage(){
    toast.configure();
    return<>
        <div className="container p-md-5 ">
            <h3 className="text-center">Update Employee Form</h3>
            <hr/>
            <Formik
            initialValues={{fname:"",lname:"",email:"",password:"",mobile:"",address:"",state:"",pincode:"",country:"",salary:"",dateOfJoining:""}}
            onSubmit={(values,{setSubmitting,resetForm})=>{
                setTimeout(()=>{
                    // const [firstName,lastName,email,password,mobile,address,state,pincode,country,salary,dateOfJoining]= [values.fname,values.lname,values.email,values.password,values.mobile,values.address,values.state,values.pincode,values.country,values.salary,values.dateOfJoining];
                    // const personName = fname+ " "+lname
                    // const category = "EP";
                    // const data = {category,firstName,lastName,email,password,mobile,address,state,pincode,country,salary,dateOfJoining}
                    // createPerminentEmployeer(data)
                    // .then(res=>{
                    //     if(res.data.type ==="success"){
                    //         toast.success(res.data.message); 
                    //     } else{
                    //         toast.error(res.data.message);
                    //     }                          
                    //     resetForm();
                    //     setSubmitting(false);                       
                    // })
                    // .catch((error) => console.log(error)) 
                    alert("your data is Updated....") 
                    resetForm();
                    setSubmitting(false); 
                },500);
            }}
            validationSchema = {Yup.object().shape({
                email: Yup.string()
                .email()
                .required("Required"),
                password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum."),
                // .matches(/(?=.*[0-9])/, "Password must contain a number."),
                mobile:Yup.string()
                .required("Required")
                .min(10, "You missed some digits")
                .matches(/([0-9])/, 'Phone number is not valid'),
                salary:Yup.number()
                .required("Required")
                .typeError('you must specify a number')
            })}
            >
                {(props) =>{
                     const {values, touched, errors, isSubmitting, handleChange, handleSubmit} = props;
                    return<>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className='col-md-6'>
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" name="fname" value={values.fname} onChange={handleChange} placeholder="Enter First Name" className="" />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" name="lname" value={values.lname} onChange={handleChange} placeholder="Enter Last Name" className="" />
                                 </div>
                                <div className='col-md-6'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter Email" className={errors.email && touched.email && "error"} />
                                    {
                                        errors.email && touched.email &&  (
                                            <div className="input-feedback">{errors.email}</div>
                                        )
                                    }
                                </div>                                
                                <div className='col-md-6'>
                                    <label htmlFor="password">password</label>
                                    <input type="password" name="password" autoComplete="new-password" value={values.password} onChange={handleChange} placeholder="Enter password" className={errors.password && touched.password && "error"} />
                                        {errors.password && touched.password && (
                                            <div className="input-feedback">{errors.password}</div>
                                        )}
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" value={values.mobile} onChange={handleChange} placeholder="Enter Mobile Number" className={errors.mobile && touched.mobile && "error"}/>
                                    {
                                        errors.mobile && touched.mobile &&  (
                                            <div className="input-feedback">{errors.mobile}</div>
                                        )
                                    }
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name="address" value={values.address} onChange={handleChange} placeholder="Address" className="" />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor="state">State</label>
                                    <input type="text" name="state" value={values.state} onChange={handleChange} placeholder="State" className="" />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor="pincode">Pincode</label>
                                    <input type="number" name="pincode" value={values.pincode} onChange={handleChange} placeholder="Pincode" className="" />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" value={values.country} onChange={handleChange} placeholder="Country" className="" />
                                </div>                                
                                <div className='col-md-6'>
                                    <label htmlFor="dateOfJoining">Date of Joining</label>
                                    <input type="date" name="dateOfJoining" value={values.dateOfJoining} onChange={handleChange} placeholder="date" className="" />
                                </div>
                                <div className='col-md-12'>
                                    <label htmlFor="salary">Salary</label>
                                    <input type="number" name="salary" value={values.salary} onChange={handleChange} placeholder="Salary" className={errors.salary && touched.salary && "error"} />
                                    {
                                        errors.salary && touched.salary &&  (
                                            <div className="input-feedback">{errors.salary}</div>
                                        )
                                    }
                                </div>
                                <div className="col-12 text-right mb-3">
                                    <button className="btn btn-danger mt-2 pt-2 pb-2 pl-4 pr-4" type="submit" disabled={isSubmitting}>Update</button>
                                </div>
                            </div>
                           
                        </form>
                    </>
                }}
            </Formik>
            
        </div>
    </>;
}

export default PerminentEmployeeUpdatePage;