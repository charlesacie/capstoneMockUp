import React, { useState } from 'react';


const Music = () => {
  const [playlistName, setPlaylistName] = useState('');

  const handleCreatePlaylist = async () => {
    if (playlistName) {
      await createPlaylist(playlistName); // Call the Spotify playlist creation function
      setPlaylistName(''); // Clear the input field after playlist creation
    } else {
      alert('Please enter a playlist name.');
    }
  };

  return (
    <div className="music-page">
      <h1>Music</h1>
      <p>Welcome to the music page. Explore the latest tracks and albums here!</p>

      {/* Input and button for creating Spotify playlist */}
      <div className="create-playlist">
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          placeholder="Enter playlist name"
        />
        <button onClick={handleCreatePlaylist}>Create Playlist</button>
      </div>
    </div>
  );
};

export default Music;
