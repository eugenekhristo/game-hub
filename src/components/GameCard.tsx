import { Card, Heading, Image } from '@chakra-ui/react';
import type { Game } from './hooks/useGames';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={24} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIconList key={game.id} platforms={game.parent_platforms} />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
