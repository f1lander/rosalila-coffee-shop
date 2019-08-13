import React from 'react';
import CartItem from './CartItem/CartItem';
import './Cart.css';

export default function Cart({ itemsInCart, setItemsInCart, totalCost }) {

  const handleRemoveFromCartClick = (id) => {
    console.log(itemsInCart);

    setItemsInCart(itemsInCart => {
      const itemInCart = itemsInCart.find(item => item.id === id);
      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map(item => {
          if (item.id !== id) return item;
          return { ...itemInCart, quantity: item.quantity - 1 };
        }).filter(item => item.quantity > 0);
      }

    });
  };

  return (
    <div className="Cart">
      <h2 className="Cart-title">Your shopping cart</h2>
      {itemsInCart.length ? (
        <div>
          {itemsInCart.map(item => (
            <CartItem
              key={item.id}
              title={item.title}
              cost={item.price * item.quantity}
              quantity={item.quantity}
              onRemoveFromCartClick={() => handleRemoveFromCartClick(item.id)}
            />
          ))}
          <div className="Cart-total-cost">
            Total cost: ${totalCost.toFixed(2)}
          </div>
        </div>
      ) : (
          <div>Your cart is empty</div>
        )}
    </div>
  );
}
