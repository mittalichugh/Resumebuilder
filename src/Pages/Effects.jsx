import React from "react";
import { useNavigate } from "react-router-dom";
import { useResumeStore } from "../store/resumeStore";
import ResumePreview from "./ResumePreview"; // ✅ make sure you have this preview component
const Effects = () => {
  const { template, setTemplate } = useResumeStore();
  const navigate = useNavigate();
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
            onClick={() => navigate("/  About")}
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
      <main className="flex flex-col items-center justify-center py-10 space-y-8">
        <ResumePreview />
        <div className="flex flex-col items-start space-y-2">
          <label className="font-medium text-gray-700">Font Size</label>
          <input
            type="range"
            min="12"
            max="30"
            value={parseInt(template.fontSize)}
            onChange={(e) => setTemplate({ fontSize: `${e.target.value}px` })}
          />
          <span className="text-gray-600">{template.fontSize}</span>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <label className="font-medium text-gray-700">Font Style</label>
          <select
            value={template.fontStyle}
            onChange={(e) => setTemplate({ fontStyle: e.target.value })}
            className="border rounded-md px-3 py-2"
          >
            <option value="normal">Normal</option>
            <option value="italic">Italic</option>
          </select>
        </div>
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
export default Effects;
