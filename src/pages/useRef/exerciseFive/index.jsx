import { useRef } from 'react';

const ExerciseFiveUseRef = () => {
  const valueRef = useRef();

  const handleValue = () => {
    alert(`Value: ${valueRef.current.value}`);
  };
  return (
    <>
      <input type="text" ref={valueRef} onChange={(e) => e.target.value} />
      <button onClick={handleValue}> Show Value </button>
    </>
  );
};

export default ExerciseFiveUseRef;
