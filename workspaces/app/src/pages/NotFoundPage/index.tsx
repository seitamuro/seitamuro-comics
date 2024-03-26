import { useLocation } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div>
        <code>{pathname}</code> is not found.
      </div>
    </>
  );
};
