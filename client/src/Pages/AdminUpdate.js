import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../Store/auth";
import { toast } from "react-toastify";
import home2Image from "../images/home.jpg";

const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("Successfull Edit");
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Updated Successfully");
      } else {
        toast.error("Not Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      //console.log(`user single data ${data}`);

      setData(data);
      // if (response.ok) {
      //   getAllUserData();
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  return (
    <div>
      <div className="text-4xl flex justify-center font-bold mb-4 underline underline-offset-8 mt-5">
        Update User Data
      </div>
      <div className="flex">
        <div className=" flex-1 p-4">
          <img
            src={home2Image}
            alt="homepage"
            className="w-[500px] rounded-xl h-[400px] mb-10"
          />
        </div>
        <div className="flex-1 p-4 ml-10 flex justify-center ">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-lg font-medium ">UserName</label>
              <br />
              <input
                type="text"
                placeholder="Enter your User Name"
                name="username"
                id="username"
                required
                autoComplete="off"
                value={data?.username}
                onChange={handleInput}
                className="mb-4 mt-2 border-black border-2 rounded-[4px] w-[400px] h-8"
              />
            </div>
            <div>
              <label className="text-lg font-medium ">Email</label>
              <br />
              <input
                type="text"
                placeholder="Enter your Email "
                name="email"
                id="email"
                required
                autoComplete="off"
                value={data?.email}
                onChange={handleInput}
                className="mb-4 mt-2 border-black border-2 rounded-[4px] w-[400px] h-8"
              />
            </div>
            <div>
              <label className="text-lg font-medium ">Phone</label>
              <br />
              <input
                type="phone"
                placeholder="Enter your phone "
                name="phone"
                id="phone"
                required
                autoComplete="off"
                value={data?.phone}
                onChange={handleInput}
                className="mb-4 mt-2 border-black border-2 rounded-[4px] w-[400px] h-8"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdate;
