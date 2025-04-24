import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color:rgb(13, 13, 14);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Box = styled.li`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Ball = styled.span`
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 36px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Historico = () => {
  const [history, setHistory] = useState<number[][]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('mega-sena-history');
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Histórico de sugestões</Title>
        <List>
          {history.map((s, index) => (
            <Box key={index}>
              {s.map((num, i) => (
                <Ball key={i}>{num}</Ball>
              ))}
            </Box>
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Historico;
