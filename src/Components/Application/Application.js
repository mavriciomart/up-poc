import React from 'react';
import { SkeletonCard } from './../SkeletonCard';
import './index.css';

const Application = () => (
  <div className='application' id='user-portal'>
    <div className='application-title'>
      <h1>Home</h1>
    </div>
    <div className='content'>
      {['small', 'small', 'small', 'large', 'large', 'large', 'large'].map(
        (size) => (
          <SkeletonCard size={size} />
        )
      )}
    </div>
  </div>
);

export default Application;
