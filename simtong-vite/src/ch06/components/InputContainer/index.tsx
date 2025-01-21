import { useNavigate } from 'react-router-dom';
import { ShowInputButton } from '../ShowInputButton';

export const InputContainer = () => {
  const navigate = useNavigate();

  return <ShowInputButton show={false} onClick={() => navigate('/ch06/add')} />;
};
