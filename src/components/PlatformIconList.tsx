import { FaWindows, FaPlaystation, FaXbox, FaApple, FaAndroid, FaLinux } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendogamecube } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import type { Platform } from './hooks/useGames';
import type { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendogamecube,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
      {platforms.map(({ platform }) => (
        <Icon as={iconMap[platform.slug]} color={'gray.500'} />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
