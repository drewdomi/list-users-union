import axios, { AxiosInstance } from "axios";

const url = "https://randomuser.me/api";

const api: AxiosInstance = axios.create({
  baseURL: url,
});

export default api;