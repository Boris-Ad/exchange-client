import React from 'react';
import { ReactComponent as AMessage }  from '../assets/icons/alert-message.svg'


interface ExchangeRateProps {
    message: string
}

const AlertMessage: React.FC<ExchangeRateProps> = ({message}) => {

  return (
    <div className='inline-flex items-start bg-[#232530] px-4 py-2 rounded-full'>
        <AMessage />
      <span className='text-[12px] text-[#B7F3FC] ml-2'>{message}</span>
    </div>
  
  )
   
 
};

export default AlertMessage;