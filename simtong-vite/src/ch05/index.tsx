import { IScriptSnapshot } from 'typescript';
import { Component } from 'react';
import styled from '@emotion/styled';
import { Button } from './components/Button';
import { Label } from './components/Label';

const Container = styled.div``;

const Title = styled.h1`
  maring-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items center;
  justify-content: center;
`;

// const CH05 = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <>
//       <Container>
//         <Title>Counter App</Title>
//         <Contents>
//           <Button label="-" onClick={() => setCounter((prev) => prev - 1)} />
//           <Label data={counter} />
//           <Button label="+" onClick={() => setCounter((prev) => prev + 1)} />
//         </Contents>
//       </Container>
//     </>
//   );
// };

type Props = Record<string, never>;
interface State {
  readonly counter: number;
}

export class CH05 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { counter: 0 };
  }

  private sub = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  };

  private add = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <Container>
        <Title>Counter App</Title>
        <Contents>
          <Button label="-" onClick={this.sub} />
          <Label data={counter} />
          <Button label="+" onClick={this.add} />
        </Contents>
      </Container>
    );
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('getDerivedStateFromProps');
    console.log('nextProps: ', nextProps);
    console.log('prevState: ', prevState);

    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('getSnapshotBeforeUpdate');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);

    return {
      testData: true,
    };
  }

  componentDidUpdate(
    prevProps: Props,
    prevState: State,
    snapshot: IScriptSnapshot
  ) {
    console.log('componentDidUpdate');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    console.log('snapshot: ', snapshot);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('shouldComponentUpdate');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('componentDidCatch');
    console.log('error: ', error);
    console.log('info: ', info);
  }
}

export default CH05;
