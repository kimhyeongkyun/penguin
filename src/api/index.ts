import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: { "content-type": "application/json" },
});

export default api;
