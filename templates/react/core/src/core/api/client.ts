import axios from "axios";

/**
 * BRS API CLIENT
 * Backend hazır değilse bile çalışır
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  timeout: 10000,
});