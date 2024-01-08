import React, { useState } from 'react';

function CounterHooks() {
  /*
   * @ useState returns an array with two different pieces
   * 1. The piece of state (reference to the state itself)
   * 2. function to update that piece of state
   */
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>The Count Is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}

export default CounterHooks;
