import React from 'react';
import TwitterFeed from './TwitterFeed';
import InstagramFeed from './InstagramFeed';
import './SocialMediaFeeds.css'; // Include your styles

const SocialMediaFeeds = () => {
  return (
    <div className="social-media-feeds">
      <div className="twitter-section">
        <TwitterFeed /> {/* Twitter Widget */}
      </div>
      <div className="instagram-section">
        <InstagramFeed /> {/* Instagram Widget */}
      </div>
    </div>
  );
};

export default SocialMediaFeeds;
