import React from 'react';
import '../css/Profile.css';
import profileLogo from '../pic/profilelogo.png'; 


function Profile() {
  // Hardcoded profile data related to cooperative
  const profileData = {
    name: 'Ilham Setia Bhakti',
    memberID: '123456789',
    email: 'ilhamsetia@gmail.com',
    photo: profileLogo, // Replace with actual photo path
    membershipStart: 'January 1, 2020',
    benefits: [
      'Associate Member',
      'Joined December 12, 2021',
    ],
    contact: {
      phone: '123-456-7890',
      address: '123 Main St, City, Country',
    },
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profileData.photo} alt="Profile" className="profile-photo" />
        <div className="profile-info">
          <h1>{profileData.name}</h1>
          <p>Member ID: {profileData.memberID}</p>
          <p>Email: {profileData.email}</p>
          <p>Membership Start: {profileData.membershipStart}</p>
        </div>
      </div>

      <div className="profile-body">
        <div className="benefits-section">
          <h2>Membership Details</h2>
          <ul>
            {profileData.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="contact-section">
          <h2>Contact Information</h2>
          <p>Phone: {profileData.contact.phone}</p>
          <p>Address: {profileData.contact.address}</p>
        </div>
      </div>

      <div className="profile-actions">
        <button className="print-btn" onClick={handlePrint}>Print Profile</button>
      </div>
    </div>
  );
}

export default Profile;