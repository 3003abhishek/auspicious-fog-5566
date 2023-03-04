import { createContext, useState } from "react";

interface IGameContext {
  count: number;
  setCount: (count: number) => void;
}

export const GameContext = createContext();

const GameContextProvider = ({ children }: any) => {
  const [count, setCount] = useState<number>(0);

  return (
    <GameContext.Provider value={{ count, setCount }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
