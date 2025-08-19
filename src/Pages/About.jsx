import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
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
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Resume Builder
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Helping you create professional resumes effortlessly, so you can focus on
            landing your dream job.
          </p>
        </section>
        <section className="py-16 px-10 md:px-20 bg-white text-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-lg text-center leading-relaxed">
            At Resume Builder, our mission is simple — to make job applications
            stress-free. We provide elegant templates, easy customization, and
            seamless sharing so you can present your best self to potential employers.
          </p>
         <div className="col-span-12 flex justify-center items-center pt-10">
  <img
    src="/images/laptop.jpeg"
    alt="Working on laptop"
    className="rounded-lg shadow-lg w-auto hover:scale-105 transition"
  />
</div>
        </section>
        <section className="py-16 px-10 md:px-20 bg-gray-50">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Modern Templates
              </h3>
              <p className="text-gray-600">
                Choose from a wide variety of professionally designed resume templates
                tailored for different industries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Easy to Use
              </h3>
              <p className="text-gray-600">
                Our editor is intuitive and user-friendly — no design skills needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Instant Sharing
              </h3>
              <p className="text-gray-600">
                Share your resume instantly with recruiters via a unique link or
                downloadable PDF.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-indigo-600 text-white py-12 px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to build your perfect resume?
          </h2>
          <button
            onClick={() => navigate("/Mainpage")}
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Create Your Resume Now
          </button>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-400 py-8 px-10">
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
export default About;
