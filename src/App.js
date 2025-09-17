import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Activities from "./Components/Activities";
import Home from "./Components/Home";
import Events from "./Components/Events";
import Project from './Components/Project';
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  
  const [darkMode, setDarkMode] = useState(true);
  const eventsData = [
    { title: "Robotics Workshop", type: "Event" },
    { title: "Drone Racing", type: "Event" },
    { title: "AI Bootcamp", type: "Event" },
    { title: "Line Follower Robot Contest", type: "Event" },
  ];

  const projectsData = [
    { title: "Autonomous Drone", type: "Project" },
    { title: "Line Follower Robot", type: "Project" },
    { title: "Robo Championship Winner", type: "Achievement" },
    { title: "Innovation Award 2025", type: "Achievement" },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  // ✅ Load saved theme on refresh
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  // ✅ Apply theme whenever it changes
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase()); // ✅ store the search text
  };

  return (
    <>
      <div>
        <Header onSearch={handleSearch} 
        events={eventsData}
        projects={projectsData}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>
        
        {/* Now pass the search query to components that need filtering */}
        <Home />
        <Activities />
        <Events searchQuery={searchQuery} />
        <Project searchQuery={searchQuery} />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
