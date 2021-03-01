import React from "react";
import Project from "../Project";

const education = [
  {title: "MBA", text: "Emory University"},
  {title: "MS, Computer Science", text: "University of Houston, Clear Lake"},
  {title: "BS, Computer Science", text: "Sri Krishnadevaraya University"},
]

function Education() {
  return (
    <div>
      <h1>Education</h1>
      {education.map((degree) => 
        <Project details={degree} />
      )}
    </div>
  );
}

export default Education;
