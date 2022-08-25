import { DealPricingRule, DiscountPricingRule, PricingRule } from "../pricing-rule";

export const pricingRules: PricingRule[] = [
  new DealPricingRule({
    itemId: 1,
    customerId: 1,
    requiredQty: 3,
    freeQtyPerDeal: 1,
  }),
  new DiscountPricingRule({
    itemId: 3,
    customerId: 2,
    requiredQty: 1,
    discountPrice: 19.99,
  }),
  new DealPricingRule({
    itemId: 2,
    customerId: 3,
    requiredQty: 5,
    freeQtyPerDeal: 1,
  }),
];
