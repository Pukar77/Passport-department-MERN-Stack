import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Secondnavbar from "../navbar/Secondnavbar";
import { useNavigate } from "react-router";

function Admin() {
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const hanldesubmit = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const display = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:8000/api/user/adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formdata.username,
          password: formdata.password,
        }),
      });

      let data1 = await response.json();
      console.log(data1);

      if (data1.status) {
        alert(data1.message);

        navigate("/adminhome");
      } else {
        alert("Invalid Username or password");
      }
    } catch (e) {
      console.log("TORI ATUL", e);
    }
  };

  return (
    <div>
      <Navbar />
      <Secondnavbar />

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Welcome Admin
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            This page is only for staff having access to the website. This page
            is not for general citizens. Thank you
          </p>

          <form
            onSubmit={display}
            action="#"
            className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Login in to your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Username
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter Username"
                  value={formdata.username}
                  onChange={hanldesubmit}
                  name="username"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter password"
                  value={formdata.password}
                  onChange={hanldesubmit}
                  name="password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white cursor-pointer"
            >
              Log in
            </button>

            <p className="text-center text-sm text-gray-500">
              <a className="underline" href="#">
                Change Password?
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
