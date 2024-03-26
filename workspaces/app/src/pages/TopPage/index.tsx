import { Link } from 'react-router-dom';

export const TopPage: React.FC = () => {
  return (
    <>
      <div>This is TopPage.</div>
      <ul>
        <li>
          <Link to="/counter">Go to Counter Page</Link>
        </li>
        <li>
          <Link to="/not-found">Go to Not Found Page</Link>
        </li>
      </ul>
    </>
  );
};
