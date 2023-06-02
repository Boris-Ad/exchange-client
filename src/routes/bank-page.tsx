import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../components/ui/CustomButton';
import BackLink from '../components/ui/BackLink';
import { ReactComponent as TfLogo } from '../assets/banks-icons/tkoff.svg';
import { ReactComponent as SbLogo } from '../assets/banks-icons/sber.svg';
import { ReactComponent as UmLogo } from '../assets/banks-icons/uma.svg';
import { ReactComponent as SovLogo } from '../assets/banks-icons/sovk.svg';
import { ReactComponent as RfLogo } from '../assets/banks-icons/raif.svg';
import grey_arrow from '../assets/icons/grey-arrow-down.png';
import { IBankData } from '../types';
import { useForExchange } from '../store';

const BankPage: React.FC = () => {
  const [vision, setVision] = React.useState<boolean>(false);
  const [currentBank, setCurrentBank] = React.useState<IBankData>({ id: 3, icon: <TfLogo />, name: 'Тинькофф' });
  const setSelectedBank = useForExchange(state => state.setSelectedBank)

  const banks: IBankData[] = [
    { id: 1, icon: <SbLogo />, name: 'Сбербанк' },
    { id: 2, icon: <UmLogo />, name: 'Юманей' },
    { id: 3, icon: <TfLogo />, name: 'Тинькофф' },
    { id: 4, icon: <SovLogo />, name: 'Совкомбанк' },
    { id: 5, icon: <RfLogo />, name: 'Райффайзенбанк' },
  ];

  const setBank = (bank: IBankData) => {
    setCurrentBank(bank);
    setSelectedBank(bank.name)
    setVision(false);
  };

  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex-1  p-[20px]">
        <BackLink to="/" />
        <p className="text-base text-[#5F6173] font-medium mt-[35px] ml-[17px] mb-[27px]">Выберите метод оплаты:</p>
        <div className="w-full bg-[#232530] text-white p-[20px] pl-[14px] rounded-xl transition-all duration-1000">
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-4">
              {currentBank.icon}
              <h4 className="text-[26px] font-[Inter] font-medium">{currentBank.name}</h4>
            </div>
            <div className="" onClick={() => setVision(prev => !prev)}>
              <img src={grey_arrow} alt="grey_arrow" />
            </div>
          </div>
          {vision && (
            <div className="w-full flex flex-col gap-7 mt-[40px]">
              {banks.map(bank => (
                <button key={bank.id} className="flex items-center" onClick={() => setBank(bank)}>
                  {bank.icon}
                  <span className="ml-4">{bank.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <CustomButton>
          <Link to={'/order'} className="block">
            Далее
          </Link>
        </CustomButton>
      </div>
    </div>
  );
};

export default BankPage;
