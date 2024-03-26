import { Link } from 'react-router-dom';

export const TopPage: React.FC = () => {
  return (
    <>
      <div>This is TopPage.</div>
      <div>
        <Link to="/not-found">Go to Not Found Page</Link>
      </div>
    </>
  );
};
