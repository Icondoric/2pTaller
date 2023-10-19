import React from 'react';
import Avatar from '../atoms/Avatar';
import Badge from '../atoms/Badge';
import Nick from '../atoms/Nick';
import './Haha.css'; 

const Haha = () => {
  return (
    <div className="haha-container">
      <img src="/BN.png" alt="Imagen BN"  /> 
      <Avatar />
      <Badge />
      <div className="nick-container">
        <Nick text="burak" fontType="font1" className="nick-white" />
        <Nick text="#0666" fontType="font2" className="nick-gray" />
      </div>
    </div>
  );
};

export default Haha;
