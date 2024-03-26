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
