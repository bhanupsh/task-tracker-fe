import axios from "axios";

const BASE_URL = "https://task-tracker-3zql.onrender.com";

// Axios instance
export const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" }
});

// Fetch helper
export const fetchAPI = async (url, options = {}) => {
  const res = await fetch(BASE_URL + url, {
    headers: { "Content-Type": "application/json" },
    ...options
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "API Error");

  return data;
};
 