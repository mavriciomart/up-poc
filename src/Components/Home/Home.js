import React from 'react';
import { SkeletonCard } from './../SkeletonCard';
import './styles.css';
const Home = () => {
  return (
    <>
      <div className='application-title'>
        <h1>Home</h1>
      </div>
      <div className='content'>
        <div>
          {['small', 'small', 'small'].map((size) => (
            <SkeletonCard size={size} />
          ))}
        </div>
        <div>
          {['large', 'large', 'large', 'large'].map((size) => (
            <SkeletonCard size={size} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
