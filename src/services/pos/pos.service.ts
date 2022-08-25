import { Item } from "../../models";
import { Customer } from "../../models/customer";
import { ServiceResponse } from "../api";

export interface PosService {
  getCart: () => Promise<ServiceResponse<any>>;
  getCustomers: () => Promise<ServiceResponse<Customer[]>>;
  getSelectedCustomers: () => Promise<ServiceResponse<Customer>>;
  getItems: () => Promise<ServiceResponse<Item[]>>;
  handleCustomerChange: (id: number|string) => Promise<ServiceResponse<Customer>>;
  addItemToCart: (id: number, quantity:number) => Promise<ServiceResponse<any>>;
}
