import axios from 'axios';

export default axios.create({
    // baseURL: "http://localhost:8000",
    baseURL: "https://invoice-backend-myself-beaware.herokuapp.com/",
    timeout: 10000,
    headers: {"Content-Type":"application/json"},
})