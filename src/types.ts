export interface IErrorPage extends Error {
  statusText?: string;
}

export interface IBankData {
  id: number;
  icon: JSX.Element;
  name: string;
}

export interface IDataToBot {
  date: string;
  bank: string;
  stack: string[];
  money: [string,number];
  userId: number;
}
