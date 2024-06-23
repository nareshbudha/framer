import axios from "axios";

const BASE_URL = "http://birendranagar-farmer-backend.test/api";


export const authorized = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });