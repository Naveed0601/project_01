import React from "react";
import { useState } from "react";
import img1 from "../images/register.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Store/auth";
import { toast } from "react-toastify";

const Login = () => {
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
    // console.log(user);

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();

      // console.log(response);
      if (response.ok) {
        alert("Login Successful");
        console.log(res_data);
        console.log("Receive Token", res_data.token);
        storeTokenInLS(res_data.token);
        //  localStorage.setItem("auth", JSON.stringify(res_data?.userExits));
        setUser({ email: "", password: "" });
        toast.success("Login Successfull");
        navigate("/");
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
      <div>
        <div className="flex">
          <div className="flex-1 bg-gray-200 p-4 rounded-s-xl ">
            <img
              className="w-[500px] h-[400px] rounded-xl"
              src={img1}
              alt="Login"
            />
          </div>
          <div className="flex-1 bg-gray-200 p-4 rounded-e-xl">
            <h1 className="font-bold mb-3 flex justify-center items-center font-slab text-2xl">
              Login
            </h1>
            <br />
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="font-slab">Email : </label>
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
                <label className="flex flex-col">Password: </label>
                <input
                  type="password"
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
              <br />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
