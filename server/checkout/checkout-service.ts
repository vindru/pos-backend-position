import { ItemService } from "../item/item-service"
import { Checkout } from "../models/checkout"
import { Item } from "../models/item";


export class CheckoutService {

  static addToCart(itemId: number, quantity: number, checkout: Checkout) {
    const items = checkout.cartItems.filter(p => p.id === itemId);

    if (items.length > 0) {
      checkout.cartItems.filter(item => item.id === itemId).map(item => {
        item.quantity = item.quantity ? item.quantity + quantity : quantity;
        item.total = item.price * item.quantity
      })
    } else {
      if(quantity>0){
      const item = ItemService.getAllItem().find(item => item.id === itemId)
      const newItem = new Item(item?.id, item.image, item?.name, item.price, item.description, quantity)
      checkout.cartItems.push(newItem)
      }
    }
    checkout.cartItems.forEach((i, index)=>{
      if (i.quantity <= 0) {
        checkout.cartItems.splice(index, 1);
      }
    })
     
    
    return checkout;
  }
}

