import React from 'react'
import { useNavigate } from 'react-router-dom';
const Johndoecv = () => {
      const navigate = useNavigate();
  return (
     <div className="font-sans">
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
    </div>
  )
}
export default Johndoecv;