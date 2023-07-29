import axios from "axios";
import React, { useState, useEffect  } from 'react';


export let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOjMsImlhdCI6MTY5MDYzNjU1NCwiZXhwIjoxNjkwNjU4MTU0fQ.Cym1IiT5ii3lmUMjy0ScvwkigP5FsBQqBCmbhM0MBAU'

const api = axios.create({
    baseURL : 'http://192.168.1.11:3000/api/',
   // timeout: 1000,
    headers: {'Authorization': 'Bearer '+token}
    
});


export default api;