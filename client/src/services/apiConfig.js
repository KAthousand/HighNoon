import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://high-noon.herokuapp.com/"
    : "http://localhost:3000";

// put a ternary for production

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
