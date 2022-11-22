import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      { showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Leobaldo Alcantara Neto</Text>
          <Text color='gray.300' fontSize='small'>
            leobaldoneto@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Leobaldo Alcantara Neto'
        src='https://github.com/leobaldoneto.png'
      />
    </Flex>
  );
}