import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const StudentDashboard = () => {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default StudentDashboard;
