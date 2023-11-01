import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Authentication/Login/Login";
import TermConditions from "./Pages/Term&Conditions/TermConditions";
import Privacy from "./Pages/Term&Conditions/Privacy";
import Blog from "./Pages/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import StudentDashboard from "./Pages/StudentDashboard/StudentDashboard";
import Profile from "./Pages/StudentDashboard/Profile";
import Dashboard from "./Pages/StudentDashboard/Dashboard/Dashboard";
import VideoCourses from "./Pages/StudentDashboard/VideoCourses/VideoCourses";
const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signUp" Component={SignUp} />
        <Route path="/login" Component={Login} />
        <Route path="/Student" Component={StudentDashboard}>
          <Route path="/Student/profile" Component={Profile} />
          <Route path="/Student" Component={Dashboard} />
          <Route path="/Student/videoCourse" Component={VideoCourses} />
        </Route>
        <Route path="/termConsitions" Component={TermConditions} />
        <Route path="/privacy" Component={Privacy} />
        <Route path="/blog" Component={Blog} />
      </Routes>
    </div>
  );
};

export default App;
