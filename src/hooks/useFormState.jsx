import { useState } from 'react';

export const useFormState = (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
};

export default useFormState;
