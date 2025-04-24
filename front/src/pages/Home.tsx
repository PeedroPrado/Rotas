import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Bem-vindo!</h1>
      <button style={buttonStyle} onClick={() => navigate('/palpite')}>
        Clique para começar
      </button>
    </Wrapper>
  );
};

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

const Wrapper = styled.div`
  height: 100vw;
  width: 100vw;
  background-color: rgb(13, 13, 14);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

export default Home;
