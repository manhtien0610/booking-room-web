import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <h1>Owner Dashboard</h1>
        <ul>
          <li>Manage Listings</li>
          <li>Add Room</li>
          <li>View Bookings</li>
          <li>Chat</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;