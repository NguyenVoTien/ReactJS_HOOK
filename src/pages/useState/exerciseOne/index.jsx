import { useState } from 'react';

const ExerciseOneUseState = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={decrement}>Decrement - </button>
        <button onClick={increment}>Increment +</button>
      </div>
    </>
  );
};

export default ExerciseOneUseState;
