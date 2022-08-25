import PricingRule from "./pricing-rule"
import { Item } from "../models/item"

interface DiscountPricingRuleProps {
  itemId: number
  customerId: number
  requiredQty: number
  discountPrice: number
}

export default class DiscountPricingRule extends PricingRule {
  private discountPrice: number
  private requiredQty: number

  constructor({
    itemId,
    customerId,
    discountPrice,
    requiredQty,
  }: DiscountPricingRuleProps) {
    super(itemId, customerId)
    this.discountPrice = discountPrice
    this.requiredQty = requiredQty
  }

  calculateDiscount(items: Item[]): number {
    const item = items.find((item) => item.id === this.itemId)
    
    if (!item) {
      return 0;
    }

    const isQualified = item.quantity >= this.requiredQty

    if (isQualified) {
      return item.quantity * item.price - item.quantity * this.discountPrice
    }

    return 0
  }
}
