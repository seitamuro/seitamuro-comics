import styled from 'styled-components';

import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { Image } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Separator } from '../../../foundation/components/Separator';
import { Spacer } from '../../../foundation/components/Spacer';
import { Text } from '../../../foundation/components/Text';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const _Wrapper = styled.li`
  width: 100%;
  list-style-type: none;
`;

const _Link = styled(Link)`
  width: 100%;
`;

const _ImgWrapper = styled.div`
  width: 96px;
  height: 96px;
  > img {
    border-radius: ${Radius.SMALL};
  }
`;

const _AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  > img {
    border-radius: 50%;
  }
`;

type Props = {
  bookId: number;
};

export const RankingCard: React.FC<Props> = ({ bookId }) => {
  const data = {
    1: { id: 1, title: 'タイトル1', description: '説明1', author: '著者1' },
    2: { id: 2, title: 'タイトル2', description: '説明2', author: '著者2' },
    3: { id: 3, title: 'タイトル3', description: '説明3', author: '著者3' },
  };
  const book = data[bookId];

  return (
    <_Wrapper>
      <_Link to={`/books/${bookId}`}>
        <Spacer height={Space * 1.5} />
        <Flex
          align="flex-start"
          gap={Space * 2.5}
          justify="flex-start"
        >
          <_ImgWrapper>
            <Image
              alt={book.title}
              height={96}
              objectFit="cover"
              src={`https://source.unsplash.com/random?query=${book.title}`}
              width={96}
            />
          </_ImgWrapper>
          <Box width="100%">
            <Flex
              align="flex-start"
              direction="column"
              gap={Space * 1}
              justify="flex-start"
            >
              <Text
                color={Color.MONO_100}
                typography={Typography.NORMAL16}
                weight="bold"
              >
                {book.title}
              </Text>
              <Text
                color={Color.MONO_100}
                typography={Typography.NORMAL12}
              >
                {book.description}
              </Text>
            </Flex>

            <Spacer height={Space * 1} />

            <Flex
              align="center"
              gap={Space * 1}
              justify="flex-end"
            >
              <_AvatarWrapper>
                <Image
                  alt={`${book.author}`}
                  height={32}
                  objectFit="cover"
                  src={`https://source.unsplash.com/random/photos`}
                  width={32}
                />
              </_AvatarWrapper>
              <Text
                color={Color.MONO_80}
                typography={Typography.NORMAL12}
              >
                {book.author}
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Spacer height={Space * 1} />

        <Flex
          align="center"
          justify="flex-end"
        >
          <Text
            color={Color.Secondary}
            typography={Typography.NORMAL14}
            weight="bold"
          >
            この漫画を読む
          </Text>
        </Flex>
        <Spacer height={Space * 1.5} />
        <Separator />
      </_Link>
    </_Wrapper>
  );
};
