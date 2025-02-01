import React from 'react';
import './loader.css';

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="loader" />
    </div>
  );
};

export default Loader;
