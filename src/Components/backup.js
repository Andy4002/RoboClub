// import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
// import './App.css';
// import Header from "./Components/Header";
// import Activities from "./Components/Activities";
// import Home from "./Components/Home";
// import Events from "./Components/Events";
// import Project from './Components/Project';
// import Gallery from "./Components/Gallery";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";

// import Header from "./Header";
// import Projects from "./Project";

// function App() {
//   const [searchResults, setSearchResults] = useState([]);
//   const [darkMode, setDarkMode] = useState(true); // ✅ default dark mode

//   // ✅ Load saved theme on refresh
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setDarkMode(savedTheme === "dark");
//     }
//   }, []);

//   // ✅ Apply theme whenever it changes
//   useEffect(() => {
//     document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
//     localStorage.setItem("theme", darkMode ? "dark" : "light");
//   }, [darkMode]);

//   const handleSearch = (query) => {
//     const results = [];
//     const queryWords = query.toLowerCase().split(" ");

//     // Example data (replace with your real data)
//     const events = [{ title: "Robo Workshop" }, { title: "Drone Project" }];
//     const projects = [{ title: "Autonomous Car" }, { title: "Robo Arm" }];

//     events.forEach(e => {
//       if (queryWords.some(word => e.title.toLowerCase().includes(word))) {
//         results.push({ type: "Event", title: e.title });
//       }
//     });

//     projects.forEach(p => {
//       if (queryWords.some(word => p.title.toLowerCase().includes(word))) {
//         results.push({ type: "Project", title: p.title });
//       }
//     });

//     setSearchResults(results); // ✅ update state instead of alert
//   };

//   return (
//     <>
//       <div>
//         <Header onSearch={handleSearch} searchResults={searchResults} />
//         <div className="container mt-3">
//           {/* ✅ Search Results Section */}
//           {searchResults.length > 0 && (
//             <div className="card p-3 mt-2 shadow">
//               <h5>Search Results:</h5>
//               <ul>
//                 {searchResults.map((item, index) => (
//                   <li key={index}>
//                     <strong>{item.type}:</strong> {item.title}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {searchResults.length === 0 && (
//             <p className="text-muted mt-2">No results found.</p>
//           )}
//         </div>

//         <Home />
//         <Activities />
//         <Events />
//         <Project />
//         <Gallery />
//         <About />
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;


// Header
// import React, { useState } from "react";

// export default function Header({ onSearch, darkMode, setDarkMode }) {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   // Example data (replace with your real events/projects)
//   const events = [{ title: "Robo Workshop" }, { title: "Drone Project" }];
//   const projects = [{ title: "Autonomous Car" }, { title: "Robo Arm" }];

//   // Update suggestions dynamically
//   const handleChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (!value) {
//       setSuggestions([]);
//       return;
//     }

//     const queryWords = value.toLowerCase().split(" ");
//     const results = [];

//     events.forEach(e => {
//       if (queryWords.some(word => e.title.toLowerCase().includes(word))) {
//         results.push({ type: "Event", title: e.title });
//       }
//     });

//     projects.forEach(p => {
//       if (queryWords.some(word => p.title.toLowerCase().includes(word))) {
//         results.push({ type: "Project", title: p.title });
//       }
//     });

//     setSuggestions(results);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     if (typeof onSearch === "function") onSearch(query);
//     // setQuery("");       // Clear input after submit
//     setSuggestions([]); // Hide suggestions after submit
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">RoboClub</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active text-success border border-success rounded px-3 mx-2" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-success border border-success rounded px-3 mx-2" href="#events">Events</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-success border border-success rounded px-3 mx-2" href="#projects">Projects</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-success border border-success rounded px-3 mx-2" href="#gallery">Gallery</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-success border border-success rounded px-3 mx-2" href="#about">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-success border border-success rounded px-3 mx-2" href="#contact">Contact</a>
//             </li>
//           </ul>

//           {/* SEARCH FORM */}
//           <form className="d-flex position-relative" role="search" onSubmit={handleSubmit}>
//             <input
//               className="form-control me-2 text-success border border-success rounded px-3 mx-2 bg-dark search-input"
//               type="search"
//               placeholder="Search"
//               value={query}
//               onChange={handleChange}
//             />
//             <button className="btn btn-outline-success" type="submit">Search</button>

//             {/* 🔽 Dynamic Suggestions */}
//             {suggestions.length > 0 && (
//               <ul className="position-absolute bg-dark text-white list-unstyled p-2 shadow" style={{ top: '100%', left: 0, right: 0, zIndex: 1000 }}>
//                 {suggestions.map((item, index) => (
//                   <li key={index} className="py-1 px-2 border-bottom border-secondary">
//                     {item.type}: {item.title}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </form>

//           {/* Dark Mode Button can be added here later */}
//         </div>
//       </div>
//     </nav>
//   );
// }


// Events.js
// import React, { useState } from "react";


// export default function Events() {
//   const upcomingEvents = [
//     {
//       title: "Robotics Workshop",
//       date: "Sep 10, 2025",
//       desc: "Hands-on session on Arduino & sensors.",
//       details:
//         "This workshop covers Arduino programming, sensor integration, and building a small autonomous robot.",
//     },
//     {
//       title: "Drone Racing",
//       date: "Sep 20, 2025",
//       desc: "Exciting competition with custom drones.",
//       details:
//         "Participants will race their custom-built drones through an obstacle course. Prizes for winners!",
//     },
//   ];

//   const pastEvents = [
//     {
//       title: "AI Bootcamp",
//       date: "Aug 15, 2025",
//       desc: "Intro to ML & AI basics for beginners.",
//       details:
//         "Participants learned fundamentals of machine learning and implemented simple AI projects.",
//     },
//     {
//       title: "Line Follower Robot Contest",
//       date: "July 30, 2025",
//       desc: "Students built robots to compete.",
//       details:
//         "Students built line follower robots and competed in a track-based challenge. Winners were awarded prizes.",
//     },
//   ];

//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const handleClose = () => setSelectedEvent(null);
//   const handleShow = (event) => setSelectedEvent(event);

//   return (
//     <div id="events" className="events-container">
//       <h2 className="events-heading">Upcoming Events</h2>
//       <div className="event-list">
//         {upcomingEvents.map((event, index) => (
//           <div
//             key={index}
//             className="event-card"
//             onClick={() => handleShow(event)}
//           >
//             <h3>{event.title}</h3>
//             <p className="event-date">{event.date}</p>
//             <p>{event.desc}</p>
//           </div>
//         ))}
//       </div>

//       <h2 className="events-heading">Past Events</h2>
//       <div className="event-list">
//         {pastEvents.map((event, index) => (
//           <div
//             key={index}
//             className="event-card past"
//             onClick={() => handleShow(event)}
//           >
//             <h3>{event.title}</h3>
//             <p className="event-date">{event.date}</p>
//             <p>{event.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedEvent && (
//         <div className="modal-overlay" onClick={handleClose}>
//           <div
//             className="modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2>{selectedEvent.title}</h2>
//             <p className="event-date">{selectedEvent.date}</p>
//             <p>{selectedEvent.details}</p>
//             <button className="btn-close" onClick={handleClose}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// Projects
// import React, { useState } from "react";


// export default function Projects() {
//   const achievements = [
//     {
//       title: "Robo Championship Winner",
//       desc: "Our team won the national robotics championship.",
//       media: [
//         "/images/achievement1.jpg",
//         "/images/achievement2.jpg"
//       ],
//       details:
//         "RoboClub competed with 20+ teams nationwide and secured first place with our autonomous line-following robot."
//     },
//     {
//       title: "Innovation Award 2025",
//       desc: "Recognized for our AI-powered drone project.",
//       media: ["/images/award1.jpg"],
//       details:
//         "Our AI drone project was awarded 'Most Innovative Robotics Project' at TechFest 2025."
//     },
//   ];

//   const projects = [
//     {
//       title: "Autonomous Drone",
//       desc: "A drone capable of obstacle avoidance.",
//       media: ["/images/drone1.jpg", "/videos/drone-demo.mp4"],
//       details:
//         "This drone uses ultrasonic sensors and computer vision to navigate a track autonomously."
//     },
//     {
//       title: "Line Follower Robot",
//       desc: "Robot that follows a black line.",
//       media: ["/images/line1.jpg"],
//       details:
//         "This robot is equipped with IR sensors to detect lines and navigate complex paths."
//     },
//   ];

//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleClose = () => setSelectedProject(null);
//   const handleShow = (project) => setSelectedProject(project);

//   return (
//     <div id="projects" className="projects-container">
//       <h2 className="projects-heading">Achievements</h2>
//       <div className="project-list">
//         {achievements.map((item, index) => (
//           <div
//             key={index}
//             className="project-card"
//             onClick={() => handleShow(item)}
//           >
//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>

//       <h2 className="projects-heading">Projects</h2>
//       <div className="project-list">
//         {projects.map((item, index) => (
//           <div
//             key={index}
//             className="project-card"
//             onClick={() => handleShow(item)}
//           >
//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <div className="modal-overlay" onClick={handleClose}>
//           <div
//             className="modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2>{selectedProject.title}</h2>
//             <p>{selectedProject.details}</p>

//             {/* Display media */}
//             <div className="project-media">
//               {selectedProject.media.map((m, i) => {
//                 if (m.endsWith(".mp4")) {
//                   return (
//                     <video key={i} controls width="100%" style={{ marginTop: "10px" }}>
//                       <source src={m} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   );
//                 } else {
//                   return (
//                     <img
//                       key={i}
//                       src={m}
//                       alt={selectedProject.title}
//                       style={{ width: "100%", marginTop: "10px", borderRadius: "8px" }}
//                     />
//                   );
//                 }
//               })}
//             </div>

//             <button className="btn-close" onClick={handleClose}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// SEARCH FORM
//             <form className="d-flex position-relative" role="search" onSubmit={handleSubmit}>
//               <input
//                 className="form-control me-2 active text-success border border-success rounded px-3 mx-2 bg-dark search-input"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//               />
              
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>

//               {/* Clear button */}
//               {query && (
//                 <button
//                   type="button"
//                   className="btn btn-sm active btn-danger position-absolute end-0 top-0 mt-2 me-2"
//                   onClick={() => setQuery("")}
//                   title="Clear"
//                 >
//                   ×
//                 </button>
//               )}

//               {/* Dynamic search results */}
//               {query && (
//                 <div className="search-results">
//                   {searchResults && searchResults.length > 0 ? (
//                     searchResults.map((item, index) => (
//                       <div key={index} className="search-item">
//                         {item.type}: {item.title}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="search-item no-result">
//                       No results found for "{query}"
//                     </div>
//                   )}
//                 </div>
//               )}
//             </form>

//contact form

// import React, { useState } from "react";


// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can send data to backend or email API
//     console.log(formData);
//     setSubmitted(true);
//     setFormData({ name: "", email: "", message: "" });
//   };
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "eb9bbfd6-4322-4509-9f17-c6878070fa88");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//       headers: {
//     Accept: "application/json",
//   },
//   mode: "cors"
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };


//   return (
//     <div id="contact" className="contact-container">
//       <h2>Contact Us</h2>
//       <p>Have questions or want to collaborate? Reach out to us!</p>

//       <form className="contact-form" onSubmit={onSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Send Message</button>
//         {submitted && <p className="success-msg">Message sent successfully!</p>}
//       </form>
//     </div>
//   );
// }


//second contact
// import React, { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [result, setResult] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "eb9bbfd6-4322-4509-9f17-c6878070fa88");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//         headers: {
//           Accept: "application/json",
//         },
//         mode: "cors",
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult("✅ Form Submitted Successfully!");
//         event.target.reset();
//       } else {
//         console.log("Error", data);
//         setResult("❌ " + data.message);
//       }
//     } catch (error) {
//       setResult("⚠️ Network error: " + error.message);
//     }
//   };

//   return (
//     <div id="contact" className="contact-container">
//       <h2>Contact Us</h2>
//       <p>Have questions or want to collaborate? Reach out to us!</p>

//       <form className="contact-form" onSubmit={onSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Send Message</button>
//       </form>

//       {result && <p className="success-msg">{result}</p>}
//     </div>
//   );
// }
