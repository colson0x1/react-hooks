import React, { useState } from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
  /*
   * No needed after useToggler hooks is used!
  const [isHappy, setIsHappy] = useState(true);
  const [isHeartbroken, setIsHeartbroken] = useState(false);

  const toggleIsHapy = () => {
    setIsHappy(!isHappy);
  };

  const toggleIsBroken = () => {
    setIsHeartbroken(!isHeartbroken);
  };
  */

  // Using useToggler hook
  // WE capture the two things we get back from array
  // 1. The actual piece of state
  // 2. & Function to toggle that piece of state
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? '😄' : '😢'}</h1>
      <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? '💔' : '❤️ '}</h1>
    </div>
  );
}

export default Toggler;
