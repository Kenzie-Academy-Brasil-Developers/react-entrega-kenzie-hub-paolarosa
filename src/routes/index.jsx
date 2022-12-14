import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
  });

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    );
  }
};
