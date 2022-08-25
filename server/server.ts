import { CheckoutService } from "./checkout/checkout-service";
import { CutomerService } from "./customer/customer-service";
import { ItemService } from "./item/item-service";
import { Checkout } from "./models/checkout";
import { pricingRules } from "./repositories/pricing-rules";

const cors = require('cors')
const express = require('express');
const app = express();
app.use(cors())

const port = process.env.PORT || 5001;

let checkout = Checkout.New(pricingRules);

app.get('/api/getCart', (req, res) => {
  const cart = checkout.cartItems;
  checkout.total();
  
  const total = { total:  checkout.totalAmount};
  res.send({cart, total})
});


app.post('/api/addCustomer', (req, res) => {
  checkout.addCustomerId(parseInt(req.query.customerId))
  checkout.total();
  const customer = CutomerService.getAllCustomers().find((e)=> checkout.customerId == e.id)
  const total = { total:  checkout.totalAmount};
  res.send({items: checkout.cartItems, total: total, customer})
});

app.post('/api/addToCart', (req, res) => {
  checkout = CheckoutService.addToCart(parseInt(req.query.itemId), parseInt(req.query.quantity), checkout)
  checkout.total();
  
  const total = { total:  checkout.totalAmount};
  res.send({items: checkout.cartItems, total: total})
});

app.get('/api/getItems', (req, res) => {
  const items = ItemService.getAllItem()
  res.send(items)
});

app.get('/api/getCustomers', (req, res) => {
  const customers = CutomerService.getAllCustomers()
  res.send(customers)
});

app.get('/api/getSelectedCustomer', (req, res) => {
  const customer = CutomerService.getAllCustomers().find((e)=> checkout.customerId == e.id)
  res.send(customer)
});


app.listen(port, () => console.log(`Listening on port ${port}`));
