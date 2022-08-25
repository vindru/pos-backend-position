import { CartProps } from './interface';
import './styles.css';
import React from 'react';

const Cart: React.FC<CartProps> = ({ cart, totalAmount, removeItem }: CartProps): JSX.Element => {

  return (
    <>
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Price</td>
          <td>Qty</td>
          <td>Total</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {cart ? cart.map((cartProduct, key) => <tr key={key}>
          <td>{cartProduct.id}</td>
          <td>{cartProduct.name}</td>
          <td>{cartProduct.price}</td>
          <td>{cartProduct.quantity}</td>
          <td>{cartProduct.total}</td>
          <td>
            <button onClick={() => removeItem(cartProduct.id, -cartProduct.quantity)}>Remove</button>
          </td>

        </tr>)

          : 'No Item in Cart'}
      </tbody>
    </table>
    <h2 className='px-2 text-white'>Total Amount: ${totalAmount}</h2>
    </>
  );
}

export default Cart;
