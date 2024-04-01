import { useState } from 'react';
import { CustomButton } from '../../foundation/components/CustomButton';

export const CustomStylePage = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div>clicked: {`${clicked}`}</div>
      <CustomButton onClick={() => setClicked((prev) => !prev)}>Click me</CustomButton>
      <CustomButton
        onClick={() => setClicked((prev) => !prev)}
        color={'blue'}
      >
        Click me
      </CustomButton>
    </div>
  );
};
