import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Authentication/Login/Login";
import TermConditions from "./Pages/Term&Conditions/TermConditions";
import Privacy from "./Pages/Term&Conditions/Privacy";
import Footer from "./Components/Footer/Footer";
import StudentDashboard from "./Pages/StudentDashboard/Student";
import Profile from "./Pages/StudentDashboard/Profile";
const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Student" element={<StudentDashboard />}>
          <Route path="profile" element={<Profile />} />
          {/* Define other nested routes here */}
        </Route>
        <Route path="/SignUp" Component={SignUp} />
        <Route path="/Login" Component={Login} />
        <Route path="/termConsitions" Component={TermConditions} />
        <Route path="/privacy" Component={Privacy} />
      </Routes>

    </div>
  );
};

export default App;
