import ky from 'ky'
import { IDataToBot } from '../types'


export const sendDataToBot = async (queryId:string,data:IDataToBot) => {
 return await ky.post('https://0f93-91-135-222-122.eu.ngrok.io/api/bot',{json:{queryId,data}}).json()
}