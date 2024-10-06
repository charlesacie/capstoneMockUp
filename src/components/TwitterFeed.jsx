import React, { useEffect } from 'react';

const TwitterFeed = () => {
  useEffect(() => {
    // Load the Twitter script only once
    const scriptExists = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
    if (!scriptExists) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Ensure that the widget is re-rendered only once
    const twitterWidget = window.twttr;
    if (twitterWidget) {
      twitterWidget.widgets.load();
    }
  }, []);

  return (
    <div className="twitter-feed">
      <h2 style={{ textAlign: 'center' }}>Latest Tweets</h2>
      
      {/* Embedded Twitter Timeline */}
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
      
      {/* Embedded Hashtag Button */}
      <div className="twitter-hashtag">
        <a 
          href="https://twitter.com/intent/tweet?button_hashtag=aciebabyy&ref_src=twsrc%5Etfw"
          className="twitter-hashtag-button"
          data-show-count="false"
        >
          Tweet #aciebabyy
        </a>
      </div>
    </div>
  );
};

export default TwitterFeed;
