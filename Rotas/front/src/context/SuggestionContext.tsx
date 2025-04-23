import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface SuggestionContextType {
  suggestions: number[][];
  current: number[];
  generateNewSuggestion: () => void;
}

const SuggestionContext = createContext<SuggestionContextType | undefined>(undefined);

function generateSuggestion(): number[] {
  const set = new Set<number>();
  while (set.size < 6) {
    set.add(Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(set).sort((a, b) => a - b);
}

export const SuggestionProvider = ({ children }: { children: ReactNode }) => {
  const [suggestions, setSuggestions] = useState<number[][]>([]);
  const [current, setCurrent] = useState<number[]>([]);

  const generateNewSuggestion = () => {
    const newSuggestion = generateSuggestion();
    setCurrent(newSuggestion);
    setSuggestions(prev => [newSuggestion, ...prev]);
  };

  useEffect(() => {
    generateNewSuggestion();
  }, []);

  return (
    <SuggestionContext.Provider value={{ suggestions, current, generateNewSuggestion }}>
      {children}
    </SuggestionContext.Provider>
  );
};

export const useSuggestion = () => {
  const context = useContext(SuggestionContext);
  if (!context) throw new Error("useSuggestion must be used within SuggestionProvider");
  return context;
};
