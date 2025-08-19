import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Coverletter = () => {
  const navigate = useNavigate();
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("downloadedResumes")) || [];
    setResumes(saved);
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
      <main className="flex-grow px-10 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Downloaded Resumes
        </h1>
        {resumes.length > 0 ? (
          <ul className="space-y-4">
            {resumes.map((resume, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow p-4 rounded"
              >
                <span>{resume.name}</span>
                <div className="flex gap-4">
                  <a
                    href={resume.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                  <a
                    href={resume.url}
                    download={resume.name}
                    className="text-green-600 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No resumes downloaded yet.</p>
        )}
      </main>
      <footer className="bg-gray-900 text-gray-400 py-8 px-10">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div className="text-white font-bold text-lg">
            RB <br />
            <span className="font-normal text-gray-400">Resume Builder</span>
          </div>
          <div className="space-x-6">
            <a href="#" className="hover:text-white transition">
              Our Story
            </a>
            <a href="#" className="hover:text-white transition">
              Services
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Use
            </a>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-500 text-center">
          @ Resume Builder 2025
        </div>
      </footer>
    </div>
  );
};
export default Coverletter;
