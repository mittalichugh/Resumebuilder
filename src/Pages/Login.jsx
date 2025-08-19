import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex font-sans">  
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

      <div className="w-1/2 flex items-center justify-center p-8 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg">
          <div className="flex justify-between mb-6 border-b border-gray-200">
            <button
              className="text-gray-500 hover:text-indigo-600 transition"
              onClick={() => navigate('/Register')}
            >
              Register
            </button>
            <button className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-2">
              Login
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            <div className="text-right">
              <button
                type="button"
                className="text-indigo-500 hover:underline text-sm"
                onClick={() => navigate('/Forgotpassword')}
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 shadow-md transition font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
