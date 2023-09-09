import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { getEnvVar } from "../config";
export const API_URL = getEnvVar("VITE_APP_API_URL");

const axiosInstance = axios.create({
	baseURL: API_URL,
});

// Request interceptors
axiosInstance.interceptors.request.use(
	(config: AxiosRequestConfig): AxiosRequestConfig => {
		// do something
		return config;
	},
	(error: any) => {
		Promise.reject(error);
	}
);

// Response interceptors
axiosInstance.interceptors.response.use(
	async (response: AxiosResponse) => {
		// do something
		return response.data;
	},
	(error: any) => {
		// do something
		return Promise.reject(error);
	}
);

export default axiosInstance;
