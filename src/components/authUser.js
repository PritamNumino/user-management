import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthUser = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState();

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    return tokenString;
  };

  const saveToken = (token) => {
    sessionStorage.setItem("token", token);
    setToken(token);
    navigate("/home");
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const http = axios.create({
    baseURL: "http://localhost:9000/approvaldb/api/idm/",
    headers: {
      "tenant-id": "123",
      "NUMINO-API-VERSION": "",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return {
    setToken: saveToken,
    token,
    getToken,
    http,
    logout,
  };
};

export default AuthUser;
