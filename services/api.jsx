import axios from "axios";


export let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOjMsImlhdCI6MTY5MzI2OTMxNSwiZXhwIjoxNjkzMjkwOTE1fQ.BnhyHb4_Z_vT0jy5O3EWMFb_ac3R3u_7Gx54FbIwA_8'

const api = axios.create({
    baseURL : 'http://192.168.1.11:3000/api/',
   // timeout: 1000,
    headers: {'Authorization': 'Bearer '+token}
    
});


export default api;