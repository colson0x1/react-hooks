import React, { useState, useEffect } from 'react';

function Trigger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Triggered: ${count} times`;
  });

  return (
    <button onClick={() => setCount(count + 1)}>Trigger count {count}</button>
  );
}

export default Trigger;
