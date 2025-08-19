import React from "react";
import { useNavigate } from "react-router-dom";

const Shareresume = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
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
          Download 
        </button>
      </header>

      {/* Main Content */}
      <main className="flex justify-center py-10">
        <div className="bg-white shadow rounded-lg flex w-11/12 max-w-6xl">
          {/* Left Section */}
          <div className="w-1/2 p-10 border-r flex flex-col justify-center items-start">
            <h1 className="text-3xl font-bold mb-4">
              Congratulations<span className="text-blue-500">!</span>
            </h1>
            <p className="text-gray-600 mb-6">
              Your resume is awesome and ready for download. Get it in any
              format of your choice.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-300">
              Download
            </button>
          </div>

          {/* Right Section */}
          <div className="w-1/2 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-500 text-sm">Preview</h2>
              <button className="text-blue-500 text-sm hover:underline"  onClick={() => navigate('/Mainpage')} >
                Edit
              </button>
            </div>

            {/* Resume Card */}
            <div className="bg-white shadow p-6 rounded border">
              {/* Name & Contact */}
              <h1 className="text-xl font-bold">Jane Doe</h1>
              <p className="text-gray-500 text-sm mb-2">
                +123 456 7890 | jane.doe@gmail.com
              </p>
              <p className="text-gray-500 text-sm mb-4">123 Street, City</p>

              {/* Bio */}
              <h2 className="text-sm font-semibold text-gray-700">Bio</h2>
              <p className="text-gray-500 text-sm mb-4">
                A passionate software engineer with a knack for problem-solving
                and clean code.
              </p>

              {/* Skills & Work History */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-sm font-semibold text-gray-700 mb-2">
                    Technical Skills
                  </h2>
                  <ul className="text-gray-500 text-sm list-disc pl-4 space-y-1">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-gray-700 mb-2">
                    Work History
                  </h2>
                  <p className="text-gray-500 text-sm">
                    <strong>Frontend Developer</strong> - ABC Corp (2020–2023)
                    <br />
                    Built and maintained web applications with React and
                    TailwindCSS.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="mt-4">
                <h2 className="text-sm font-semibold text-gray-700 mb-2">
                  Education
                </h2>
                <p className="text-gray-500 text-sm">
                  B.Sc in Computer Science <br />
                  National Open University <br />
                  2015 – 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-gray-400 py-8 px-10">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div className="text-white font-bold text-lg">RB <br /><span className="font-normal text-gray-400">Resume Builder</span></div>
          <div className="space-x-6">
            <a href="#" className="hover:text-white transition">Our Story</a>
            <a href="#" className="hover:text-white transition">Services</a>
            <a href="#" className="hover:text-white transition">Terms of Use</a>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-500 text-center">@ Resume Builder 2025</div>
      </footer>

    </div>
  );
};

export default Shareresume;
