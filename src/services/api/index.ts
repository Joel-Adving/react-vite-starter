import axios from 'axios';
import ApiController from './apiController';
import { env } from '@/utils/env';

const axiosInstance = axios.create({
  baseURL: env.PROD ? env.BASE_URL + 'api' : env.VITE_DEV_API_URL,
});

export const api = new ApiController(axiosInstance);
