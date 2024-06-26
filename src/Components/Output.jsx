import React from 'react';
import { useSelector } from 'react-redux';

const Output = () => {
  const text = useSelector((state) => state.text);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default Output;
