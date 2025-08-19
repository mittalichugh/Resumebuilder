import React from "react";
import { useNavigate } from "react-router-dom";
const Joinus = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="flex justify-between items-center px-10 py-5 shadow-md bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="text-2xl font-extrabold text-black tracking-wide leading-tight">
          <span className="text-indigo-600">RB</span>
          <br /> Resume Builder
        </div>
        <nav className="hidden md:flex space-x-8">
          <button
            className="text-gray-800 hover:text-indigo-600 font-medium transition"
            onClick={() => navigate("/Home")}
          >
            Home
          </button>
          <button
            className="text-gray-800 hover:text-indigo-600 font-medium transition"
            onClick={() => navigate("/Templatecolors")}
          >
            Template Colors
          </button>
          <button
            className="text-gray-800 hover:text-indigo-600 font-medium transition"
            onClick={() => navigate("/About")}
          >
            About
          </button>
        </nav>
        <button
          onClick={() => navigate("/Register")}
          className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 shadow-md transition"
        >
          Get Started
        </button>
      </header>
      <section className="flex flex-col items-center text-center px-6 py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Resume Builder Today 
        </h1>
        <p className="max-w-2xl text-lg mb-6">
          Build a stunning resume effortlessly, customize templates, and share
          with a single click. Join our community and take your career to new heights.
        </p>
        <button
          onClick={() => navigate("/Register")}
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Get Started for Free
        </button>
      </section>
      <section className="px-8 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why Join Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Professional Templates
            </h3>
            <p className="text-gray-600">
              Choose from a wide range of elegant, ATS-friendly templates to
              impress recruiters instantly.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Easy Customization
            </h3>
            <p className="text-gray-600">
              Edit and update your resume anytime with our simple drag-and-drop
              tools.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Instant Sharing
            </h3>
            <p className="text-gray-600">
              Download in multiple formats or share directly with hiring managers.
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-400 py-8 px-10 mt-auto">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div className="text-white font-bold text-lg">
            RB <br />
            <span className="font-normal text-gray-400">Resume Builder</span>
          </div>
          <div className="space-x-6">
            <a href="#" className="hover:text-white transition">Our Story</a>
            <a href="#" className="hover:text-white transition">Services</a>
            <a href="#" className="hover:text-white transition">Terms of Use</a>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-500 text-center">
          @ Resume Builder 2025
        </div>
      </footer>
    </div>
  );
};
export default Joinus;
