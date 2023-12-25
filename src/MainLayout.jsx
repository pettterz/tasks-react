// MainLayout.js
import React from 'react';
import { Heading, Text, VStack } from '@chakra-ui/react';

export const MainLayout = (props) => {
  return (
    <VStack p={4} spacing={4} align="center">
      <Heading as="h1" size="xl">
        {props.title}
      </Heading>
      <Text fontSize="lg">
        This is a simple layout created using Chakra UI.
      </Text>
      {props.children}
    </VStack>
  );
}
