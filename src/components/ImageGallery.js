import React from 'react';

function ImageGallery() {
  // Sample data for images and descriptions
  const images = [
    { src: '/images/slika1.jpg', description: 'Image 1 Description' },
    { src: '/images/slika2.jpg', description: 'Image 2 Description' },
    { src: '/images/slika3.jpg', description: 'Image 3 Description' },
    { src: '/images/slika4.jpg', description: 'Image 4 Description' }
    // Add more images as needed
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {images.map((image, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <img src={image.src} alt={image.description} style={{ width: '300px', height: '200px' }} />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
