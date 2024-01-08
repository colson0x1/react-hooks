import React, { useState } from 'react';

function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const [isHeartbroken, setIsHeartbroken] = useState(false);

  const toggleIsHapy = () => {
    setIsHappy(!isHappy);
  };

  const toggleIsBroken = () => {
    setIsHeartbroken(!isHeartbroken);
  };

  return (
    <div>
      <h1 onClick={toggleIsHapy}>{isHappy ? '😄' : '😢'}</h1>
      <h1 onClick={toggleIsBroken}>{isHeartbroken ? '💔' : '❤️ '}</h1>
    </div>
  );
}

export default Toggler;
