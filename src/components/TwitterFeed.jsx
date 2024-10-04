import React, { useEffect } from 'react';

const TwitterFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="twitter-feed" >
      <h2 style={{  textAlign: 'center' }}>Latest Tweets</h2>
      <div className="twitter-embed">
        <a 
          className="twitter-timeline"
          href="https://twitter.com/aciebabyy"
          data-theme="light"
          data-link-color="#1da1f2"
          data-border-color="#e1e8ed"
          data-chrome="noheader nofooter noborders"
          data-tweet-limit="3"
        >
          Tweets by Aciebabyy
        </a>
      </div>
    </div>
  );
};

export default TwitterFeed;
