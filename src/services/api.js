import axios from 'axios';

const api = axios.create({ baseURL: 'https://bie-site-backend.herokuapp.com/api' })

export default api;