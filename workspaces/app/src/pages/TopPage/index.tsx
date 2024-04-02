import { useId } from 'react';

import { FeatureCard } from '../../features/feature/components/FeatureCard';
import { RankingCard } from '../../features/ranking/components/RankingCard';
import { Box } from '../../foundation/components/Box';
import { Flex } from '../../foundation/components/Flex';
import { Spacer } from '../../foundation/components/Spacer';
import { Text } from '../../foundation/components/Text';
import { Color, Space, Typography } from '../../foundation/styles/variables';
import { CoverSection } from './internal/CoverSection';

export const TopPage: React.FC = () => {
  const pickupA11yId = useId();
  const rankingA11yId = useId();

  const featureList = [
    { id: 1, book: { id: 1, title: 'タイトル1', description: '説明1' } },
    { id: 2, book: { id: 2, title: 'タイトル2', description: '説明2' } },
    { id: 3, book: { id: 3, title: 'タイトル3', description: '説明3' } },
  ];
  const rankingList = [
    { id: 1, book: { id: 1, title: 'タイトル1', description: '説明1' } },
    { id: 2, book: { id: 2, title: 'タイトル2', description: '説明2' } },
    { id: 3, book: { id: 3, title: 'タイトル3', description: '説明3' } },
  ];

  return (
    <Flex
      align="flex-start"
      direction="column"
      gap={Space * 2}
      justify="center"
      p={Space * 2}
    >
      <Box
        as="header"
        maxWidth="100%"
        width="100%"
      >
        <CoverSection />
      </Box>
      <Box
        as="main"
        maxWidth="100%"
        width="100%"
      >
        <Box
          aria-labelledby={pickupA11yId}
          as="section"
          maxWidth="100%"
          mt={16}
          width="100%"
        >
          <Text
            as="h2"
            color={Color.MONO_100}
            id={pickupA11yId}
            typography={Typography.NORMAL20}
            weight="bold"
          >
            ピックアップ
          </Text>
          <Spacer height={Space * 2} />
          <Box
            maxWidth="100%"
            overflowX="scroll"
            overflowY="hidden"
          >
            <Flex
              align="stretch"
              gap={Space * 2}
              justify="flex-start"
              direction="row"
            >
              {featureList.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  bookId={feature.book.id}
                />
              ))}
            </Flex>
          </Box>
        </Box>

        <Spacer height={Space * 4} />

        <Box
          aria-labelledby={rankingA11yId}
          as="section"
          maxWidth="100%"
          width="100%"
        >
          <Text
            as="h2"
            color={Color.MONO_100}
            id={rankingA11yId}
            typography={Typography.NORMAL20}
            weight="bold"
          >
            ランキング
          </Text>
          <Spacer height={Space * 2} />
          <Box
            maxWidth="100%"
            overflowX="hidden"
            overflowY="hidden"
          >
            <Flex
              align="center"
              as="ul"
              direction="column"
              justify="center"
            >
              {rankingList.map((ranking) => (
                <RankingCard
                  key={ranking.id}
                  bookId={ranking.book.id}
                />
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
