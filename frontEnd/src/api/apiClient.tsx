import axios from 'axios';

axios.defaults.withCredentials = true;

export const productGen = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export const productSearch = axios.create({
  baseURL: 'http://localhost:3002',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': "Bearer " + process.env.NEXT_PUBLIC_STATIC_API_KEY
  },
  withCredentials: true
});