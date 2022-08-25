import { Item } from "../models/item";

export default abstract class PricingRule {
  itemId: number;
  customerId: number;

  constructor(itemId: number, customerId: number) {
    this.itemId = itemId;
    this.customerId = customerId;
  }

  abstract calculateDiscount(
    items: Item[]
  ): number
}
