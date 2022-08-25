
import { Item } from '../../models';
import { Customer } from '../../models/customer';
import { APIServiceImpl, ServiceResponse } from '../api';

import { PosService } from './pos.service';

export default class PosServiceImpl extends APIServiceImpl implements PosService {
  async getItems(): Promise<ServiceResponse<Item[]>> {
    try {
      const response = await this.get('getItems');
      let items: Item[] = [];
      response.data.forEach((item: any) => {
        items.push(new Item(item));
      })

      return new ServiceResponse<Item[]>(items);
    } catch (e: any) {
      return new ServiceResponse<Item[]>(undefined, APIServiceImpl.parseError(e));
    }
  }

  async getCustomers(): Promise<ServiceResponse<Customer[]>> {
    try {
      const response = await this.get('getCustomers');
      let customers: Customer[] = [];
      response.data.forEach((customer: any) => {
        customers.push(new Customer(customer));
      })

      return new ServiceResponse<Customer[]>(customers);
    } catch (e: any) {
      return new ServiceResponse<Customer[]>(undefined, APIServiceImpl.parseError(e));
    }
  }

  async getSelectedCustomers(): Promise<ServiceResponse<Customer>> {
    try {
      const response = await this.get('getSelectedCustomer');
      const customer: Customer = new Customer(response.data);

      return new ServiceResponse<Customer>(customer);
    } catch (e: any) {
      return new ServiceResponse<Customer>(undefined, APIServiceImpl.parseError(e));
    }
  }

  async getCart(): Promise<ServiceResponse<any>> {
    try {
      const response = await this.get('getCart');

      return new ServiceResponse<Customer>(response.data);
    } catch (e: any) {
      return new ServiceResponse<Customer>(undefined, APIServiceImpl.parseError(e));
    }
  }

  async handleCustomerChange(id: number|string): Promise<ServiceResponse<Customer>> {
    try {
      const response = await this.post('addCustomer', { params: { customerId: id } });
      return new ServiceResponse<Customer>(response.data.customer);
    } catch (e: any) {
      return new ServiceResponse<Customer>(undefined, APIServiceImpl.parseError(e));
    }
  }

  async addItemToCart(id: number, quantity: number): Promise<ServiceResponse<any>>{
    try {
      console.log(id, quantity)
      const response = await this.post('addToCart', { params: { itemId: id, quantity: quantity } });

      return new ServiceResponse<any>(response.data);
    } catch (e: any) {
      return new ServiceResponse<any>(undefined, APIServiceImpl.parseError(e));
    }
  }
  
}
