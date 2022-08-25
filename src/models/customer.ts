export class Customer {
  id: number;
  name: string;
  constructor(customer: any) {
    this.id = customer.id
    this.name = customer.name
  }
}
