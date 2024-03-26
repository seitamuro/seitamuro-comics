import { Route, Routes } from 'react-router-dom';

import { CounterPage } from '../pages/CounterPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { TopPage } from '../pages/TopPage';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<TopPage />} path="/" />
      <Route element={<CounterPage />} path="/counter" />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
};
