import React from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const RestaurantDetails = () => {
  return (
    <div>
      <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '680px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
        >
        <Flex flex={1}>
          <Image
            objectFit="cover"
            boxSize="100%"
            borderRadius='1rem'
            src={
              'https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9.jpg'
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          p={1}
          pt={2}
          >
          <Heading fontSize={'2xl'} fontFamily={'body'} ml='1.5rem'>
            Vanilla cake
          </Heading>
          <Text
            fontWeight={500} color={'#43525d'} size="sm" 
            px={3} pl={'1.5rem'}
            >
            Place
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Box
              px={2}
              py={1}
              fontWeight={'700'}>
              <Text
            fontWeight={600} 
            color={'#d69778'}
            ml='-3rem'
            >
            ⦼ 4 Offers trending
          </Text>
            </Box>
            <Box
              px={2}
              py={1}
              fontWeight={'700'}>
              ⭐︎ 4.5
            </Box>
          </Stack>
          <Text
            fontWeight={500} color={'gray.500'} size="sm" 
            px={3} pl={'1.5rem'}
            >
            Actress, musician, songwriter and artist.
          </Text>
        </Stack>
      </Stack>
    </Center>
    </div>
  )
}

export default RestaurantDetails;