import React from 'react';
import './Nick.css'

const Nick = ({ text, fontType }) => {
  return (
    <span className={fontType === 'font1' ? 'nick-white' : 'nick-gray'}>{text}</span>
  );
};

export default Nick;
