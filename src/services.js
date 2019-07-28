export const nivelRentabilidade = (priceProduct, priceSuggested) => {
  const great = 'Ótima';
  const good = 'Boa';
  const bad = 'Ruim';

  const item = (priceProduct * 10) / 100;
  const maximoVenda = priceProduct - item;

  if (priceSuggested > priceProduct) return great;
  if (maximoVenda <= priceSuggested) return good;
  return bad;
};

export const quantilyMultiple = (quantity, multiple) => {
  if (+quantity % multiple === 0) return true;
  return false;
};

export default { nivelRentabilidade, quantilyMultiple };
