import React from 'react';
import '../styles/CartModal.css';
import { useCart } from '../context/CartContext';
import { foodList } from '../constants/menuData';
import { crossIcon } from '../constants/images';

const CartModal = () => {
  const { cartItems, deleteFromCart, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  const cartItemsList = Object.keys(cartItems).map(itemId => {
    const item = foodList.find(food => food._id === itemId);
    return { ...item, quantity: cartItems[itemId] };
  });

  const subtotal = cartItemsList.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharge = 10;
  const total = subtotal + deliveryCharge;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            <img src={crossIcon} alt="Close" />
          </button>
        </div>

        {cartItemsList.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items-header">
              <span>Items</span>
              <span>Title</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span>Remove</span>
            </div>

            <div className="cart-items-list">
              {cartItemsList.map(item => (
                <div key={item._id} className="cart-item-row">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">Ghc {item.price}</div>
                  <div className="cart-item-quantity">{item.quantity}</div>
                  <div className="cart-item-total">Ghc {item.price * item.quantity}</div>
                  <div className="cart-item-remove">
                    <button onClick={() => deleteFromCart(item._id)}>x</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-total-section">
                <h3>Cart Total</h3>
                <div className="cart-total-row">
                  <span>Subtotal</span>
                  <span>Ghc {subtotal}</span>
                </div>
                <div className="cart-total-row">
                  <span>Delivery Charges</span>
                  <span>Ghc {deliveryCharge}</span>
                </div>
                <div className="cart-total-row total">
                  <span>Total</span>
                  <span>Ghc {total}</span>
                </div>
                <button className="checkout-btn">Proceed To Checkout</button>
              </div>

              <div className="promo-code-section">
                <p>Enter promo code here</p>
                <div className="promo-input-group">
                  <input type="text" placeholder="Promo code" />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;
