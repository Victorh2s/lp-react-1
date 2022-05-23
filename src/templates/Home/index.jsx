import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <div className="Home">
      <Styled.Wrapper>
        <Heading>Olá mundo</Heading>
        <h1>Hello</h1>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
