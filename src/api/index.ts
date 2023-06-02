import ky from "ky";
import { IDataToBot } from "../types";

export const sendDataToBot = async (queryId: string, data: IDataToBot) => {
  return await ky.post("https://3e18-91-135-222-122.ngrok-free.app/api/bot", { json: { queryId, data } }).json();
};
