import axios from 'axios';
import { getTelegramWebApp } from '@/utils/telegram';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const webApp = getTelegramWebApp();
  if (webApp?.initData) {
    config.headers['X-Telegram-Init-Data'] = webApp.initData;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
