import styled from 'styled-components';
import { Color } from '../styles/variables';

type SeparatorType = 'dashed' | 'dotted' | 'solid' | 'rounded';

const _DashedSeparator = styled.hr`
  border-top: 3px dashed ${Color.MONO_40};
`;

const _DottedSeparator = styled.hr`
  border-top: 3px dotted ${Color.MONO_40};
`;

const _SolidSeparator = styled.hr`
  border-top: 3px solid ${Color.MONO_40};
`;

const _RoundedSeparator = styled.hr`
  border-top: 8px solid ${Color.MONO_40};
  border-radius: 5px;
`;

type Props = {
  type?: SeparatorType;
};

export const Separator: React.FC<Props> = ({ type = 'solid' }) => {
  switch (type) {
    case 'dashed':
      return <_DashedSeparator />;
    case 'dotted':
      return <_DottedSeparator />;
    case 'solid':
      return <_SolidSeparator />;
    case 'rounded':
      return <_RoundedSeparator />;
  }
};
