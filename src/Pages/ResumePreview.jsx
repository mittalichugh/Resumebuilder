import React from "react";
import { useResumeStore } from "../store/resumeStore";

const ResumePreview = () => {
  const { resumeData, template } = useResumeStore();

  return (
    <div
      className="p-6 rounded-lg shadow-lg w-[800px] bg-white"
      style={{
        color: template.textColor || "#000",
        fontSize: template.fontSize || 16,
        fontStyle: template.fontStyle || "normal",
      }}
    >
      {/* Header */}
      <div
        className="text-center py-6"
        style={{ backgroundColor: template.primaryColor }}
      >
        <h1 className="text-3xl font-bold text-white">{resumeData.name}</h1>
        <p className="text-white">{resumeData.profession}</p>
      </div>

      {/* Contact */}
      <div className="mt-4 text-center">
        <p>{resumeData.email}</p>
        <p>
          {resumeData.location}, {resumeData.city}, {resumeData.state}
        </p>
      </div>

      {/* Education */}
      <div className="mt-6">
        <h2
          className="text-xl font-semibold border-b pb-2"
          style={{ borderColor: template.primaryColor }}
        >
          Education
        </h2>
        <p>{resumeData.degree}</p>
        <p>{resumeData.university}</p>
        <p>{resumeData.yearofpassing}</p>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h2
          className="text-xl font-semibold border-b pb-2"
          style={{ borderColor: template.primaryColor }}
        >
          Technical Skills
        </h2>
        <p>{resumeData.technicalskills}</p>
      </div>

      {/* Experience */}
      <div className="mt-6">
        <h2
          className="text-xl font-semibold border-b pb-2"
          style={{ borderColor: template.primaryColor }}
        >
          Experience
        </h2>
        <p>
          {resumeData.jobtittle} at {resumeData.companyname}
        </p>
        <p>{resumeData.employername}</p>
        <p>{resumeData.address}</p>
        <p>{resumeData.yearsworked}</p>
      </div>

      {/* Projects */}
      <div className="mt-6">
        <h2
          className="text-xl font-semibold border-b pb-2"
          style={{ borderColor: template.primaryColor }}
        >
          Projects
        </h2>
        <p>{resumeData.projects}</p>
      </div>

      {/* Certificates */}
      <div className="mt-6">
        <h2
          className="text-xl font-semibold border-b pb-2"
          style={{ borderColor: template.primaryColor }}
        >
          Certificates
        </h2>
        <p>{resumeData.certificates}</p>
      </div>

      {/* Languages */}
      <div className="mt-6">
        <h2
          className="text-xl font-semibold border-b pb-2"
          style={{ borderColor: template.primaryColor }}
        >
          Languages
        </h2>
        <p>{resumeData.language}</p>
      </div>
    </div>
  );
};

export default ResumePreview; // ✅ This fixes your error
