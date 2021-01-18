import axios from 'axios';

const api = axios.create({
    baseURL: 'https://happy.jonatasosilva.dev/api'
});

export default api;