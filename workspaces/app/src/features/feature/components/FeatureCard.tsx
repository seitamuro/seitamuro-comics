import styled from 'styled-components';

import { Image } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Text } from '../../../foundation/components/Text';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const _Wrapper = styled(Link)`
  display: grid;
  gap: ${Space * 1}px;
  background-color: ${Color.MONO_A};
  padding: ${Space * 1.5}px;
  border-radius: ${Radius.SMALL}:
  grid-template-columns: auto 1fr;
  flex-shrink: 0;
  border: 1px solid ${Color.MONO_30};
`;

const _ContentWrapper = styled.div`
  display: grid;
  gap: ${Space * 1}px;
  max-width: 200px;
  width: 100%;
`;

const _ImageWrapper = styled.div`
  width: 96px;
  height: 96px;
  > img {
    border-radius: ${Radius.SMALL};
  }
`;

type Props = {
  bookId: number;
};

export const FeatureCard: React.FC<Props> = (props) => {
  const data = {
    1: { title: 'タイトル1', description: '説明1', author: '著者1' },
    2: { title: 'タイトル2', description: '説明2', author: '著者2' },
    3: { title: 'タイトル3', description: '説明3', author: '著者3' },
  };
  const book = data[props.bookId];

  return (
    <_Wrapper to={`/books/${props.bookId}`}>
      <_ImageWrapper>
        <Image
          height={96}
          objectFit="cover"
          src={`https://source.unsplash.com/random?query=${book.title}`}
          width={96}
        />
      </_ImageWrapper>

      <_ContentWrapper>
        <Text
          color={Color.MONO_100}
          typography={Typography.NORMAL16}
          weight="bold"
        >
          {book.title}
        </Text>
        <Text
          as="p"
          color={Color.MONO_100}
          typography={Typography.NORMAL14}
        >
          {book.description}
        </Text>
        <Text
          color={Color.MONO_100}
          typography={Typography.NORMAL14}
        >
          {book.author.name}
        </Text>
      </_ContentWrapper>
    </_Wrapper>
  );
};
