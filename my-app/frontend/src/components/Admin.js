import React from 'react';
import "../css/Admin.css"; 
import coopLogo from '../pic/cooplogo.png';
import secondLogo from '../pic/3.png'; 

function AdminPage() {
  return (
    <div className="admin-page">
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
            </ul>
          </nav>
        </header>

      <main className="admin-content">

        <section className="admin-actions">
          <div className="action-box">
            <h3>Manage Laboratory Services</h3>
            <p>Manage laboratory services offered by the cooperative.</p>
            <button className="action-btn">Go to Laboratory</button>
          </div>

          <div className="action-box">
            <h3>Manage Gymnasium Services</h3>
            <p>Manage gymnasium services offered by the cooperative.</p>
            <button className="action-btn">Go to Gymnasium</button>
          </div>
        </section>
      </main>

      <footer className="admin-footer">
        <p>&copy; 2024 MSU-IIT National Multi-Purpose Cooperative. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AdminPage;