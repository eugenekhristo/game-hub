import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 89 ? 'green' : score > 84 ? 'yellow' : 'red';

  return (
    <Badge fontSize="14px" padding="5px 8px" borderRadius="8px" colorPalette={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
