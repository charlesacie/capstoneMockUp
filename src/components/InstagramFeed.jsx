import React, { useEffect } from 'react';

const InstagramFeed = () => {
  useEffect(() => {
    // Load the Instagram widget script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="instagram-feed" style={{ padding: '20px', backgroundColor: '#f5f8fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2>My Instagram Posts</h2>

      <div className="instagram-posts" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C3b5MRqMeLE/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '300px', minWidth: '200px', padding: '0', width: 'calc(100% - 2px)' }}>
          <div style={{ padding: '16px' }}>
            <a href="https://www.instagram.com/reel/C3b5MRqMeLE/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel="noopener noreferrer">View this post on Instagram</a>
          </div>
        </blockquote>

        <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C3VQ9OQOI1N/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '300px', minWidth: '200px', padding: '0', width: 'calc(100% - 2px)' }}>
          <div style={{ padding: '16px' }}>
            <a href="https://www.instagram.com/reel/C3VQ9OQOI1N/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel="noopener noreferrer">View this post on Instagram</a>
          </div>
        </blockquote>

        <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C3PkaSuO3V-/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '300px', minWidth: '200px', padding: '0', width: 'calc(100% - 2px)' }}>
          <div style={{ padding: '16px' }}>
            <a href="https://www.instagram.com/reel/C3PkaSuO3V-/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel="noopener noreferrer">View this post on Instagram</a>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default InstagramFeed;
