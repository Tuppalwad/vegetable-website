import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../General/Navbar";
import Header from "../General/Header";

const Register = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Type, setType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { Email, Password, Type };
    console.log(user);
    fetch("http://localhost:3000/register", {
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
          swal({
            title: "Success",
            text: res.message,
            icon: "success",
            button: "ok",
          }).then((response) => {
            navigate("/login");
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
        <h2 className="text-center text-green-600 text-2xl font-bold mb-6">
          Registration Form
        </h2>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="col-md-4 mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
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

          <div className="mb-4 d-flex flex-row">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <div className="form-check  " style={{ marginLeft: "5px" }}>
              <input
                className="form-check-input"
                type="radio"
                name="type"
                value="user"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="form-check-label">User</label>
            </div>
            <div className="form-check " style={{ marginLeft: "5px" }}>
              <input
                className="form-check-input"
                type="radio"
                name="type"
                value="admin"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="form-check-label">Admin</label>
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100">
            <Link to="/Register" className="text-white text-decoration-none">
              Register
            </Link>
          </button>

          <div className="container signin my-2">
            <p>
              Already have an account?
              <Link to="/login" className="ml-2 text-success">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
