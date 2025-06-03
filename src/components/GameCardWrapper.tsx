import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function GameCardWrapper({ children }: Props) {
  return (
    <Box width="430px" height="400px">
      {children}
    </Box>
  );
}

export default GameCardWrapper;
