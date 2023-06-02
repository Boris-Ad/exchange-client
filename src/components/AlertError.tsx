import React from 'react';
import { ReactComponent as AError }  from '../assets/icons/alert-error.svg'


interface ExchangeRateProps {
    message: string
}

const AlertError: React.FC<ExchangeRateProps> = ({message}) => {

  return (
    <div className='inline-flex items-start bg-[#232530] px-4 py-2 rounded-full'>
        <AError />
      <span className='text-[12px] text-[#F2D3FB] ml-2'>{message}</span>
    </div>
  
  )
   
 
};

export default AlertError;