import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Carousel from './components/Carousel';
import YouTubeContainer from './components/YouTubeContainer';
import SignUpForm from './components/SignUpForm';
import Music from './components/Music';
import Videos from './components/Videos';
import Shop from './components/Shop';
import SocialMediaFeeds from './components/SocialMediaFeeds'; // Import SocialMediaFeeds

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <SocialMediaFeeds /> {/* Use SocialMediaFeeds component */}
              <YouTubeContainer />
              <AboutMe />
              <SignUpForm />
            </>
          } />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
