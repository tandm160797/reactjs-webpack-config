import axios from 'axios';

const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDY0YWE3NGU3MTUyNDZiMzk2NjYwOCIsImlhdCI6MTYxMzY0NDk2MCwiZXhwIjoxNjEzNzMxMzYwfQ.7ZFJ-pRvWSV2NANW-WaDghHvPLvsqS9p0OMZ4vTqNxY';
const baseURL = 'https://express-api-learn.herokuapp.com/';

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
