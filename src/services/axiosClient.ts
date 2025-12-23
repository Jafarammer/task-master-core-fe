import axios, { AxiosInstance } from "axios";

let api: AxiosInstance | null = null;
let token: string | null = null;

export const initApiClient = (baseURL: string) => {
  api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return api;
};

export const setToken = (newToken: string | null) => {
  token = newToken;
};

export const getApi = () => {
  if (!api) {
    throw new Error(
      "API client not initialized. Call initApiClient(baseURL) first."
    );
  }

  return api;
};
