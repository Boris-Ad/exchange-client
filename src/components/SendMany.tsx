import two_arrows from '../assets/icons/two-arrows.png';
import exchange from '../assets/icons/exchange.png';
import IconButton from './ui/IconButton';
import SendInput from './ui/SendInput';
import { useForExchange } from '../store';

const SendMany: React.FC = () => {
  const setAfterExchange = useForExchange(state => state.setAfterExchange);
  const changeStack = useForExchange(state => state.changeStack);

  return (
    <div className="w-full max-h-[180px] bg-[#232530] px-[23px] pt-[17px] pb-[23px] rounded-xl mb-[30px]">
      <div className="flex justify-end gap-[10px] mb-[10px]">
        <button onClick={() => changeStack()}>
          <IconButton src={two_arrows} />
        </button>
        <button onClick={() => setAfterExchange()}>
          <IconButton src={exchange} />
        </button>
      </div>
      <SendInput />
    </div>
  );
};
 
export default SendMany;
