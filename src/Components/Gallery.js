import React, { useState } from "react";


export default function Gallery() {
  const mediaItems = [
    { type: "image", src: "/15th aug.jpg", alt: "Event 1" },
    { type: "image", src: "/cwit.jpg", alt: "Event 2" },
    { type: "video", src: "/video 2.mp4", alt: "Behind the Scene 1" },
    { type: "image", src: "/cwit.jpg", alt: "Event 3" },
    { type: "video", src: "/video 1.mp4", alt: "Behind the Scene 2" },
    { type: "image", src: "/seniors.jpg", alt:"Event"},
    { type: "image", src: "/images/gallery i,g.jpg", alt:"Event"},
    { type: "image", src: "/images/gallery img 2.jpg", alt:"Event"}
  ];

  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleClose = () => setSelectedMedia(null);
  const handleShow = (media) => setSelectedMedia(media);

  return (
    <div id="gallery" className="gallery-container">
      <h2 className="gallery-heading">Gallery</h2>

      <div className="gallery-grid">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleShow(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <video src={item.src} muted />
            )}
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {selectedMedia && (
        <div className="modal-overlay" onClick={handleClose}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt={selectedMedia.alt} />
            ) : (
              <video src={selectedMedia.src} controls autoPlay />
            )}
            <button className="btn-close" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
