import React from "react";
import img1 from "../images/register.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // handling the form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log(res_data);
      if (response.ok) {
        storeTokenInLS(res_data.token);

        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Registraion Successfull");
        navigate("/Login");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
      // console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div className=" flex justify-center items-center w-full h-screen">
      <div className="flex ">
        <div className="flex-1 bg-gray-200 p-4 rounded-s-xl">
          <img
            className="w-[500px] h-[400px] rounded-xl mt-5"
            src={img1}
            alt="Registration"
          />
        </div>
        <div className="flex-1 bg-gray-200 p-4 rounded-e-xl">
          <h1 className="font-bold mb-3 flex justify-center items-center font-slab text-2xl">
            Registration Form
          </h1>
          <div>
            <br />
            <form onSubmit={handleSubmit} className="flex flex-col items-start">
              <div className="flex flex-col">
                <label className="font-slab">User Name : </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                  className="mb-4 mt-2 border-black border-2 rounded-[4px] w-[350px] h-8 pl-2"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-slab">Email: </label>

                <input
                  type="text"
                  placeholder="Enter your Email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  className="mb-4 mt-2 border-black border-2 rounded-[4px] w-[350px] h-8 pl-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-slab">Phone Number: </label>

                <input
                  type="text"
                  placeholder="Enter your Phone Number"
                  name="phone"
                  id="phone"
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInput}
                  className="mb-4 mt-2 border-black border-2 rounded-[4px] w-[350px] h-8 pl-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-slab">Password: </label>

                <input
                  type="text"
                  placeholder="Enter your Password"
                  name="password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                  className="mb-4 mt-2 border-black border-2 rounded-[4px] w-[350px] h-8 pl-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
