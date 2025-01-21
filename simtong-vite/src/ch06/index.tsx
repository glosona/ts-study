import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { ToDoListContextProvider } from './contexts/ToDoList';
import { Header } from './components/Header';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const CH06 = () => {
  return (
    <Container>
      <ToDoListContextProvider>
        <Header />
        <Outlet />
      </ToDoListContextProvider>
    </Container>
  );
};

export default CH06;
