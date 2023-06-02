import React from 'react';
import { useForExchange } from '../store';

export const useBinanceData = () => {
  const [rate, setRate] = useForExchange(state => [state.rate, state.setRate]);
  const [afterExchange, setAfterExchange] = useForExchange(state => [state.afterExchange, state.setAfterExchange]);

  React.useEffect(() => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/usdtrub@trade`);

    ws.onmessage = event => {
      const json = (JSON.parse(event.data) as { p: string }) || undefined;

      if (json.p) {
        const price = Number(json.p).toFixed(2);
        setRate(price);
        if (!afterExchange) {
          setAfterExchange();
        }
      }
    };

    return () => {
      ws.close(1000);
    };
  }, [afterExchange]);

  return { rate };
};
