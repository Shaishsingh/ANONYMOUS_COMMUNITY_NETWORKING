import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import App from "./App";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* HOME / DASHBOARD */}
      <Route path="/app" element={<App />} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
