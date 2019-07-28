import VMasker from 'vanilla-masker';

const Mask = {
  toMoney: event => VMasker.toMoney(event, 1234567890),
  toNumber: event => VMasker.toNumber(event, '123ac34'),
};

export { Mask };
