import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummy.restapiexample.com/api/v1/',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

axiosInstance.interceptors.request.use((config) => {
    const token = 'jwtToken';
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})

axiosInstance.interceptors.response.use((config) => {
    // perform 
    return config;
});

export default axiosInstance;