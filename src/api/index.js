import axios from 'axios';

const HttpRequestHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
}

const Axios = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/',
    headers: HttpRequestHeaders
})


export default Axios;