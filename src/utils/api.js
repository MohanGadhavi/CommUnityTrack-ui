import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/v1", // Backend base URL
  withCredentials: true, // Include cookies in requests
});

// Add an interceptor to include the token in every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
