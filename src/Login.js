import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(() => {
        alert("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(() => {
        alert("Account Created Successfully");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eaeded"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          width: "350px"
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Amazon Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px"
          }}
        />

        <button
          onClick={signIn}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "10px",
            background: "#ffd814",
            border: "none",
            cursor: "pointer"
          }}
        >
          Sign In
        </button>

        <button
          onClick={register}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            background: "#232f3e",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;