import React from 'react';
import CustomButton from '../components/ui/CustomButton';
import { useTelegram } from '../hooks/useTelegram';
import { sendDataToBot } from '../api';
import { useForExchange } from '../store';
import { IDataToBot } from '../types';

const OrderPage: React.FC = () => {
  const { queryId, user } = useTelegram();
  const stack = useForExchange(state => state.stack);
  const selectedBank = useForExchange(state => state.selectedBank);
  const [forEXchange, afterExchange] = useForExchange(state => [state.forEXchange, state.afterExchange]);

  const sendData = async () => {
    
    
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const timeAndDate = time + '/' + date

    if (queryId && user?.id) {
      const data: IDataToBot = {
        bank: selectedBank,
        date: timeAndDate,
        stack,
        money: [forEXchange, afterExchange],
        userId: user.id,
      };
     await sendDataToBot(queryId, data);
    }
  };

  return (
    <div className="h-full flex flex-col p-[20px]">
      <div className="flex-1 flex flex-col justify-center items-center text-white text-lg font-normal text-center">
        <p>
          Ваша заявка принята и будет обработана в ближайшее время, перейдите в чат с менеджером для получения
          реквизитов.
        </p>
        <p>Спасибо!</p>
      </div>
      <div>
        <CustomButton onClick={sendData}>Перейти в чат</CustomButton>
      </div>
    </div>
  );
};

export default OrderPage;
