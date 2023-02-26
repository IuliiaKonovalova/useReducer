import React, { useState } from 'react';

const HomePage = () => {

  const [ count, setCount ] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  }

  const decrement = () => {
    setCount(prev => prev - 1);
  }

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button onClick={decrement}>-</button>
          <span>{count}</span>
        <button onClick={increment}>+</button>

      </div>
    </div>
  );
}

export default HomePage;