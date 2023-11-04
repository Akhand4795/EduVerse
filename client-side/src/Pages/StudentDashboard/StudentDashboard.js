import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Profile from "./Profile/Profile";

const StudentDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default StudentDashboard;
