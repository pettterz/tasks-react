import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BoardList } from './components/BoardList';
import { MainLayout } from './MainLayout';
import { Container } from '@chakra-ui/react';

const App = () => (
  <ChakraProvider>
    <div className="App">
      <MainLayout title={"Board List"}>
        <Container maxW='container.lg'>
          <BoardList />
        </Container>
      </MainLayout>
    </div>
  </ChakraProvider>
);

export default App;
