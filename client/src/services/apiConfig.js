import axios from "axios";

const baseURL = "http://localhost:3000";

// put a ternary for production

const api = axios.create({
  baseURL: baseURL,
});

export default api;
