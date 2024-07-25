import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // amount setter
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('TypeError: Amount must be a number');
    }
    this._amount = value;
  }

  // currency getter
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // the method
  displayFullPrice() {
    return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;
  }

  // Static
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
