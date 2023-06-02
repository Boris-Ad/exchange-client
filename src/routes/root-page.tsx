import React from "react";
import ReceiveMany from "../components/ReceiveMany";
import SendMany from "../components/SendMany";
import CustomButton from "../components/ui/CustomButton";
import ExchangeRate from "../components/ExchangeRate";
import AlertMessage from "../components/AlertMessage";
import { useBinanceData } from "../hooks/useBinanceData";
import { Link } from "react-router-dom";

const RootPage: React.FC = () => {
  const tg = window.Telegram.WebApp;

  React.useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  const { rate } = useBinanceData();

  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex-1">
        <SendMany />
        <ReceiveMany />
        <ExchangeRate rate={rate} />
        {!rate && <AlertMessage message="Идет загрузка данных с Binance" />}
      </div>

      <div>
        <CustomButton>
          <Link to={"/bank"} className="block">
            Обменять
          </Link>
        </CustomButton>
      </div>
    </div>
  );
};

export default RootPage;

// @ts-ignore
