import React from "react";
import { useNavigate } from "react-router-dom";

const Successfull = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
     <header className="flex justify-between items-center px-10 py-5 shadow-md bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="text-2xl font-extrabold text-black tracking-wide leading-tight">
          <span className="text-indigo-600">RB</span><br /> Resume Builder
        </div>
        </header>

      {/* Center Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        {/* Success Icon */}
        <div className="bg-green-100 rounded-full p-6 shadow-lg mb-6 flex items-center justify-center">
          <img
            src="/images/tick2.png"
            alt="Success"
            className="w-20 h-20"
          />
        </div>

        {/* Message */}
        <p className="text-gray-700 text-sm max-w-md">
          Your account has been created successfully.
        </p>

        {/* Done Button */}
        <button
          className="mt-6 w-40 bg-black text-white py-3 rounded hover:bg-gray-700 transition duration-200"
          type="button"
          onClick={() => navigate("/Home")}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Successfull;
