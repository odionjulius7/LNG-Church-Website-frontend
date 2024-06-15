"use client";
import axios from "axios";

const tk = localStorage.getItem("LMS_token");
// const tk = typeof window !== "undefined" ? localStorage.getItem("LMS_token") : null;

let authorizationHeader = {};
if (tk) {
  authorizationHeader = { Authorization: `Bearer ${tk?.token}` };
}

export const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: authorizationHeader,
});
