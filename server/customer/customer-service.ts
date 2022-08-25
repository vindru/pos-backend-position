import { Customer } from "../models/Customer";
import { customers } from "../repositories/customers";


export class CutomerService {
  static getAllCustomers(): Customer[] {
    return customers;
  }
}
