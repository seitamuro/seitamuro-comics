import { Properties } from 'csstype';
import { useState } from 'react';
import styled from 'styled-components';

type _CustomButtonProps = {
  toggle?: boolean;
  color?: Properties['color'];
};

const _CustomButton = styled.button<_CustomButtonProps>`
  color: ${(props) => (props.toggle ? 'red' : props.color)};
`;

type CustomButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
} & Omit<_CustomButtonProps, 'toggle'>;

export const CustomButton = ({ onClick, ...rest }: CustomButtonProps) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
    onClick();
  };

  return (
    <_CustomButton
      onClick={handleClick}
      toggle={toggle}
      {...rest}
    />
  );
};
