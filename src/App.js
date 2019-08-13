import React, { useState } from 'react';
import useForm from 'react-hook-form';
import items from './api/items';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import ContactForm from './components/ContactForm/ContactForm';
import logo from './assets/color1.png';
import Payment from './components/Payment/Payment';
import './App.css';


export default function App() {

  const [itemsInCart, setItemsInCart] = useState([]);


  const handleAddToCartClick = id => {
    setItemsInCart(itemsInCart => {
      const itemInCart = itemsInCart.find(item => item.id === id);

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map(item => {
          if (item.id !== id) return item;
          return { ...itemInCart, quantity: item.quantity + 1 };
        });
      }

      // otherwise, add new item to cart
      const item = items.find(item => item.id === id);
      return [...itemsInCart, { ...item, quantity: 1 }];
    });
  };

  const totalCost = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <main className="App-shop">
        <div className="App-products">
          {items.map(item => (
            <Product
              key={item.title}
              title={item.title}
              price={item.price}
              image={item.image}
              onAddToCartClick={() => handleAddToCartClick(item.id)}
            />
          ))}
        </div>
        <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} totalCost={totalCost} />
        {itemsInCart.length > 0 && (
          <Payment />

        )}
        {itemsInCart.length > 0 && (
          <ContactForm />
        )}
      </main>
    </div>
  );
}

// form className="Form-container" onSubmit={handleSubmit(onSubmit)}>
//             <div>
//               <label>Nombre:
//             <input className="field" name="firstName" ref={register} /> {/* register an input */}
//               </label >
//             </div >
//   <div>
//     <label>Lugar:
//             <input className="field" name="lastName" ref={register({ required: true })} />
//       {errors.lastName && 'Last name is required.'}
//     </label>
//   </div>
//   <div>
//     <label>Email:
//             <input className="field" name="email" ref={register({ required: true })} />
//       {errors.age && 'Ingrese un email.'}
//     </label>
//   </div>
//   <input className="Product-buy-button" type="submit" value="Submit" />
//           </form >
