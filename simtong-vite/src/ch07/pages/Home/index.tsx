import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../ch06/components/Button';

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      HOME
      <Button label="CH05: Counter App" onClick={() => navigate('/ch05')} />
      <Button label="CH06: To Do List" onClick={() => navigate('/ch06')} />
    </Container>
  );
};
