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

  const { resumeData, setResumeData } = useResumeStore();
  const resumeRef = useRef();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // ✅ Simple field update
  const handleInputChange = (field, value) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  // ✅ Array-based fields update (education, experience etc.)
  const handleArrayChange = (section, index, field, value) => {
    const updated = [...(resumeData[section] || [])];
    updated[index][field] = value;
    setResumeData({ ...resumeData, [section]: updated });
  };

  // ✅ Photo upload
  const handlePhotoUpload = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => handleInputChange("photo", reader.result);
    reader.readAsDataURL(file);
  };

  // ✅ LocalStorage sync
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
      setResumeData(JSON.parse(savedData));
    }
  }, [setResumeData]);

  const handleSave = () => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    alert("Resume details saved!");
  };

  // ✅ PDF Download
  const handleDownload = async () => {
    const element = resumeRef.current;
    if (!element) return;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("resume.pdf");
  };

  // ✅ Forms section
  const renderForm = () => {
    switch (selectedSection) {
      case "personal":
        return (
          <form className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="p-2 border rounded"
              value={resumeData.name || ""}
              onChange={(e) => handleInputChange("name", e.target.value)} />
            <input type="email" placeholder="Email Address" className="p-2 border rounded"
              value={resumeData.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)} />
            <input type="text" placeholder="Profession" className="p-2 border rounded"
              value={resumeData.profession || ""}
              onChange={(e) => handleInputChange("profession", e.target.value)} />
            <input type="number" placeholder="Phone" className="p-2 border rounded"
              value={resumeData.phone || ""}
              onChange={(e) => handleInputChange("phone", e.target.value)} />
            <input type="text" placeholder="Address" className="p-2 border rounded"
              value={resumeData.address || ""}
              onChange={(e) => handleInputChange("address", e.target.value)} />
            <div className="col-span-2 border-2 border-dashed p-4 text-center cursor-pointer">
              <p>Upload Photo</p>
              <input type="file" accept="image/*"
                onChange={(e) => handlePhotoUpload(e.target.files[0])} />
              {resumeData.photo && (
                <img src={resumeData.photo} alt="Profile"
                  className="mt-2 w-20 h-20 rounded-full object-cover border" />
              )}
            </div>
          </form>
        );

      case "education":
        return (
          <form className="grid gap-4">
            {(resumeData.education || [{ degree: "", institution: "", year: "" }]).map((edu, index) => (
              <div key={index} className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleArrayChange("education", index, "degree", e.target.value)}
                  className="p-2 border rounded" />
                <input type="text" placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) => handleArrayChange("education", index, "institution", e.target.value)}
                  className="p-2 border rounded" />
                <input type="month"
                  value={edu.year}
                  onChange={(e) => handleArrayChange("education", index, "year", e.target.value)}
                  className="p-2 border rounded" />
              </div>
            ))}
          </form>
        );

      case "technicalskills":
        return (
          <form className="grid gap-4">
            <input type="text" placeholder="Technical Skills"
              className="p-2 border rounded"
              value={resumeData.technicalskills || ""}
              onChange={(e) =>
                handleInputChange("technicalskills", e.target.value)} />
          </form>
        );

      case "experience":
        return (
          <form className="grid gap-4">
            {(resumeData.experience || [{ company: "", role: "", duration: "" }]).map((exp, index) => (
              <div key={index} className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleArrayChange("experience", index, "company", e.target.value)}
                  className="p-2 border rounded" />
                <input type="text" placeholder="Role"
                  value={exp.role}
                  onChange={(e) => handleArrayChange("experience", index, "role", e.target.value)}
                  className="p-2 border rounded" />
                <input type="text" placeholder="Duration"
                  value={exp.duration}
                  onChange={(e) => handleArrayChange("experience", index, "duration", e.target.value)}
                  className="p-2 border rounded" />
              </div>
            ))}
          </form>
        );

      case "language":
        return (
          <form className="grid gap-4">
            <input type="text" placeholder="Language"
              className="p-2 border rounded"
              value={resumeData.language || ""}
              onChange={(e) => handleInputChange("language", e.target.value)} />
          </form>
        );

      case "certification":
        return (
          <form className="grid gap-4">
            <input type="text" placeholder="Certificates"
              className="p-2 border rounded"
              value={resumeData.certificates || ""}
              onChange={(e) => handleInputChange("certificates", e.target.value)} />
          </form>
        );

      case "projects":
        return (
          <form className="grid gap-4">
            <input type="text" placeholder="Projects"
              className="p-2 border rounded"
              value={resumeData.projects || ""}
              onChange={(e) => handleInputChange("projects", e.target.value)} />
          </form>
        );

      default:
        return <p>Select a section</p>;
    }
  };

  return (
    <div className="h-screen flex flex-col font-sans relative">
      {/* HEADER */}
      <header className="flex justify-between items-center px-10 py-5 shadow-md bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button className="text-2xl text-gray-800" onClick={toggleSidebar}>
            {sidebarOpen ? <IoClose /> : <FaBars />}
          </button>
          <span className="text-indigo-600 font-bold text-xl">RB</span> Resume Builder
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => navigate("/Home")}
            className="text-gray-800 hover:text-indigo-600 transition">Home</button>
          <button onClick={() => navigate("/Templatecolors")}
            className="text-gray-800 hover:text-indigo-600 transition">Template Colors</button>
          <button onClick={() => navigate("/About")}
            className="text-gray-800 hover:text-indigo-600 transition">About</button>
        </nav>
        <button onClick={handleDownload}
          className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 shadow-md transition">
          Download
        </button>
      </header>

      {/* SIDEBAR */}
      <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4 text-xl font-bold border-b border-gray-700">Menu</div>
        <ul className="p-4 space-y-4">
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("personal")}>Personal</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("education")}>Education</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("experience")}>Experience</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("certification")}>Certification</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("language")}>Language</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => setSelectedSection("technicalskills")}>Technical Skills</li>
        </ul>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>
      )}

      {/* MAIN */}
      <div className="flex flex-1">
        <main className="flex-1 flex p-6 bg-gray-50">
          <div className="w-1/2 pr-8">
            <h2 className="text-xl font-semibold mb-4 capitalize">{`${selectedSection} Details`}</h2>
            {renderForm()}
            <button className="mt-4 bg-blue-800 rounded-md px-4 py-2 text-base text-white hover:bg-blue-700"
              onClick={handleSave}>Save</button>
          </div>

          {/* PREVIEW */}
          <div ref={resumeRef} className="w-1/2 bg-white p-6 rounded shadow space-y-4">
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
                  <p className="text-sm text-gray-500">{resumeData.profession || "Profession"}</p>
                  <p className="text-sm text-gray-500">{resumeData.phone || "Phone"} | {resumeData.email || "Email"}</p>
                  <p className="text-sm text-gray-500">{resumeData.address || "Address"}</p>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <div className="bg-white shadow rounded-lg p-4 break-words whitespace-normal">
                  <section>
                    <h2 className="text-lg font-semibold border-b pb-1 mb-2">Education</h2>
                    {(resumeData.education || []).length > 0 ? (
                      resumeData.education.map((edu, idx) => (
                        <div key={idx}>
                          <p className="font-medium">{edu.degree}</p>
                          <p className="text-sm">{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-sm">No education details added</p>
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
                    {resumeData.employername || resumeData.jobtittle || resumeData.companyname || resumeData.address || resumeData.yearsworked ? (
                      <div>
                        <p className="text-sm break-words whitespace-normal">
                          {resumeData.employername || "Employer Name"}
                        </p>
                        <p className="font-medium break-words whitespace-normal">
                          {resumeData.jobtittle || "Job Title"}
                        </p>
                        <p className="text-sm break-words whitespace-normal">
                          {resumeData.companyname || "Company Name"}
                        </p>
                        <p className="text-sm break-words whitespace-normal">
                          {resumeData.address || "Address"}
                        </p>
                        <p className="text-sm text-gray-500 break-words whitespace-normal">
                          {resumeData.yearsworked || "Years Worked"}
                        </p>
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
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-10">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div className="text-white font-bold text-lg">
            RB <br /><span className="font-normal text-gray-400">Resume Builder</span>
          </div>
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
