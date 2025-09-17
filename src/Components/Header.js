import React, { useEffect,useState } from "react";

export default function Header({
  onSearch,
  darkMode,
  setDarkMode,
  searchResults,
}) {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("dark");
useEffect(() => {
  if (theme === "bright") {
    document.body.classList.add("bright");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("bright");
  }
}, [theme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("Please enter something to search.");
      return;
    }
    if (typeof onSearch === "function") {
      onSearch(query);
      // Removed setQuery(""); so the input keeps its value
    } else {
      console.warn("Header: onSearch prop is not a function", onSearch);
      alert("Search function not available (onSearch missing).");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark fixed-top">
         <a className="navbar-brand" href="#"></a>
            <img
              src="/clg logo.jpg"
              alt="MESWCOE Logo"
              width="45"
              height="45"
              className="d-inline-block align-top me-2"
            />
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            RoboClub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-success border border-success rounded px-3 mx-2"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-success border border-success rounded px-3 mx-2"
                  href="#events"
                >
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-success border border-success rounded px-3 mx-2"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-success border border-success rounded px-3 mx-2"
                  href="#gallery"
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-success border border-success rounded px-3 mx-2"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-success border border-success rounded px-3 mx-2"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>

            <a className="navbar-brand" href="#"></a>
            <img
              src="/logo.jpg"
              alt="RoboClub Logo"
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
            />

            {/* <button
        onClick={() => setTheme(theme === "dark" ? "bright" : "dark")}
        className="px-4 py-2 rounded-xl shadow-md border bg-gray-200 text-gray-800"
      >
        {theme === "dark" ? "☀️ Bright Mode" : "🌑 Dark Mode"}
      </button> */}
            {/* Dark Mode Button (optional) */}
            {/* <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button> */}
          </div>
        </div>
      </nav>
    </>
  );
}
