import React from "react";
import { auth } from "./firebase";
import Login from "./Login";

function ProtectedRoute({ children }) {
  return auth.currentUser ? children : <Login />;
}

export default ProtectedRoute;