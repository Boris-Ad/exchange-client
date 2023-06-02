import React from "react";
import rubIcon from "../assets/icons/rub.png";
import SelectButton from "./ui/SelectButton";
import { useForExchange } from "../store";
import { ReactComponent as UsdtIcon } from "../assets/icons/usdt.svg";

const ReceiveMany: React.FC = () => {
  const [_, name] = useForExchange(state => state.stack);
  const setStackReceive = useForExchange(state => state.setStackReceive);
  const [menuView, setMenuView] = React.useState(false);
const afterExchange = useForExchange(state => state.afterExchange)

  const onReceive = (money: string) => {
    setStackReceive(money);
    setMenuView(false);
  };

  return (
    <div className="w-full h-[135px] bg-[#232530] px-[23px] p-[20px] rounded-xl mb-4">
      <div
        className={`w-full ${menuView ? "h-[270px]" : "h-[93px]"} 
      border border-[#5F6173] rounded-xl p-[14px] pl-[20px] bg-[#232530]
       overflow-hidden transition-all duration-500 relative`}
      >
        <div className="flex overflow-hidden">
          <div className="flex-1">
            <p className="text-[#5F6173] text-base font-normal">Получаете</p>
            <div className={`flex items-center`}>
              <span className="bg-inherit text-[26px] text-white font-[Inter] outline-0 w-full">{afterExchange}</span>
            </div>
          </div>

          <div className="flex items-center">
            <SelectButton onClick={() => setMenuView(prev => !prev)} rotate={menuView}>
              {name}
            </SelectButton>
          </div>
        </div>
        <div className="divide-y divide-[#5F6173]">
          <div className="mt-[45px] pb-[30px] space-y-6">
            <div onClick={() => onReceive('RUB')} className="flex items-center">
              <div>
                <img src={rubIcon} width={32} height={32} alt="rubIcon" />
              </div>

              <span className="bg-inherit text-[18px] text-white font-[Inter] w-full ml-5">RUB</span>
            </div>
          </div>
          <div className="pt-[30px] pb-[10px] space-y-6">
            <div onClick={() => onReceive('USDT')} className="flex items-center">
              <UsdtIcon />
              <span className="bg-inherit text-[18px] text-white font-[Inter] w-full ml-5">USDT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveMany;
