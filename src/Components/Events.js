import React, { useState } from "react";

export default function Events({ searchQuery }) {
  const upcomingEvents = [
    {
      title: "Stay Tuned",
      date: "Sep XX, 2025",
      desc: "will be declared soon",
      details:
        "Upcoming.....",
    },
    {
      title: "Stay Tuned",
      date: "Sep XX, 2025",
      desc: "Will be declared soon",
      details:
        "Upcoming.....",
    },
  ];

  const pastEvents = [
    {
      title: "ROBO-ROVER",
      date: "Oct 4, 2024",
      desc: "Hands-on experience",
      details:
        "Participants learned fundamentals of robotics and electronics",
    },
    {
      title: "Robo-Vision",
      date: "Nov 02, 2023",
      desc: "Future of Robotics",
      details:
        "Students get to know about the spectacular journey into future of robotics and AI",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClose = () => setSelectedEvent(null);
  const handleShow = (event) => setSelectedEvent(event);

  // 🔹 Filter events dynamically based on searchQuery
  const filterEvents = (events) => {
    if (!searchQuery) return events; // no search => show all
    const queryWords = searchQuery.toLowerCase().split(" ");
    return events.filter((event) =>
      queryWords.some((q) => event.title.toLowerCase().includes(q))
    );
  };

  const filteredUpcoming = filterEvents(upcomingEvents);
  const filteredPast = filterEvents(pastEvents);

  return (
    <div id="events" className="events-container">
      <h2 className="events-heading">Upcoming Events</h2>
      <div className="event-list">
        {filteredUpcoming.length > 0 ? (
          filteredUpcoming.map((event, index) => (
            <div
              key={index}
              className="event-card"
              onClick={() => handleShow(event)}
            >
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.desc}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No upcoming events found matching "{searchQuery}"</p>
        )}
      </div>

      <h2 className="events-heading">Past Events</h2>
      <div className="event-list">
        {filteredPast.length > 0 ? (
          filteredPast.map((event, index) => (
            <div
              key={index}
              className="event-card past"
              onClick={() => handleShow(event)}
            >
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.desc}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No past events found matching "{searchQuery}"</p>
        )}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent.title}</h2>
            <p className="event-date">{selectedEvent.date}</p>
            <p>{selectedEvent.details}</p>
            <button className="btn-close" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
