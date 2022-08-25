export class Item {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  total: number

  constructor(item: any) {
    this.id = item.id;
    this.image = item.image;
    this.name = item.name;
    this.price = item.price;
    this.description = item.description;
    this.quantity = item.quantity;
    this.total = item.total;
  }
}
