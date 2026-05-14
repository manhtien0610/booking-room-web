import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RoomCard.css';

const RoomCard = () => {
  return (
    <div className="room-card">
      <img src="placeholder.jpg" alt="Room" />
      <h3>$500/month</h3>
      <p>123 Main St, District 1</p>
      <Link to="/room/1">
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default RoomCard;