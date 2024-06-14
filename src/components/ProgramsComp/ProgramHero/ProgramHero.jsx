"use client";
import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";
import "./program-hero.css";

const ProgramHero = () => {
  const [selectedProgram, setSelectedProgram] = useState("Membership Class");

  const programs = [
    {
      name: "Membership Class",
      description:
        "Discover the heart of our church community and learn how you can be a part of our mission.",
      time: "Every Sunday after service",
      nextCohort: "June 4, 2023",
      joinLink: "https://forms.example.com/membership-class-signup",
    },
    {
      name: "Leadership and Discipleship",
      description:
        "Equip yourself with the tools to lead and make disciples in your spheres of influence.",
      time: "Wednesdays at 7:00 PM",
      nextCohort: "July 12, 2023",
      joinLink: "https://forms.example.com/leadership-discipleship-signup",
    },
    {
      name: "Workforce Training",
      description:
        "Sharpen your professional skills and prepare for success in your career.",
      time: "Saturdays at 9:00 AM",
      nextCohort: "August 5, 2023",
      joinLink: "https://forms.example.com/workforce-training-signup",
    },
    {
      name: "Ehub (Skill Learning)",
      description:
        "Unleash your potential by learning new skills in our dynamic workshops.",
      time: "Monthly workshops",
      nextCohort: "Ongoing enrollment",
      joinLink: "https://forms.example.com/ehub-workshop-signup",
    },
  ];

  const selectedProgramData = programs.find((p) => p.name === selectedProgram);

  return (
    <div className="program-hero">
      <div className="program-container">
        <h1 className="program-main-title">Our Programs</h1>
        <p className="program-main-subtitle">Engage, learn, and grow with us</p>

        <div className="program-content">
          <div className="program-sidebar">
            {programs.map((program) => (
              <button
                key={program.name}
                className={`program-button ${
                  program.name === selectedProgram ? "active" : ""
                }`}
                onClick={() => setSelectedProgram(program.name)}
              >
                {program.name}
              </button>
            ))}
          </div>

          <div className="program-details">
            <h2>{selectedProgram}</h2>
            <p className="program-description">
              {selectedProgramData.description}
            </p>

            <div className="program-info">
              <div className="info-item">
                <FaClock className="info-icon" />
                <span>{selectedProgramData.time}</span>
              </div>
              <div className="info-item">
                <FaCalendarAlt className="info-icon" />
                <span>Next Cohort: {selectedProgramData.nextCohort}</span>
              </div>
            </div>

            <a
              href={selectedProgramData.joinLink}
              className="join-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaUsers className="button-icon" />
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramHero;
