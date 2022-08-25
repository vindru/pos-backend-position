import { Item } from "../models/item"
import PricingRule from "./pricing-rule"

interface DealPricingRuleProps {
  itemId: number
  customerId: number
  requiredQty: number
  freeQtyPerDeal: number
}

export default class DealPricingRule extends PricingRule {
  private requiredQty: number
  private freeQtyPerDeal: number

  constructor({
    itemId,
    customerId,
    requiredQty,
    freeQtyPerDeal = 1,
  }: DealPricingRuleProps) {
    super(itemId, customerId)
    this.requiredQty = requiredQty
    this.freeQtyPerDeal = freeQtyPerDeal
  }

  calculateDiscount(items: Item[]): number {
    const item = items.find((item) => item.id === this.itemId)

    if (!item) {
      return 0;
    }

    const isQualified = item.quantity >= this.requiredQty

    if (isQualified) {
      const freeQty =
        Math.floor(item.quantity / this.requiredQty) * this.freeQtyPerDeal

      return (item.quantity * item.price) - ((item.quantity - freeQty) * item.price);
    }
    return 0
  }
}
