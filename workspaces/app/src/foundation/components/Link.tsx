import { Link as _Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to?: string;
};

export const Link: React.FC<Props> = ({ children, to, ...props }) => {
  return (
    <_Link
      to={to}
      {...props}
    >
      {children}
    </_Link>
  );
};
