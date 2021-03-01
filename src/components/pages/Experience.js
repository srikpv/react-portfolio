import React from "react";
import Project from "../Project";

const experience = [
  {title: "Staff Agile Transformer", company: "GE", text: "Agile Coach for multiple Network Architecture Teams"},
  {title: "Sr. Program Manager", company: "Delta Airlines", text: "Product Owner and Scrum Master collaborating with TechOps Technology Solutions team"},
  {title: "Manager, Software Development", company: "Infosys", text: "Led team of eight at United Airlines (UAL) and Schlumberger (SLB) to deliver FinTech and Data Migration projects from inception to deployment"},
  {title: "IT Project Manager", company: "United Airlines", text: "Led JCBA project ($4.5M) for Inflight Records team (30 members) during United and Continental Airlines merger"},
  {title: "Support Manager", company: "FSS", text: "FSS provides multiple software products and banking solutions for legal community and partner banks"},
  {title: "Sr. Software Engineer", company: "FSS", text: "FSS provides multiple software products and banking solutions for legal community and partner banks"},
]


function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      {experience.map((role) => 
        <Project details={role} />
      )}
    </div>
  );
}

export default Experience;
