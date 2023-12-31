import React from 'react';
import './imagecard.css';

const ImageCard = () => {
  return (
    <div class="card">
      <img src="https://picsum.photos/200/300" alt="Avatar" style={{ width: '100%' }} />
      <div class="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

export default ImageCard;
