import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Club Info */}
        <div className="footer-section">
          <h3>RoboClub</h3>
          <p>First Robotics and Electronics club at our college</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            Email:{" "}
            <a href="mailto:roboclub@example.com">roboclub@example.com</a>
          </p>

          <p>
            WhatsApp: <a href="#"> +91-9421258917 </a> Vrushabhkumar Khade
          </p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          
            
              <div className="social-icons">
                <i className="bi bi-instagram">
                  <a
                    href="https://www.instagram.com/meswcoe_roboclub?utm_source=qr&igsh=ODNtYXA3Y2ZrZmFh"
                    target="_blank"
                    rel="noreferrer"
                  >Instagram   </a>  
                </i>
                <br></br>
                <i className="bi bi-linkedin">
                  <a
              href="https://www.linkedin.com/in/roboclub-meswcoe-bb9900255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >Linkedin
              </a>
                </i>
              </div>

             
          
        </div>

        {/* QR Code */}
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RoboClub. All rights reserved.</p>
      </div>
    </footer>
  );
}
