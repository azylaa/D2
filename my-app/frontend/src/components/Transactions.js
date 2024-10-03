import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../css/Transactions.css';
import profileLogo from '../pic/profilelogo.png';

function Transactions() {
  // Sample data for statistics and appointments
  const statistics = {
    laboratoryServices: 5, // Replace with actual data
    gymnasiumServices: 3,   // Replace with actual data
  };

  // Sample appointment data with status
  const appointments = [
    { id: 1, date: '2024-01-15', status: 'Finished' },
    { id: 2, date: '2024-02-20', status: 'Booked' },
    { id: 3, date: '2024-03-05', status: 'Finished' },
    { id: 4, date: '2024-03-25', status: 'Booked' },
  ];

  const [date, setDate] = useState(new Date());

  // Function to check if a date has booked appointments
  const isBooked = (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // Format date to 'YYYY-MM-DD'
    return appointments.some(appointment => appointment.date === formattedDate);
  };

  return (
    <div className="transactions">
      <h1>Your Transactions</h1>
      <p>Here are your recent transactions:</p>

      {/* Statistics Cards */}
      <div className="statistics">
        <div className="stat-card">
          <h2>Laboratory Services Availments</h2>
          <p>{statistics.laboratoryServices}</p>
        </div>
        <div className="stat-card">
          <h2>Gymnasium Services Availments</h2>
          <p>{statistics.gymnasiumServices}</p>
        </div>
      </div>

      {/* Appointments Calendar */}
      <div className="appointments">
        <h2>Your Appointments</h2>
        <h3>All Appointments</h3>
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id}>
              {appointment.date} - {appointment.status}
            </li>
          ))}
        </ul>

        {/* Calendar with indicators for booked appointments */}
        <div className="calendar-section">
          <h3>Appointment Calendar</h3>
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={({ date }) => {
              return isBooked(date) ? <span className="indicator">📅</span> : null;
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Transactions;