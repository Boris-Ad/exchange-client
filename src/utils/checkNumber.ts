export const checkNumber = (
  event: React.ChangeEvent<HTMLInputElement>,
  forEXchange: string,
  setForExchange: (date: string) => void
) => {
  const value = event.target.value.trim();
  const clear = parseInt(value).toString();

  if (Number(clear)) {
    setForExchange(clear);
  } else if (forEXchange.length === 1) {
    setForExchange('');
  }
};
