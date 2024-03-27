import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';

export const ClientApp: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <div>Count: {counter}</div>
    </>
  );
};
