import React, { useState } from 'react';
import { 
    Box, 
    Heading,
    Text,
    Input,
    Button
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const Register = () => {

    const [num, setNum] = useState();
    const navigate = useNavigate();

    const getOtp = async () => {
        try {
            let res = await fetch('https://staging.fastor.in/v1/pwa/user/register',{
                method: 'POST',
                body: JSON.stringify({
                    phone: num,
                    dial_code: '+91'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let data = await res.json();
            console.log(data.data);

            if ( res.status === 200 ) {
                navigate('/login');
                localStorage.setItem('number', num);
            }
            else {
                alert('OTP did not sent' )
            }    
            
            
        }
        catch(err) {
            console.log('error:', err);
        }
    }
  return (
    <div>
        <Box mt= '5rem' w='450px' textAlign='center' ml='24rem'>
        <Heading>
            Enter Your Mobile Number
        </Heading>
        <br />
        <Text fontSize='xl' color='#b2bac4'>
            We will send you the 4 digit verification code</Text>
        <Input placeholder='Enter your Number' size='lg' 
        onChange={(e) => setNum(e.target.value)}
        />
        <Button size='lg' backgroundColor='#ff6d6a' color='white' mt='24px'
        onClick={getOtp}
        >
            Send Code
        </Button>
        </Box>
    </div>
  )
}

export default Register