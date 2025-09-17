import React, { useState } from "react";

export default function About() {
  const teamMembers = [
    {
      name: "Vrushabkumar khade",
      role: "President",
      photo: "/images/vrushabh dada.jpg",
    },
    {
      name: "Mrunal Nikam",
      role: "Vice president",
      photo: "/images/vice president.jpg",
    },
    {
      name: "Varsha Fulsundar",
      role: "Chairman",
      photo: "/images/chairman.jpg",
    },
    {
      name: "Ayush Kharwade",
      role: "Vice-Chairman",
      photo: "",
    },
    {
      name: "Vedang Salunkhe",
      role: "Project Manager",
      photo: "/images/project manager.jpg",
    },
    {
      name: "Aditya Varpe",
      role: "Technical Head",
      photo: "/images/technical head.jpg",
    },
    {
      name: "Harsh Kakare",
      role: "Technical Team",
      photo: "/images/tt1.jpg",
    },
    {
      name: "Yashraj Mane",
      role: "Technical Team",
      photo: "/images/tt2.jpg",
    },
    {
      name: "Krishna Mirajkar",
      role: "Social Media Head",
      photo: "/images/social media head.jpg",
    },
    {
      name: "Smriti Vadgule",
      role: "Creative Lead",
      photo: "/images/creative lead.jpg",
    },
    {
      name: "Parth Sail",
      role: " Documentation Head",
      photo: "/images/documentation head.jpg",
    },
    {
      name: "Vaijanti Ahir",
      role: "Treasurer",
      photo: "/images/vaijanti.jpg",
    },
    {
      name: "Samiksha Kale",
      role: "Management Lead",
      photo: "",
    },
    {
      name: "Yash Salunkhe",
      role: "Publicity Head",
      photo: "",
    },
    {
      name: "Manasvi Sawant",
      role: "Club Co-ordinator",
      photo: "",
    },
    {
      name: "Vinayak Bhandari",
      role: " Post Club Co-ordinator",
      photo: "/images/post club cordinator.jpg",
    },
    {
      name: "Vansh Pal",
      role: "Club Co-ordinator",
      photo: "",
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);
  const handleShow = (member) => setSelectedMember(member);
  const handleClose = () => setSelectedMember(null);

  return (
    <div id="about" className="aboutus-container">
      {/* Club History */}
      <section className="club-history-section">
        <h2>Club History</h2>
        <p>
          RoboClub is the first club in our college. It started in 2008.{" "}
          {/* Replace with actual text later */}
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card"
              onClick={() => handleShow(member)}
            >
              <img src={member.photo} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedMember.photo}
              alt={selectedMember.name}
              className="modal-member-photo"
            />
            <h2>{selectedMember.name}</h2>
            <p>{selectedMember.role}</p>
            <p>{selectedMember.details}</p>
            <button className="btn-close" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
