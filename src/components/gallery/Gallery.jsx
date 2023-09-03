import React, { useEffect } from 'react';
import ImageCard from '../imagecard/ImageCard';
import './gallery.css';

const Gallery = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div class="container">
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </div>
  );
};

export default Gallery;
