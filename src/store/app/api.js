import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:9000/v1/",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
})