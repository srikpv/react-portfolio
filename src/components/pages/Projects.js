import React from "react";
import Project from "../Project";

const projects = [
  {title: "PAC 2.0", text: "Serve proxy files to route browser traffic on all GE user machines"},
  {title: "Payment Broker", text: "Authorize credit card payment when you buy a ticket on United.com"},
  {title: "Fraud Check", text: "Check for fraud on all credit card transactions on United.com"},
  {title: "Data Migration", text: "Migrate data from multiple source databases into one SAP system"},
  {title: "TrusteSolutions", text: "Provide software services for Chapter 7 Bankruptcy trustees"},
]

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => 
        <Project details={project} />
      )}
    </div>
  );
}

export default Projects;
