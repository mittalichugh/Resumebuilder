import { create } from "zustand";

export const useResumeStore = create((set) => ({
  resumeData: {
    name: "",
    email: "",
    profession: "",
    location: "",
    city: "",
    state: "",
    degree: "",
    university: "",
    yearofpassing: "",
    technicalskills: "",
    employername: "",
    jobtittle: "",
    companyname: "",
    address: "",
    yearsworked: "",
    language: "",
    certificates: "",
    projects: "",
    photo: null,
  },

  // ✅ Template state
  template: {
    primaryColor: "#5c6ac4", // default Indigo
    
  },

  // ✅ Resume updater
  setResumeData: (updates) =>
    set((state) => ({
      resumeData: { ...state.resumeData, ...updates },
    })),

  // ✅ Template updater
  setTemplate: (updates) =>
    set((state) => ({
      template: { ...state.template, ...updates },
    })),
}));
