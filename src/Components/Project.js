import React, { useState } from "react";

export default function Projects({ searchQuery }) {
  const achievements = [
    {
      title: "1st prize at MIT Alandi",
      desc: "Our team won robotics championship.",
      media: ["/mit win.jpg"],
      details:
        "RoboClub competed with 20+ teams and secured first place.",
    },
    {
      title: "PCCOE Competition",
      desc: "Recognized for our Controlling car project.",
      media: ["/pccoe.jpg"],
      details:
        "Our Car got succeed.",
    },
  ];

  const projects = [
    {
      title: "Autonomous Drone",
      desc: "A drone capable of obstacle avoidance.",
      media: ["/drone.jpg"],
      details:
        "This drone uses ultrasonic sensors and computer vision to navigate a track autonomously.",
    },
    {
      title: "Line Follower Robot",
      desc: "Robot that follows a black line.",
      media: ["/line follow.jpg"],
      details:
        "This robot is equipped with IR sensors to detect lines and navigate complex paths.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setSelectedProject(null);
  const handleShow = (project) => setSelectedProject(project);

  // 🔹 Filter projects & achievements based on searchQuery
  const filterItems = (items) => {
    if (!searchQuery) return items;
    const queryWords = searchQuery.toLowerCase().split(" ");
    return items.filter((item) =>
      queryWords.some((q) => item.title.toLowerCase().includes(q))
    );
  };

  const filteredAchievements = filterItems(achievements);
  const filteredProjects = filterItems(projects);

  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-heading">Achievements</h2>
      <div className="project-list">
        {filteredAchievements.map((item, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleShow(item)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
        {filteredAchievements.length === 0 && <p>No achievements found.</p>}
      </div>

      <h2 className="projects-heading">Projects</h2>
      <div className="project-list">
        {filteredProjects.map((item, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleShow(item)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
        {filteredProjects.length === 0 && <p>No projects found.</p>}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleClose}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>

            {/* Display media */}
            <div className="project-media">
              {selectedProject.media.map((m, i) => {
                if (m.endsWith(".mp4")) {
                  return (
                    <video
                      key={i}
                      controls
                      width="100%"
                      style={{ marginTop: "10px" }}
                    >
                      <source src={m} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  );
                } else {
                  return (
                    <img
                      key={i}
                      src={m}
                      alt={selectedProject.title}
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  );
                }
              })}
            </div>

            <button className="btn-close" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
