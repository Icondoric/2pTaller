import React from 'react';
import './Badge.css'; 

const Badge = () => {
  return (
    <div className="badge-container">
      <img className="badge-image" src="/UserB1.png" alt="Imagen 1" />
      <img className="badge-image" src="/UserB2.png" alt="Imagen 2" />
    </div>
  );
};

export default Badge;
