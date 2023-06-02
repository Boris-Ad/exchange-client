import React from "react";
import { checkNumber } from "../../utils/checkNumber";
import SelectButton from "./SelectButton";
import { useForExchange } from "../../store";
import rubIcon from "../../assets/icons/rub.png";
import { ReactComponent as UsdtIcon } from "../../assets/icons/usdt.svg";

const SendInput: React.FC = () => {
  const [forEXchange, setForExchange] = useForExchange(state => [state.forEXchange, state.setForExchange]);
  const setStackSend = useForExchange(state => state.setStackSend);
  const [name] = useForExchange(state => state.stack);
  const [menuView, setMenuView] = React.useState(false);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkNumber(e, forEXchange, setForExchange);
  };

  const onSend = (money: string) => {
    setStackSend(money);
    setMenuView(false);
  };

  return (
    <div
      className={`w-full ${menuView ? "h-[270px]" : "h-[93px]"} 
      border border-[#5F6173] rounded-xl p-[14px] pl-[20px] bg-[#232530]
       overflow-hidden transition-all duration-500 relative z-10`}
    >
      <div className="flex overflow-hidden">
        <div className="flex-1">
          <p className="text-[#5F6173] text-base font-normal">Отправляете</p>
          <div
            className={`flex items-center ${menuView ? "translate-x-0" : "-translate-x-[38px]"} transition-transform `}
          >
            <div className="mr-3">
              {name === "RUB" && <img src={rubIcon} alt="rubIcon" />}
              {name === "USDT" && <UsdtIcon className="w-[26px]" />}
            </div>
            <input
              disabled={menuView}
              type="text"
              value={forEXchange}
              onChange={handlerChange}
              className="bg-inherit text-[26px] text-white font-[Inter] outline-0 w-full"
            />
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
          <div onClick={() => onSend("RUB")} className="flex items-center">
            <div>
              <img src={rubIcon} width={32} height={32} alt="rubIcon" />
            </div>

            <span className="bg-inherit text-[18px] text-white font-[Inter] w-full ml-5">RUB</span>
          </div>
        </div>
        <div className="pt-[30px] pb-[10px] space-y-6">
          <div onClick={() => onSend("USDT")} className="flex items-center">
            <UsdtIcon />
            <span className="bg-inherit text-[18px] text-white font-[Inter] w-full ml-5">USDT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendInput;
