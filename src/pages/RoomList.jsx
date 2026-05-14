import React from 'react';
import Navbar from '../components/Navbar';
import RoomCard from '../components/RoomCard';
import Footer from '../components/Footer';
import '../styles/RoomList.css';

const RoomList = () => {
  return (
    <div>
      <Navbar />
      <div className="room-list-container">
        <aside className="filters">
          <h3>Filters</h3>
          <div>
            <label>Price:</label>
            <input type="range" min="0" max="10000" />
          </div>
          <div>
            <label>Area:</label>
            <input type="number" placeholder="sqm" />
          </div>
          <div>
            <label>Location:</label>
            <select>
              <option>All</option>
              <option>District 1</option>
              <option>District 2</option>
            </select>
          </div>
          <div>
            <label>Amenities:</label>
            <input type="checkbox" /> WiFi
            <input type="checkbox" /> Parking
          </div>
        </aside>
        <main className="rooms">
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default RoomList;