import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../images/home1.jpg";

const About = () => {
  return (
    <div className="w-full h-screen ">
      <div className="flex grid-cols-2">
        <div className="ml-6">
          <div className="mt-20 ml-2 mr-4">
            <div className="text-6xl flex justify-start font-bold mb-10 ">
              Why choose us?
            </div>
            <p className="font-slab ml-2 mb-10 text-lg">
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </p>
            <p className="font-slab ml-2 mb-10 text-lg">
              Customization: We understand that every business is unique. Thats
              why we create solutions that are tailored to your specific needs
              and goals.
            </p>
            <p className="font-slab ml-2 mb-10 text-lg">
              Customer-Centric Approach: We prioritize your satisfaction and
              provide top-notch support to address your IT concerns.
            </p>
            <p className="font-slab ml-2 mb-10 text-lg">
              Reliability: Count on us to be there when you need us. We're
              committed to ensuring your IT environment is reliable and
              available 24/7
            </p>
          </div>
          <div className="ml-3 ">
            {/*Group of Buttons */}
            <Link to="/Login">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Connect Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mr-10">
          {/*Home page img */}
          <img
            src={homeImage}
            alt="homepage"
            className="w-[800px] rounded-xl h-[400px]"
          />
        </div>
      </div>
      <div className=" grid-col-4 flex items-center justify-evenly mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl w-11/12 ml-10 text-white h-20 font-bold ">
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
      <br />
    </div>
  );
};

export default About;
