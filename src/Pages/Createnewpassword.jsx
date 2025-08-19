import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Createnewpassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    navigate('/Successfull');
  };
  return (
    <div className="min-h-screen flex">
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/bg2.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 min-h-64 bg-white/10 backdrop-blur-md text-gray-200 text-center px-12 py-16 rounded-2xl shadow-2xl border border-white/20">
            <div className="text-6xl font-extrabold text-indigo-400 mb-4 tracking-wider">RB</div>
            <div className="text-xl tracking-widest font-semibold">Resume Builder</div>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Build, customize, and download your dream resume in minutes.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">
              Create Password
            </h2>
            <p className="text-gray-700 text-sm">
              Please create a password for your account.
            </p>
          </div>
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
          />
          <br></br>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
          />
          <br></br>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 shadow-md transition font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Createnewpassword;
