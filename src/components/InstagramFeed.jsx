import React, { useEffect } from 'react';

const InstagramFeed = () => {
  useEffect(() => {
    // Check if the script is already loaded
    const scriptExists = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (!scriptExists) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If the script exists, manually reload the Instagram widget
      window.instgrm && window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="instagram-feed">
      <h2>My Instagram Posts</h2>
      <div className="instagram-posts">
        <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C3b5MRqMeLE/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14">
          <div>
            <a href="https://www.instagram.com/reel/C3b5MRqMeLE/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel="noopener noreferrer">View this post on Instagram</a>
          </div>
        </blockquote>

        <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C3VQ9OQOI1N/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14">
          <div>
            <a href="https://www.instagram.com/reel/C3VQ9OQOI1N/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel="noopener noreferrer">View this post on Instagram</a>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default InstagramFeed;
