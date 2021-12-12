import axios from 'axios';

export const API_REQUEST = axios.create({
  baseURL: 'http://localhost:8083/api',
});