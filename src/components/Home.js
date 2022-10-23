import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Web development is the building and maintenance of websites; it's
            the work that happens behind the scenes to make a website look
            great, work fast and perform well with a seamless user experience.
            Web developers, or 'devs', do this by using a variety of coding
            languages.
          </p>
          <Link to="/Courses">
            <button className="btn btn-outline text-white btn-wide">
              Get Free Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
