import React from 'react';
import '../css/Landing.css';
import coopLogo from '../pic/cooplogo.png';
import secondLogo from '../pic/3.png'; 
import sampleImage from '../pic/labpic.jpg';
import gymImage from '../pic/gympic.jpg';
import headerImage from '../pic/lanyards.png'; 
import { useNavigate } from 'react-router-dom';
import profileLogo from '../pic/profilelogo.png';

const Member = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/memberdash');
    }; 
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="logo-container">
          <img src={coopLogo} alt="Coop Logo" className="coop-logo" />
          <img src={secondLogo} alt="Second Logo" className="second-logo" />
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products and Services</a></li>
            <li><a href="/allied-business">Allied Business</a></li>
            <li><a href="/membership">Membership</a></li>
            <li><a href="/branches">Branches</a></li>
            <li><a href="/faq">FAQ</a></li>
            {/* Replace Login button with Profile logo */}
            <li>
              <button className="profile-btn" onClick={handleClick} >
                <img src={profileLogo} alt="Profile" className="profile-icon" />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <img src={headerImage} alt="Header Background" className="header-image" />

      <main className="landing-content">
        <div className="content-wrapper">
          {/* First Section: Laboratory Services */}
          <div className="content-section">
            <div className="image-section">
              <img src={sampleImage} alt="Aisle Image" className="content-image" />
            </div>
            <div className="text-section">
              <h2>Laboratory Services</h2>
              <p>Our purpose is to provide commodities, dry goods, and services to members and non-members.</p>
              <button className="read-more-btn">Book an Appointment</button>
            </div>
          </div>

          {/* Second Section: Gymnasium Services */}
          <div className="content-section">
            <div className="image-section">
              <img src={gymImage} alt="Gymnasium Image" className="content-image" />
            </div>
            <div className="text-section">
              <h2>Gymnasium Services</h2>
              <p>Our purpose is to provide gym services to members and non-members.</p>
              <button className="read-more-btn">Book an Appointment</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={coopLogo} alt="Coop Logo" className="footer-logo" />
            <p>
              Head Office: Gregorio T. Lluch Sr. Ave, Pala-o Iligan City, 9200, Philippines <br />
              Phone: (063) 222-5574 <br />
              Email: msuiitmpc@msuicoop.org <br />
              Webmail, HR Max, IT Support Desk, e-Survey
            </p>
          </div>
          <div className="footer-section resources">
            <h4>Resources</h4>
            <ul>
              <li>FAQs</li>
              <li>Policy Guidelines</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>About</li>
              <li>Become a Member</li>
              <li>Loan Products</li>
              <li>Financial Services</li>
            </ul>
          </div>
          <div className="footer-section admin-links">
            <h4>Admin Links</h4>
            <ul>
              <li>Membership Management</li>
              <li>POS Management</li>
              <li>Loan Management</li>
              <li>Wellness Programs Management</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; MSU-IIT National Multi-Purpose Cooperative 2024 | Privacy Policy | Terms & Conditions</p>
        </div>
      </footer>
    </div>
  );
}

export default Member;