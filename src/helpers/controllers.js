import axios from "./apiconnects";

// login
export const emailValidation = (data)=>{
    return axios.post("invoice/loginAuth",data).then((res)=>res);
}
// create
export const createStudent = (data)=>{
    return axios.post("invoice/createStudent",data).then((res)=>res);
}
export const createManager = (data)=>{
    return axios.post("invoice/createManager",data).then((res)=>res);
}
export const createPerminentEmployeer = (data)=>{
    return axios.post("invoice/createPerminentEmployeer",data).then((res)=>res);
}
export const creatTemporaryEmployeee = (data)=>{
    return axios.post("invoice/creatTemporaryEmployeee",data).then((res)=>res);
}
// remove
export const RemovePerson = (data)=>{
    return axios.post("invoice/remove",data).then((res)=>res);
}
// Invoice
export const InvoiceData = (data)=>{
    return axios.post("invoice/invoiceData",data).then((res)=>res);
}