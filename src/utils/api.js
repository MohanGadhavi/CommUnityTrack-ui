import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/v1", // Backend base URL
  withCredentials: true, // Include cookies in requests
});

export default api;
