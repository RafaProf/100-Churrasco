import axios from "axios";
import React, { useState, useEffect  } from 'react';


export let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOjMsImlhdCI6MTY5MDY1OTY0NiwiZXhwIjoxNjkwNjgxMjQ2fQ._Y4GIYXjlJS5UqjD1d9-CTvTaw658g1PkBoeRo5413s'

const api = axios.create({
    baseURL : 'http://192.168.1.81:3000/api/',
   // timeout: 1000,
    headers: {'Authorization': 'Bearer '+token}
    
});


export default api;