import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/RoomDetail.css';

const RoomDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="room-detail">
        <section className="image-slider">
          <img src="placeholder.jpg" alt="Room" />
        </section>
        <section className="description">
          <h1>Room Title</h1>
          <p>Description of the room...</p>
        </section>
        <section className="amenities">
          <h2>Amenities</h2>
          <ul>
            <li>WiFi</li>
            <li>Parking</li>
          </ul>
        </section>
        <section className="map">
          <h2>Location</h2>
          <div>Map placeholder</div>
        </section>
        <section className="owner-info">
          <h2>Owner Information</h2>
          <p>Name: John Doe</p>
          <p>Contact: 123-456-789</p>
        </section>
        <button>Schedule Viewing</button>
        <button>Rent Now</button>
      </div>
      <Footer />
    </div>
  );
};

export default RoomDetail;