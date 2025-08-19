import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, githubProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // ✅ Email & Password Register
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  // ✅ Google Register
  // ✅ Google Register
const handleGoogleRegister = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user; // <-- Firebase User object
    alert("Registered with Google!");
    navigate(`/profile/${user.uid}`); // navigate with UID
  } catch (error) {
    alert(error.message);
  }
};

// ✅ GitHub Register
const handleGithubRegister = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    const user = result.user;
    alert("Registered with GitHub!");
    navigate(`/profile/${user.uid}`); // navigate with UID
  } catch (error) {
    alert(error.message);
  }
};


  return (
    <div className="min-h-screen flex font-sans">
      
      {/* Left Side */}
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
              Create beautiful, professional resumes that get you hired — fast and free.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg">
          
          {/* Tabs */}
          <div className="flex justify-between mb-6 border-b border-gray-200">
            <button className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-2">
              Register
            </button>
            <button
              className="text-gray-500 hover:text-indigo-600 transition"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-4">
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
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 shadow-md transition font-semibold"
            >
              Register
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <button
            onClick={handleGoogleRegister}
            className="w-full border py-2 rounded-lg flex items-center justify-center gap-3 mb-3 hover:bg-gray-100 border-gray-300 transition"
          >
            <img src="/images/google.png" alt="Google" className="w-5 h-5" />
            <span className="font-medium">Sign up with Google</span>
          </button>

          <button
            onClick={handleGithubRegister}
            className="w-full border py-2 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 border-gray-300 transition"
          >
            <img src="/images/github.png" alt="Github" className="w-5 h-5" />
            <span className="font-medium">Sign up with GitHub</span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Register;
