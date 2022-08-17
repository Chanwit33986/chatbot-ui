import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Users from "../Pages/Users";
import Groups from "../Pages/Groups";
import RequireAuth from "../Stores/Authen";

export default function Layout() {
  return (
    <Routes>
      <Route
        element={
          <RequireAuth>
            <App />
          </RequireAuth>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/groups" element={<Groups />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
