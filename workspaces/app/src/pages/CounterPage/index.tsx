import { useState } from 'react';

export const CounterPage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>This is CounterPage.</div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Count Up</button>
        <div>Count: {count}</div>
      </div>
    </>
  );
};
