import React, { useState } from "react";
import home2Image from "../images/home.jpg";
import { useAuth } from "../Store/auth";

const defaultcontactfrom = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const { userget } = useAuth();
  // console.log(userget);
  const [user, setUser] = useState(defaultcontactfrom);

  const [userData, setUserData] = useState(true);

  // useEffect(() => {
  //   setUser({
  //     username: userget?.username || "",
  //     email: userget?.email || "",
  //     message: "",
  //   });
  // }, [userget]);

  if (userData && userget) {
    setUser({
      username: userget.username,
      email: userget.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setUser(defaultcontactfrom);
        const data = await response.json();
        console.log(data);
        alert("Message send successfully");
      }
    } catch (error) {
      alert("Message not send");
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div>
        <div className="text-4xl flex justify-start font-bold mb-4 underline underline-offset-8">
          Contact Us
        </div>
        <div className="flex">
          <div className=" flex-1 p-4">
            {/*Home page img */}
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
                  value={user?.username}
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
                  value={user?.email}
                  onChange={handleInput}
                  className="mb-4 mt-2 border-black border-2 rounded-[4px] w-[400px] h-8"
                />
              </div>
              <div>
                <label className="text-lg font-medium ">Message</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Message "
                  name="message"
                  id="message"
                  required
                  autoComplete="off"
                  value={user?.message}
                  onChange={handleInput}
                  className="mb-4 mt-2 border-black border-2 rounded-[4px] w-[400px] h-8"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
