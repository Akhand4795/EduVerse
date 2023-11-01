import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Authentication/Login/Login";
import TermConditions from "./Pages/Term&Conditions/TermConditions";
import Privacy from "./Pages/Term&Conditions/Privacy";
import Blog from "./Pages/Blog/Blog";
const App = () => {
  return (

    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signUp" Component={SignUp} />
        <Route path="/login" Component={Login} />
        <Route path="/termConsitions" Component={TermConditions} />
        <Route path="/privacy" Component={Privacy} />
        <Route path="/blog" Component={Blog} />
      </Routes>
    </div>
  );
};

export default App;
