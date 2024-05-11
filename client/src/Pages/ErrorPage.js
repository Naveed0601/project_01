import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const ErrorPage = () => {
  return (
    <div className="animate-gradient-background">
      <div className="flex justify-center items-center ">
        <div className="w-[750px] h-[450px] bg-white rounded-lg mt-10 mb-4">
          <h1 className="flex items-center justify-center text-[150px] font-four text-purple-600 ">
            404
          </h1>
          <h2 className="flex justify-center items-center text-4xl font-abc font-bold ">
            Sorry! Page not found
          </h2>
          <p className="text-xl mt-4 ml-9 font-abc font-medium">
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
          <div className="flex justify-center items-center mt-4">
            <Link to="/" element={<Home />}>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg h-12 text-white font-bold pl-2 pr-2 font-abc mr-2 ml-5">
                Return Home
              </button>
            </Link>
            <Link to="/contact" element={<Contact />}>
              <button className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-yellow-500 hover:to-orange-500 rounded-lg h-12 text-white font-bold pl-2 pr-2 font-abc ml-2">
                Report Problem
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
