import React from "react";
import { Button } from "@material-ui/core";
import { CartItemType } from "../../App";
import { Wrapper } from './style';
import CartItem from './../CartItem';
import { number } from "prop-types";

// define types
type Props = {
  cartCarts: CartItemType[],
  addToCart: (clickedCart: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartCarts, addToCart, removeFromCart }) => {

  const calculateTotal = (items: CartItemType[]) => {
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  };

  return (
  <Wrapper>
    <h2>Your Shopping Cart</h2>
    {cartCarts.length === 0 ? <p>No Carts in cart.</p> : null}
    {cartCarts?.map(item => (
      <CartItem
        key={item.id}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    ))}

    <h2>Total: ${calculateTotal(cartCarts)}</h2>
  </Wrapper>)
};

export default Cart;
