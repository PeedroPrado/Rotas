import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { generateSuggestion } from '../utils/generateSuggestion';


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color:rgb(13, 13, 14);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const BallContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
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

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }
`;

const Palpite = () => {
  const [suggestion, setSuggestion] = useState<number[] | null>(null);

  const getHistory = (): number[][] => {
    const stored = localStorage.getItem('mega-sena-history');
    return stored ? JSON.parse(stored) : [];
  };

  const saveToHistory = (newSuggestion: number[]) => {
    const history = getHistory();
    history.push(newSuggestion);
    localStorage.setItem('mega-sena-history', JSON.stringify(history));
  };

  const newSuggestion = () => {
    const newSugg = generateSuggestion();
    saveToHistory(newSugg);
    setSuggestion(newSugg);
  };

  useEffect(() => {
    if (!suggestion) {
      const initialSuggestion = generateSuggestion();
      saveToHistory(initialSuggestion);
      setSuggestion(initialSuggestion);
    }
  }, []);

  return (
    <Wrapper>
      <Title>Palpite para a Mega-sena</Title>
      <BallContainer>
        {suggestion?.map((num, index) => (
          <Ball key={index}>{num}</Ball>
        ))}
      </BallContainer>
      <Button onClick={newSuggestion}>Nova sugestão</Button>
    </Wrapper>
  );
};

export default Palpite;
