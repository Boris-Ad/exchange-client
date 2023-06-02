import { useForExchange } from "../store";

export const exchangeCalculation = (forEXchange: string, rate: string) => {
  const [name1, name2] = useForExchange.getState().stack;

  if (name1 == name2) {
    return Number(forEXchange);
  }

  if (Number(forEXchange) && Number(rate)) {
    if (name1 === "RUB") {
      const res = Number(forEXchange) / Number(rate);
      return Math.floor(res);
    } else {
      const res = Number(forEXchange) * Number(rate);
      return Math.floor(res);
    }
  }

  return 0;
};
