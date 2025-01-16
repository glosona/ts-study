import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from './components/Button';
import { Label } from './components/Label';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items center;
  justify-content: center;
`;

const Title = styled.h1`
  maring-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items center;
  justify-content: center;
`;

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Container>
        <Title>Counter App</Title>
        <Contents>
          <Button label="-" onClick={() => setCounter((prev) => prev - 1)} />
          <Label data={counter} />
          <Button label="+" onClick={() => setCounter((prev) => prev + 1)} />
        </Contents>
      </Container>
    </>
  );
};

export default App;
