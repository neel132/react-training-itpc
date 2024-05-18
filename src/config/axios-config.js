import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummy.restapiexample.com/api/v1/',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default axiosInstance;