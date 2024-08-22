import axios from "axios";
import baseURL from "./baseUrl";

export default axios.create({
  baseURL: baseURL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    charset: "utf-8",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    withCredentials: true,
  },
});
