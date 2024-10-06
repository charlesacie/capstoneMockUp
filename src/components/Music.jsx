import React, { useState } from 'react';
import axios from 'axios';

const SPOTIFY_CLIENT_ID = '4b947014e3ad4c888702eede1b6464ce';
const SPOTIFY_CLIENT_SECRET = 'b2441e9334fd40debd616b294ebe418e';

const Music = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [token, setToken] = useState('');

  const getToken = async () => {
    const result = await axios.post('https://accounts.spotify.com/api/token', null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET),
      },
      params: {
        grant_type: 'client_credentials',
      },
    });
    setToken(result.data.access_token);
  };

  const createPlaylist = async (playlistName) => {
    await getToken();
    const result = await axios.post(
      `https://api.spotify.com/v1/users/your_user_id/playlists`,
      {
        name: playlistName,
        description: 'New playlist description',
        public: false,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(result.data);
  };

  const handleCreatePlaylist = async () => {
    if (playlistName) {
      await createPlaylist(playlistName);
      setPlaylistName('');
    } else {
      alert('Please enter a playlist name.');
    }
  };

  return (
    <div className="music-page">
      <h1>Music</h1>
      <p>Welcome to the music page. Explore the latest tracks and albums here!</p>

     

      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/6sMBHbsFJlcSvf3J46iDn6?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Music;
