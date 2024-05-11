import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../images/home1.jpg";
import home2Image from "../images/home.jpg";
const Home = () => {
  return (
    <div className="w-full h-screen">
      {/* Section one */}
      <div className="flex grid-cols-2 mt-10">
        <div className="ml-8">
          <div className="mt-20 ml-2 mr-4">
            <p className="mb-4 font-semibold text-xl">
              We are the World Best IT Company
            </p>
            <h1 className="mb-4 font-extrabold text-5xl">
              Welcome to MidNight
            </h1>
            <p className="mb-4 font-medium">
              Are you ready to take your business to the next level with
              cutting-edge IT Solution? Look no further! At MidNight, we
              specialize in providing innovation IT servies and Solutions
              tailored to meet your unique needs.
            </p>
          </div>
          <br />
          <div>
            {/*Group of Buttons */}
            <Link to="/Login">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Login
              </button>
            </Link>
            <Link to="/About">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                About Us
              </button>
            </Link>
          </div>
        </div>
        <div className="mr-10">
          {/*Home page img */}
          <img
            src={homeImage}
            alt="homepage"
            className="w-[800px] rounded-xl h-[400px]"
          />
        </div>
      </div>
      {/*Section two */}
      <div className="grid-col-4 flex items-center justify-evenly mt-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl w-11/12 ml-10 text-white h-20 font-bold ">
        <div className="border-r pr-4 text-xl">
          <h2>50+</h2>
          <p>Register Companies</p>
        </div>
        <div className="border-r pr-4 text-xl">
          <h2>100,00+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="border-r pr-4 text-xl">
          <h2>500+</h2>
          <p>Well Know Developers</p>
        </div>
        <div className="text-xl">
          <h2>24/7</h2>
          <p>Services</p>
        </div>
      </div>
      {/*Section three */}
      <div className="flex grid-cols-2 mt-10">
        <div className="ml-10">
          {/*Home page img */}
          <img
            src={home2Image}
            alt="homepage"
            className="w-[800px] rounded-xl h-[400px] mb-10"
          />
        </div>
        <div className="ml-8">
          <div className="mt-10 ml-2 mr-4">
            <p className="mb-4 font-semibold text-xl">
              We are here to help you
            </p>
            <h1 className="mb-4 font-extrabold text-5xl">Get Started Today</h1>
            <p className="mb-4 font-medium">
              Ready to take the first step towards a more efficent and secure IT
              infrastructure? Contact us today for a free consultation and let's
              discuss how MidNight can help your business thrive in the digital
              age.
            </p>
          </div>
          <br />
          <div>
            {/*Group of Buttons */}
            <Link to="/Contact">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Connect With Us
              </button>
            </Link>
            <Link to="/About">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
