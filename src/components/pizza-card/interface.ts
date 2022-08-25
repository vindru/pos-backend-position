import { Item } from "../../models"

export interface PizzaCardProps {
  item: Item;
  addItemToCart: (itemId: number, quantity: number) => {};
}
