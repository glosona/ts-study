import { createBrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import CH05 from '../ch05';
import CH06 from '../ch06';
import { Home } from '../ch07/pages/Home';
import { DataView } from '../ch06/pages/DataView';
import { ToDoInput } from '../ch06/pages/ToDoInput';

const NotFound = styled.div`
  text-align: center;
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/ch05',
    element: <CH05 />,
  },
  {
    path: '/ch06',
    element: <CH06 />,
    children: [
      {
        index: true,
        element: <DataView />,
      },
      {
        path: 'add',
        element: <ToDoInput />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <NotFound>
        404
        <br />
        NOT FOUND
      </NotFound>
    ),
  },
]);

export default router;
