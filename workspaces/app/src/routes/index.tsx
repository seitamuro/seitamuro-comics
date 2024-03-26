import { Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '../pages/NotFoundPage';
import { TopPage } from '../pages/TopPage';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<TopPage />} path="/" />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
};
