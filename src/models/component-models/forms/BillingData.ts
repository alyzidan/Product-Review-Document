export default class BillingData {
  public readonly name: Readonly<string>
  public readonly date: Readonly<string>
  public readonly creditcard: Readonly<string>
  public readonly cvv: Readonly<string>

  constructor(source: Partial<BillingData>) {
    this.name = source.name || ''
    this.date = source.date || ''
    this.creditcard = source.creditcard || ''
    this.cvv = source.cvv || ''
  }
}