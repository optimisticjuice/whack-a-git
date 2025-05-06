import { createContext } from "react";
import { initialState } from "./GameConstants";

export const GameContext = createContext(initialState);
