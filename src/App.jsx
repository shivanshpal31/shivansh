import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import SkillSet from "./components/SkillSet";
import MyWork from "./components/MyWork";
import TestExperience from "./components/TestExperience";
import FinalizeExperience from "./components/finalizeExperience";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import CareerPath from "./components/CareerPath";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SkillSet" element={<SkillSet />} />
        <Route path="/my-Work" element={<MyWork />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/TestExperience" element={<TestExperience />} />
        <Route path="/finalizeExperience" element={<FinalizeExperience />} />
      </Routes>
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
