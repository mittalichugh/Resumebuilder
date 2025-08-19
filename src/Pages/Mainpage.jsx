import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useResumeStore } from "../store/resumeStore";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Mainpage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("personal");
const {resumeData,setResumeData}=useResumeStore()
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleInputChange = (field, value) => {
    setResumeData({ [field]: value });
    console.log(field,value)
  };
  const handlePhotoUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setResumeData((prev) => ({ ...prev, photo: e.target.result }));
    };
    reader.readAsDataURL(file);
  };
  useEffect(() => {
  const savedData = localStorage.getItem("resumeData");
  if (savedData) {
    setResumeData(JSON.parse(savedData));
  }
},[ setResumeData]);
const handleSave = () => {
  localStorage.setItem("resumeData", JSON.stringify(resumeData));
  alert("Resume details saved!");
};
  const renderForm = () => {
    switch (selectedSection) {
      case "personal":
        return (
          <form className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="p-2 border rounded"
              value={resumeData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            <input type="email" placeholder="Email Address" className="p-2 border rounded"
              value={resumeData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            <input type="text" placeholder="Profession" className="p-2 border rounded"
              value={resumeData.profession}
              onChange={(e) => handleInputChange("profession", e.target.value)}
            />
            <input type="text" placeholder="Address" className="p-2 border rounded"
              value={resumeData.address}
              onChange={(e) => handleInputChange("location", e.target.value)}
            />
            <input type="text" placeholder="City" className="p-2 border rounded"
              value={resumeData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
            />
            <input type="text" placeholder="State" className="p-2 border rounded"
              value={resumeData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
            />       
            <div className="col-span-2 border-2 border-dashed p-4 text-center cursor-pointer"
              onDrop={(e) => {
                e.preventDefault();
                handlePhotoUpload(e.dataTransfer.files[0]);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <p>Drag & Drop or Click to Upload Photo</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="photoUpload"
                onChange={(e) => handlePhotoUpload(e.target.files[0])}
              />
              <label htmlFor="photoUpload" className="cursor-pointer text-blue-500 underline">
                Choose File
              </label>
            </div>
          </form>
        );
      case "education":
        return (
          <form className="grid gap-4">
            <input type="text" placeholder="Degree" className="p-2 border rounded"
            value={resumeData.degree}
             onChange={(e) => handleInputChange("degree", e.target.value)}
             />
            <input type="text" placeholder="University" className="p-2 border rounded" 
             value={resumeData.university}
             onChange={(e) => handleInputChange("university", e.target.value)}
            />
            <input type="text" placeholder="Year of Passing" className="p-2 border rounded" 
             value={resumeData.yearofpassing}
             onChange={(e) => handleInputChange("yearofpassing", e.target.value)}
            />
          </form>
        );
      case "technicalskills":
        return (
          <form className="grid gap-4">
            <input type="text" placeholder="Technical Skills" className="p-2 border rounded" 
             value={resumeData.technicalskills}
             onChange={(e) => handleInputChange("technicalskills", e.target.value)}
            />
          </form>
        );
      case "experience":
        return (
          <form className="grid gap-4">
             <input type="text" placeholder="Employer Name" className="p-2 border rounded"
             value={resumeData.employername}
             onChange={(e) => handleInputChange("employername", e.target.value)}
            />
            <input type="text" placeholder="Job Tittle" className="p-2 border rounded" 
             value={resumeData.jobtittle}
             onChange={(e) => handleInputChange("jobtittle", e.target.value)}/>
            <input type="text" placeholder="Company Name" className="p-2 border rounded" 
             value={resumeData.companyname}
             onChange={(e) => handleInputChange("companyname", e.target.value)}
            />
            <input type="text" placeholder="Projects" className="p-2 border rounded"
            value={resumeData.projects}
            onChange={(e) => handleInputChange("projects", e.target.value)}
            />
             <input type="text" placeholder="Address" className="p-2 border rounded"
             value={resumeData.address}
             onChange={(e) => handleInputChange("address", e.target.value)}
            />
            <input type="text" placeholder="Years Worked" className="p-2 border rounded"
             value={resumeData.yearsworked}
             onChange={(e) => handleInputChange("yearsworked", e.target.value)}
            />
          </form>
        );
        case "language":
        return (
          <form className="grid gap-4">  
            <input type="text" placeholder="Language" className="p-2 border rounded" 
             value={resumeData.language}
             onChange={(e) => handleInputChange("language", e.target.value)}
            />
          </form>
        );
        case "certification":
        return (
          <form className="grid gap-4">  
            <input type="text" placeholder="Certificates" className="p-2 border rounded" 
             value={resumeData.certificates}
             onChange={(e) => handleInputChange("certificates", e.target.value)}
            />
          </form>
        );
         case "projects":
        return (
          <form className="grid gap-4">  
            <input type="text" placeholder="Projects" className="p-2 border rounded" 
             value={resumeData.projects}
             onChange={(e) => handleInputChange("projects", e.target.value)}
            />
          </form>
        );
      default:
        return null;
    }
  };
  const resumeRef = useRef();
  const handleDownload = () => {
    const input = resumeRef.current;
    if (!input) return;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      const pdfBlob = pdf.output("blob");
    const blobUrl = URL.createObjectURL(pdfBlob);
    const savedResumes = JSON.parse(localStorage.getItem("downloadedResumes")) || [];
    savedResumes.push({
      name: `resume-${Date.now()}.pdf`,
      url: blobUrl
    });
    localStorage.setItem("downloadedResumes", JSON.stringify(savedResumes));
    pdf.save("resume.pdf");
  });
};
  return (
    <div className="h-screen flex flex-col font-sans relative">
      <header className="flex justify-between items-center px-10 py-5 shadow-md bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="text-2xl font-extrabold text-black tracking-wide leading-tight">
          <button
      className="text-2xl text-gray-800"
      onClick={toggleSidebar}
    >
      {sidebarOpen ? <IoClose /> : <FaBars />}
    </button>
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
          onClick={handleDownload}
          className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 shadow-md transition"
        >
          Download
        </button>
      </header>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 text-xl font-bold border-b border-gray-700">Menu</div>
        <ul className="p-4 space-y-4">
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("personal")}>
            Personal Details
          </li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("education")}>
            Education
          </li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("certification")}>
            Certification
          </li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("language")}>
            Language
            </li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("technicalskills")}>
            Technical Skills
          </li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("experience")}>
            Experience
          </li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("projects")}>
            Projects
          </li>
        </ul>
      </div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="flex flex-1">
        <main className="flex-1 flex p-6 bg-gray-50">
          <div className="w-1/2 pr-8">
            <h2 className="text-xl font-semibold mb-4 capitalize">{selectedSection} Details</h2>
            {renderForm()}
          </div>
<div 
ref={resumeRef}
className="w-1/2 bg-white p-6 rounded shadow space-y-6"
style={{ width: "100%", maxWidth: "600px" }}>
 <section>
    <div className="flex items-center space-x-4 mb-4">
      {resumeData.photo ? (
        <img src={resumeData.photo} alt="User" className="w-16 h-16 rounded-full object-cover" />
      ) : (
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
          No Photo
        </div>
      )}
      <div>
        <h3 className="text-lg font-bold">{resumeData.name || "Your Name"}</h3>
        <p className="text-sm text-gray-500">
          {resumeData.email || "Email"} | {resumeData.profession || "Profession"}
        </p>
        <p className="text-sm text-gray-500 ">
          {resumeData.city || ""} {resumeData.state || ""} 
        </p>
      </div>
    </div>
  </section>




<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
  {/* Left Column */}
  <div className="space-y-4">
    <div className="bg-white shadow rounded-lg p-4 break-words whitespace-normal">
      <section>
    <h2 className="text-lg font-semibold border-b pb-1 mb-2">Education</h2>
    {resumeData.degree || resumeData.university || resumeData.yearofpassing ? (
      <div>
        <p className="font-medium break-words whitespace-normal">{resumeData.degree || "Degree"}</p>
        <p className="text-sm break-words whitespace-normal">{resumeData.university || "University"}</p>
        <p className="text-sm text-gray-500 break-words whitespace-normal">{resumeData.yearofpassing || "Year of Passing"}</p>
      </div>
    ) : (
      <p className="text-gray-400 text-sm break-words whitespace-normal">No education details added</p>
    )}
  </section>
    </div>
    <div className="bg-white shadow rounded-lg p-4 break-words whitespace-normal">
       <section>
    <h2 className="text-lg font-semibold border-b pb-1 mb-2">Technical Skills</h2>
    {resumeData.technicalskills ? (
      <p>{resumeData.technicalskills}</p>
    ) : (
      <p className="text-gray-400 text-sm break-words whitespace-normal">No technical skills added</p>
    )}
  </section>
    </div>
    <div className="bg-white shadow rounded-lg p-4 break-words whitespace-normal">
       <section>
    <h2 className="text-lg font-semibold border-b pb-1 mb-2">Language</h2>
    {resumeData.language ? (
      <p>{resumeData.language}</p>
    ) : (
      <p className="text-gray-400 text-sm break-words whitespace-normal">No Language added</p>
    )}
  </section>
    </div>
  </div>

  {/* Right Column */}
  <div className="space-y-4">
    {/* Experience */}
    <div className="bg-white shadow rounded-lg p-4 break-words whitespace-normal">
      <section>
    <h2 className="text-lg font-semibold border-b pb-1 mb-4">Experience</h2>
    {resumeData.employername || resumeData.jobtittle || resumeData.companyname || resumeData.address || resumeData.yearsworked ?  (
      <div>
         <p className="text-sm break-words whitespace-normal">{resumeData.employername || "Employer Name"}</p>
        <p className="font-medium break-words whitespace-normal">{resumeData.jobtittle || "Job Tittle"}</p>
        <p className="text-sm break-words whitespace-normal">{resumeData.companyname || "Company Name"}</p>
         <p className="text-sm break-words whitespace-normal">{resumeData.address || "Address"}</p>
        <p className="text-sm text-gray-500 break-words whitespace-normal">{resumeData.yearsworked || "Years Worked"}</p>
      </div>
    ) : (
      <p className="text-gray-400 text-sm">No work experience added</p>
    )}
  </section>
    </div>

    {/* Certification */}
    <div className="bg-white shadow rounded-lg p-4 break-words whitespace-normal">
      <section>
    <h2 className="text-lg font-semibold border-b pb-1 mb-2">Certification</h2>
    {resumeData.certificates ? (
      <div>
        <p className="text-sm break-words whitespace-normal">{resumeData.certificates}</p>
      </div>
    ) : (
      <p className="text-gray-400 text-sm">No certificates added</p>
    )}
  </section>
  
  </div>
  <div className="bg-white shadow rounded-lg p-4 break-words whitespace-normal">
      <section>
    <h2 className="text-lg font-semibold border-b pb-1 mb-2">Projects</h2>
    {resumeData.projects ? (
      <div>
        <p className="text-sm break-words whitespace-normal">{resumeData.projects}</p>
      </div>
    ) : (
      <p className="text-gray-400 text-sm">No projects added</p>
    )}
  </section>
    </div>
</div>
</div>





<button  
  className="bg-blue-800 rounded-lg pt-4 pb-4 pl-7 pr-7 text-xl text-white hover:text-gray-500"  
  onClick={handleSave}
>
  Save
</button>



</div>


        </main>
        
      </div>
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

export default Mainpage;
