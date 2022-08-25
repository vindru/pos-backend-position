import React, { useEffect, useState } from 'react'
import { Item } from '../models';
import PizzaCard from '../components/pizza-card';
import { Grid, MenuItem, Select } from '@mui/material';
import Cart from '../components/cart';
import { Customer } from '../models/customer';
import PosServiceImpl from '../services/pos/pos.service.impl';

const POSPage: React.FC = (): JSX.Element => {

  const [items, setItems] = useState<Item[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cart, setCart] = useState<Item[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();

  const posService = new PosServiceImpl()
  const fetchItems = async (): Promise<void> => {
    const result = await posService.getItems();
    if (result.data) {
      setItems(result.data);
    }
  }

  const fetchCustomers = async (): Promise<void> => {
    const result = await posService.getCustomers();
    if (result.data) {
      setCustomers(await result.data);
    }
  }

  const fetchSelectedCustomer = async (): Promise<void> => {
    setIsLoading(true);
    const result = await posService.getSelectedCustomers();
    if (result.data) {
      setSelectedCustomer(await result.data);
    }
    setIsLoading(false);
  }

  const handleCustomerChange = async (id: number | string): Promise<void> => {
    const result = await posService.handleCustomerChange(id);
    setSelectedCustomer(await result.data);
  }

  const fetchCart = async (): Promise<void> => {
    setIsLoading(true);
    const result = await posService.getCart();
    setCart(result.data.cart)
    setTotalAmount(result.data.total.total)
    setIsLoading(false);
  }

  const addItemToCart = async (itemId: number, quantity: number) => {
    const result = await posService.addItemToCart(itemId, quantity);
    setCart(result.data.items)
    setTotalAmount(result.data.total.total)
  }

  useEffect(() => {
    fetchItems();
    fetchCart();
    fetchCustomers();
    fetchSelectedCustomer();
  }, []);

  useEffect(() => {
    fetchCart();
  }, [selectedCustomer]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        {isLoading ? 'Loading' : <>
          {items.map((item, key) =>
            <PizzaCard
              key={key}
              item={item}
              addItemToCart={(itemId: number, quantity: number) => addItemToCart(itemId, quantity)}
            />
          )}
        </>
        }
      </Grid>
      <Grid item xs={4}>
        Customer
        {!isLoading && 
          <Select 
            defaultValue={0} 
            value={selectedCustomer?.id} 
            onChange={(a) => handleCustomerChange(a.target.value)} 
            label="Select Customer">
              {customers.map((customer, key) => <MenuItem key={key} value={customer.id}>{customer.name}</MenuItem>)}
        </Select>}
      </Grid>
      <Grid item>
        <Cart
          cart={cart}
          totalAmount={totalAmount}
          removeItem={(itemId: number, quantity: number) => addItemToCart(itemId, quantity)}
        />

        <div className='mt-3'>
          {totalAmount !== 0 ? <div>
            <button className='btn btn-primary'>
              Pay Now
            </button>
          </div> : 'Please add a item to the cart'
          }
        </div>
      </Grid>

    </Grid>
  )
}

export default POSPage;
