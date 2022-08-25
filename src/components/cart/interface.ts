import { Item } from "../../models"

export interface CartProps {
  cart: Item[];
  totalAmount: number;
  removeItem: (itemId: number, quantity: number) => {};
}
