import axios from 'axios';
import { getLocalStorage } from './config/Storage';

export const api = axios.create({
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  baseURL: 'http://backend.test.usenobi.com:8000',
});

if (__DEV__) {
  api.interceptors.request.use(request => {
    console.log('>>> Request', request);
    return request;
  });

  api.interceptors.response.use(
    response => {
      console.log('<<< Response:', response);
      return response;
    },
    error => {
      console.log('*** ', error);
      return Promise.reject(error);
    },
  );
}

export const login = (sendData) => {
  return api.post('/login', sendData);
};

export const dashboard = async () => {
  const dataLocal = await getLocalStorage()
  const sendData = {
    token: dataLocal !== null ? dataLocal.token : '',
  }
  return api.post('/dashboard', sendData);
};

export const getList = () => {
  return api.get('/list');
};