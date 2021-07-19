// Step 1: Import React
import * as React from 'react';
import { ChakraProvider, Center, Input, Heading, Divider , useToast} from '@chakra-ui/react';

const { useState } = React;

const inputStyle = {
  borderRadius: 0,
};

// Step 2: Define your component
const IndexPage = () => {
  const [value, setValue] = useState('');
  const toast = useToast();

  const handleHeadingClick = () => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', value.toUpperCase());
    input.select();
    document.execCommand('copy');
    toast({
      title: 'Copy Success',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    document.body.removeChild(input);
  };

  return (
    <ChakraProvider>
      <Input
        style={inputStyle}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        variant='filled'
        size='lg'
        value={value}
        placeholder='Basic usage'
      />
      <Heading onClick={handleHeadingClick} as='h1' size='4xl'>
        {value.toUpperCase()}
      </Heading>
    </ChakraProvider>
  );
};

// Step 3: Export your component
export default IndexPage;
