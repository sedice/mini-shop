import axios from 'axios';
import { getItem } from '@/utils';

const request = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
});

// 请求拦截器
request.interceptors.request.use((_config) => {
  const config = _config;
  const token = getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},
(err) => Promise.reject(err));

// 响应拦截器
request.interceptors.response.use((_response) => {
  const response = _response;
  const { data = {} } = response;
  return data;
},
(_err) => {
  const err = _err || {};
  if (err && err.response) {
    if (err.response.data && err.response.data.message) {
      err.message = err.response.data.message;
    } else if (err.response.statusText) {
      err.message = err.response.statusText;
    }
  }
  if (!err.message) {
    err.message = '未知错误';
  }
  return Promise.reject(err);
});

export default request;
