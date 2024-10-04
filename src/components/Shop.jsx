import React, { useState, useEffect } from 'react';

export const apiKey = 'Xt4D6lMWKyFObOxW4PkhlJbubXxvG7kH90CC4nsd6Cgfj8SBgtQDgpjB';
export const apiUrl = 'https://api.pexels.com/v1/search?query=';

const Shop = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('Polo Ralph Lauren');
  const [isLoading, setIsLoading] = useState(true);

  const fetchImages = async (query) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}${query}`, {
        headers: {
          Authorization: apiKey,
        },
      });
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const json = await response.json();
      const picHolder = json.photos.map((pic) => pic.src.medium);
      setImages(picHolder);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.searchInput.value;
    setSearchQuery(query);
  };

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <p>Check out the latest merchandise and products here!</p>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Search products"
          defaultValue="Polo Ralph Lauren"
        />
        <button type="submit" id="searchSubmit">Search</button>
      </form>

      <div id="gallery" className="image-gallery">
        {isLoading ? (
          <p>Loading images...</p>
        ) : (
          images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className="gallery-image"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
