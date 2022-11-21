import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router';

const Restaurants = () => {
    const [data, setData] = useState();
    const navigate = useNavigate();


    const fetchData = async (token) => {   
        try {
            let res = await fetch('https://staging.fastor.in/v1/m/restaurant',{
                headers: {
                  'Authorization': 'Bearer '+token
                }
            })
            let data = await res.json();

            if ( res.status === 200 ) {
                console.log(data);
                setData(data);
            }
            else {
                alert('User not verified');
            }  
        }
        catch(err) {
            console.log('error:', err);
        }
    }

    useEffect(() => {
      let token = localStorage.getItem('token');
 
        fetchData(token);

    }, [])

    const getDetails = () => {
      navigate('/details')
    }
  return (
    <div>
      <Heading ml='23rem' mt='3rem'>Popular Ones</Heading>
      {
        data?.map((elm) => (
          <Center py={9}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '540px' }}
            height={{ sm: '476px', md: '20rem' }}
            direction={{ base: 'column', md: 'row' }}
            // bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}
            >
            <Flex flex={1}>
              <Image
                objectFit="cover"
                boxSize="100%"
                borderRadius='1rem'
                src= {
                  elm.images[0].url
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
              <Heading fontSize={'2xl'} fontFamily={'body'} color={'#43525d'} ml='1.5rem'>
                {
                  elm.restaurant_name
                }
              </Heading>
              
              <Text
                fontWeight={500} color={'gray.500'} size="sm" 
                px={3} pl={'1.5rem'}
                >
                {
                elm.cuisines.reduce((acc, el) => (
                  acc +' '+ el.cuisine_name
                ),'')
                } 
              </Text>
              <Text
                fontWeight={500} color={'gray.500'} size="sm" 
                px={3} pl={'1.5rem'}
                >
                {
                  elm.location?.city_name
                }
              </Text>
              <Text
                fontWeight={600} 
                color={'#d69778'}
                pl='1.5rem'
                >
                ⦼ 4 Offers trending
              </Text>
    
              <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                <Box
                  px={2}
                  py={1}
                  fontWeight={'700'}>
                  
                  {
                    '⭑ '+ elm.rating.restaurant_avg_rating
                  }
                  <br />
                  <Text color='#c9c8c8' fontWeight={'400'}>Popularity</Text>
                </Box>
                <Box
                  px={2}
                  py={1}
                  fontWeight={'700'}>
                  {elm.currency.symbol+ elm.avg_cost_for_two}
                  <br />
                  <Text color='#c9c8c8' fontWeight={'400'}>Cost for two</Text>
                </Box>
              </Stack>
              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow = {
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}
                  onClick={getDetails}
                  >
                  Details
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
        ))
      }
     
    </div>
  )
}

export default Restaurants