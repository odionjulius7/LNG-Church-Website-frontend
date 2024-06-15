"use client";
import axios from "axios";
import Cookies from "js-cookie";

// const tk = localStorage.getItem("LMS_token");
// const tk = typeof window !== "undefined" ? localStorage.getItem("LMS_token") : null;

const tk = Cookies.get("Bearer");

let authorizationHeader = {};
if (tk) {
  authorizationHeader = { Authorization: `Bearer ${tk?.token}` };
}

export const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: authorizationHeader,
});
