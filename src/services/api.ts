import axios, { AxiosInstance } from "axios";

const url = "https://randomuser.me/api/?nat=us,br&exc=gender,location,registered&page=1&results=10&seed=de68d2afd5c8563e";

const api: AxiosInstance = axios.create({
  baseURL: url,
});

export default api;