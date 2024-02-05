import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../General/Navbar";
import Header from "../General/Header";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { Email, Password };
    console.log(user);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Allow-Cross-Origin": "*",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          swal({
            title: "Error",
            text: res.error,
            icon: "error",
            button: "ok",
          });
        } else {
          localStorage.setItem("token", res.token);
          localStorage.setItem("type", res.users);
          localStorage.setItem("id", res.id);
          swal({
            title: "Success",
            text: res.message,
            icon: "success",
            button: "ok",
          }).then((responce) => {
            if (res.type === "admin") {
              navigate("/admin");
            }
            if (res.type === "user") {
              navigate("/user");
            }
          });
        }
      });
    e.target.reset();
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="container mx-auto mt-12">
        <h2 className="text-center text-dark text-2xl font-bold mb-6">
          Login Form
        </h2>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="col-md-4 mx-auto"
        >
          <div className="mb-4 ">
            <label htmlFor="uname" className="form-label">
              Username
            </label>
            <input
              type="email"
              placeholder="Enter Username"
              name="uname"
              required
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="psw" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            <Link to="/Login" className="text-white text-decoration-none">
              Login
            </Link>
          </button>

          <div className="container signin my-2">
            <p>
              Don't have an account?
              <Link to="/Register" className="ml-2 text-success pl-2">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
