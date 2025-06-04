import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardWrapper from './GameCardWrapper';

function GameGrid() {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="32px" padding="16px">
        {isLoading &&
          skeletons.map((item) => (
            <GameCardWrapper>
              <GameCardSkeleton key={item} />
            </GameCardWrapper>
          ))}
        {games.map((game) => (
          <GameCardWrapper>
            <GameCard key={game.id} game={game} />
          </GameCardWrapper>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
