import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 via-white to-gray-100">
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
          onClick={() => navigate("/Login")}
          className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 shadow-md transition"
        >
          Log out
        </button>
      </header>
      <section className="relative px-10 py-20 flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Create <span className="text-indigo-600">Your Resume</span>
          </h1>
          <h2 className="text-2xl text-gray-500">A career in tech starts here.</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our template includes carefully structured sections for personal information, summary, work experience, education, skills, projects, and more — fully customizable for your unique journey.
          </p>
          <button
            className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition shadow-lg"
            onClick={() => navigate('/Register')}
          >
            Create Resume for Free
          </button>
        </div>
        <div className="p-6 shadow-lg border rounded-xl w-80 bg-white hover:shadow-xl transition transform hover:-translate-y-1">
          <div className="w-20 mb-4">
            <button onClick={() => navigate('/Coverletter')}>
              <img src="./images/logoperson.png" alt="Profile" className="rounded-full shadow" />
            </button>
          </div>
          <h3 className="text-2xl font-bold text-right text-gray-900">John Doe</h3>
          <p className="text-right text-gray-500">Frontend Developer</p>
          <h4 className="mt-4 font-bold text-gray-800">Bio</h4>
          <p className="text-gray-600">
            I'm a Frontend Developer with 3 years of experience in React JS and Vue JS.
          </p>
        </div>
      </section>
      <section className="px-10 py-20 text-center bg-gradient-to-b from-indigo-50 to-white">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Template Colors",
              img: "/images/templates.png",
              desc: "Apply different colors on template.",
              link: "/Templatecolors"
            },
            {
              title: "Downloaded Resumes",
              img: "/images/download.jpeg",
              desc: "Download your resume to your job applications.",
              link: "/Coverletter"
            },
            {
              title: "Customization Options",
              img: "/images/effects.png",
              desc: "Choose font family, font style and colors to suit your style.",
              link: "/Effects"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-6">
              <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
              <div className="mt-6">
                <button onClick={() => navigate(item.link)}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-md shadow-md w-full hover:scale-105 transition"
                  />
                </button>
              </div>
              <p className="text-gray-600 mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-10 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-gray-50">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900">Join the Resume Builder Family</h2>
          <p className="text-gray-600 leading-relaxed">
            We’re thrilled to welcome you to Resume Builder. It’s your key to building a standout career.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition shadow-md" onClick={() => navigate('/Joinus')}>Join Us Today</button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/images/laptop.jpeg"
            alt="Working on laptop"
            className="rounded-lg shadow-lg w-full hover:scale-105 transition"
          />
        </div>
      </section>
      <section className="px-10 py-20 text-center bg-white">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">About Resume Builder</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our platform is designed to help you create a compelling resume — your ticket to landing your dream job. With customizable sections and modern templates, we empower you to showcase your skills and experience in the best light possible.
        </p>
      </section>
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
export default Home;
