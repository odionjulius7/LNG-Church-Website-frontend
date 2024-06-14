import axios from "axios";

const tk = localStorage.getItem("LMS_token");

let authorizationHeader = {};
if (tk) {
  authorizationHeader = { Authorization: `Bearer ${tk?.token}` };
}

export const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: authorizationHeader,
});
