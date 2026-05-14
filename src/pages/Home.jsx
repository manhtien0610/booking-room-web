import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <section className="banner">
        <h1>Welcome to Room Rental</h1>
        <p>Find your perfect room</p>
      </section>
      <section className="featured-rooms">
        <h2>Featured Rooms</h2>
        {/* Placeholder for room cards */}
        <div>Room 1</div>
        <div>Room 2</div>
      </section>
      <section className="new-rooms">
        <h2>Newly Listed Rooms</h2>
        {/* Placeholder */}
        <div>New Room 1</div>
        <div>New Room 2</div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;