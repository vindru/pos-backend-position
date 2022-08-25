import { PricingRule } from "../pricing-rule";
import { pricingRules } from "../repositories/pricing-rules";
import { Item } from "./item";

export class Checkout {
  customerId: number;
  pricingRules: PricingRule[];
  cartItems: Item[]
  totalAmount: number;
  static New(pricingRules) {
    return new Checkout(pricingRules)
  }

  constructor(pricingRules) {
    this.pricingRules = pricingRules
    this.cartItems = []
  }

  add(item: Item) {
    this.cartItems.push(item)
  }

  addCustomerId(customerId: number){
    this.customerId = customerId;
    this.pricingRules = pricingRules.filter((a)=> a.customerId == this.customerId);
  }

  total() {
    let total = 0
    this.totalAmount = this.cartItems.reduce((a, b)=>{
      return a + b.total;
    }, 0)
    console.log(this.customerId)
    if(this.customerId){
      let discount = this.pricingRules.reduce((a, rule)=> a + rule.calculateDiscount(this.cartItems), 0);
      console.log(discount)
      this.totalAmount -= discount
    }
    return total
  }

}
