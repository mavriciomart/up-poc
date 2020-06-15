import React from 'react';
import './style.css';

const SkeletonCard = ({ size }) => {
  return (
    <div className={`skeleton-card ${size === 'large' ? 'large' : 'small'}`} />
  );
};

export default SkeletonCard;
