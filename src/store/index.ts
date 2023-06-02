import { create } from "zustand";
import { exchangeCalculation } from "../utils/exchangeCalculation";

interface IUseForExchange {
  stack: string[];

  forEXchange: string;
  afterExchange: number;
  rate: string;
  selectedBank: string;
  setSelectedBank: (bank: string) => void;
  
  changeStack: () => void;
  setStackSend: (name: string) => void;
  setStackReceive: (name: string) => void;
  setForExchange: (money: string) => void;
  setAfterExchange: () => void;
  setRate: (data: string) => void;
}

export const useForExchange = create<IUseForExchange>()(set => ({
  stack: ["RUB", "USDT"],
 
  forEXchange: "25000",
  afterExchange: 0,
  rate: "",
  selectedBank: "Тинькофф",
  setSelectedBank: (bank: string) => set(() => ({ selectedBank: bank })),
 
  changeStack: () => set(state => ({ stack: [state.stack[1], state.stack[0]] })),
  setStackSend: name => set(state => ({ stack: [name, state.stack[1]] })),
  setStackReceive: name => set(state => ({ stack: [state.stack[0], name] })),
  setForExchange: money => set(() => ({ forEXchange: money })),
  setAfterExchange: () => set(state => ({ afterExchange: exchangeCalculation(state.forEXchange, state.rate) })),
  setRate: newRate => set(() => ({ rate: newRate })),
}));
