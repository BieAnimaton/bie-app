import axios from 'axios';

const api = axios.create({ baseURL: 'http://192.168.15.10:5656/api' })

export default api;