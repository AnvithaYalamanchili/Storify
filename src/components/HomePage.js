// src/components/Home.js
import React from 'react';
import './Home.css'; // optional for styling
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home">
      <section className="hero">
        <h1>Welcome to Storify</h1>
        <p>Your secure cloud storage solution.</p>
        <a href="/register" className="cta-button">Get Started</a>
      </section>
    </div>
    </>
  );
};

export default Home;
