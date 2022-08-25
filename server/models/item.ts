export class Item {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  total: number

  constructor(id: number, image: string, name: string, price: number, description: string, quantity: number) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
    this.total = quantity*price;
  }
}
