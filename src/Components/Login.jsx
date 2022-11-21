import React, { useEffect, useState } from 'react';
import { 
    Box, 
    Heading,
    Text,
    Button,
    PinInput, 
    PinInputField,
    HStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const Login = () => {
    
    const [otp, setOtp] = useState();
    const navigate = useNavigate();
    const [num, setNum] = useState();

    const verifyOtp = async () => {
        
        try {
            let res = await fetch('https://staging.fastor.in/v1/pwa/user/login',{
                method: 'POST',
                body: JSON.stringify({
                    phone: num,
                    otp: otp,
                    dial_code: '+91'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let data = await res.json();

            if ( res.status === 200 ) {
                navigate('/restaurants');
                localStorage.setItem('token', data.data.token);
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
      setNum(localStorage.getItem('number'));
    }, [])
    
  return (
    <div>
        <Box mt= '5rem' w='450px' textAlign='center' ml='24rem'>
        <Heading>
            OTP Verification
        </Heading>
        <br />
        <Text fontSize='xl' color='#b2bac4'>
            Enter the verification code we just sent on your Mobile Number.
        </Text>
        <HStack ml='4rem'>
        <PinInput size='lg'

        >
            <PinInputField onChange={(e) => setOtp(e.target.value)}/>
            <PinInputField onChange={(e) => setOtp((p) => p+e.target.value)}/>
            <PinInputField onChange={(e) => setOtp((p) => p+e.target.value)}/>
            <PinInputField onChange={(e) => setOtp((p) => p+e.target.value)}/>
            <PinInputField onChange={(e) => setOtp((p) => p+e.target.value)}/>
            <PinInputField onChange={(e) => setOtp((p) => p+e.target.value)}/>
        </PinInput>
        </HStack>
        <Button size='lg' backgroundColor='#ff6d6a' color='white' mt='24px'
        onClick={verifyOtp}
        >
            Verify
        </Button>
        </Box>
    </div>
  )
}

export default Login