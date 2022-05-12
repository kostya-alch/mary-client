import { API_URL } from '@/config/api.config';
import axios from 'axios';

export const instanceAxios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
