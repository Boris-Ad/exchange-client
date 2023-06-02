import React from 'react';

interface ExchangeRateProps {
  rate: string;
}

const ExchangeRate: React.FC<ExchangeRateProps> = ({ rate }) => {
  return <p className="text-right text-[12px] text-[#5F6173] font-normal mb-4">Актуальный курс: {rate} руб</p>;
};

export default ExchangeRate;
