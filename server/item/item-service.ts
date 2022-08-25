import { Item } from "../models/item";
import { items } from "../repositories/items";

export class ItemService {
  static getAllItem(): Item[] {
    return items;
  }
}
