import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import CH05 from './ch05';
import { DataView } from './ch06/pages/DataView';
import { ToDoListContextProvider } from './ch06/contexts/ToDoList';
import { ToDoInput } from './ch06/pages/ToDoInput';
import { Header } from './ch06/components/Header';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const NotFound = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <Container>
      <ToDoListContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<DataView />} />
          <Route path="/add" element={<ToDoInput />} />
          <Route path="/ch05" element={<CH05 />} />
          <Route
            path="*"
            element={
              <NotFound>
                404
                <br />
                NOT FOUND
              </NotFound>
            }
          />
        </Routes>
      </ToDoListContextProvider>
    </Container>
  );
};

export default App;
