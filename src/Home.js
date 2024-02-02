import React from 'react';
import Header from './Header';
import ProjectSection from './ProjectSection';
import Footer from './Footer';
import './Home.css';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <main className="home-main">
       
        <ProjectSection />
        </main>
      <Footer />
    </div>
  );
};

export default Home;
