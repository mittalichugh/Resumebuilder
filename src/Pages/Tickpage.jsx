import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tickpage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
       <header className="flex justify-between items-center px-10 py-5 shadow-md bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="text-2xl font-extrabold text-black tracking-wide leading-tight">
          <span className="text-indigo-600">RB</span><br /> Resume Builder
        </div>
        </header>

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        {/* Tick icon */}
        <div className="bg-green-100 rounded-full p-6 shadow-lg mb-6">
          <button
            type="button"
            onClick={() => navigate('/Createpassword')}
          >
            <img
              src="/images/tick2.png"
              alt="Success"
              className="w-25 h-20"
            />
          </button>
        </div>

        {/* Message */}
        <p className="text-gray-700 text-sm max-w-md">
          We emailed a reset link to you. Please click on the link to reset your password.
        </p>
      </div>
    </div>
  );
};

export default Tickpage;
