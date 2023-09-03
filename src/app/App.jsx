import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Gallery from '../components/gallery/Gallery';
import { getGalleries } from '../redux/gallerySlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const galleryData = useSelector(state => state.galleryState);
  const handleGetGalleries = () => {
    dispatch(getGalleries());
  };
  return (
    <div className="App">
      <button onClick={handleGetGalleries}>click</button>
      <Gallery data={galleryData} />
    </div>
  );
}

export default App;
