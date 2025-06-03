import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

function GameCardSkeleton() {
  return (
    <Card.Root borderRadius={24} overflow="hidden">
      <Skeleton height="285px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeleton;
