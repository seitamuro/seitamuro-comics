import type * as CSS from 'csstype';
import styled from 'styled-components';

const _Flex = styled.div<{
  $align?: CSS.Property.AlignItems;
  $direction?: CSS.Property.FlexDirection;
  $flexGrow?: CSS.Property.FlexGrow;
  $flexShrink?: CSS.Property.FlexShrink;
  $gap?: number;
  $justify?: CSS.Property.JustifyContent;
  $p?: number;
  $pb?: CSS.Property.PaddingBottom;
  $pl?: CSS.Property.PaddingLeft;
  $position?: CSS.Property.Position;
  $pr?: CSS.Property.PaddingRight;
  $pt?: CSS.Property.PaddingTop;
  $px?: number;
  $py?: number;
}>`
  align-items: ${(props) => props.$align};
  display: flex;
  flex-direction: ${(props) => props.$direction};
  flex-grow: ${(props) => props.$flexGrow};
  flex-shrink: ${(props) => props.$flexShrink};
  gap: ${(props) => props.$gap};
  justify-content: ${(props) => props.$justify};
  padding: ${(props) => props.$p};
  padding-bottom: ${(props) => props.$pb};
  padding-left: ${(props) => props.$pl};
  padding-right: ${(props) => props.$pr};
  padding-top: ${(props) => props.$pt};
  position: ${(props) => props.$position};
  padding: ${(props) => `${props.$py}px ${props.$px}px`};
`;

type Props = {
  align: CSS.Property.AlignItems;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  direction?: CSS.Property.FlexDirection;
  flexGrow?: CSS.Property.FlexGrow;
  flexShrink?: CSS.Property.FlexShrink;
  gap?: number;
  justify: CSS.Property.JustifyContent;
  p?: number;
  pb?: CSS.Property.PaddingBottom;
  pl?: CSS.Property.PaddingLeft;
  position?: CSS.Property.Position;
  pr?: CSS.Property.PaddingRight;
  pt?: CSS.Property.PaddingTop;
  px?: number;
  py?: number;
};

export const Flex: React.FC<Props> = ({
  align,
  as,
  children,
  direction,
  flexGrow,
  flexShrink,
  gap,
  justify,
  p,
  pb,
  pl,
  position,
  pr,
  pt,
  px,
  py,
}) => {
  return (
    <_Flex
      $align={align}
      as={as}
      $direction={direction}
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      $gap={gap}
      $justify={justify}
      $p={p}
      $pb={pb}
      $pl={pl}
      $position={position}
      $pr={pr}
      $pt={pt}
      $px={px}
      $py={py}
    >
      {children}
    </_Flex>
  );
};
