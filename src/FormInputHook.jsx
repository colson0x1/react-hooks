import React from 'react';
import useFormState from './hooks/useFormState';

export default function FormInputHook() {
  const [email, updateEmail, resetEmail] = useFormState('');

  return (
    <div>
      <h1>Using useFormState hooks: {email}</h1>
      <input type='text' value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Submit</button>
    </div>
  );
}
