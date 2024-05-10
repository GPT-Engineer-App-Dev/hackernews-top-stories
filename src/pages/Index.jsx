// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Button } from "@chakra-ui/react";

// Example of using react-icons

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="3xl" fontWeight="bold">
          Welcome to Your New Site!
        </Text>
        <Text fontSize="xl">This is a starting point for your amazing website. Click below to learn more!</Text>
        <Button colorScheme="blue" size="lg">
          Learn More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
