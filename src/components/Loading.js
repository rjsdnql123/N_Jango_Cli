import React from 'react';
import './Loading.css';

const Loading = ({ isLoading }) => {
  return (
    <div className={isLoading ? 'loading-on' : 'loading-off'}>
      <div className="back" />
      <h1
        style={{
          fontSize: '5rem',
          fontFamily: 'Fredoka One',
        }}
      >
        Njango
      </h1>
    </div>
  );
};

export default Loading;
