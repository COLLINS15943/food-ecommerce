import React, { useState } from 'react';
import '../styles/Menu.css';
import { menuList, foodList } from '../constants/menuData';
import { addIconWhite, addIconGreen, removeIconRed } from '../constants/images';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart, removeFromCart, getItemCount } = useCart();

  const filteredFoods = selectedCategory === 'All' 
    ? foodList 
    : foodList.filter(food => food.category === selectedCategory);

  return (
    <section className="menu-section" id="menu">
      <div className="menu-container">
        <h2>Explore Our Menu</h2>
        <p className="menu-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque nesciunt eaque voluptates fugit ex enim sapiente, sit molestias? Quasi!
        </p>

        <div className="categories">
          {menuList.map((category, index) => (
            <div 
              key={index} 
              className={`category-item ${selectedCategory === category.menu_name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.menu_name)}
            >
              <div className="category-circle">
                <img src={category.menu_image} alt={category.menu_name} />
              </div>
              <p>{category.menu_name}</p>
            </div>
          ))}
        </div>

        <h2 className="dishes-title">Top Dishes Near You</h2>

        <div className="dishes-grid">
          {filteredFoods.map((dish) => {
            const itemCount = getItemCount(dish._id);
            return (
              <div key={dish._id} className="dish-card">
                <div className="dish-image">
                  <img src={dish.image} alt={dish.name} />
                  {itemCount === 0 ? (
                    <button className="add-btn" onClick={() => addToCart(dish._id)}>
                      <img src={addIconWhite} alt="Add" />
                    </button>
                  ) : (
                    <div className="item-counter">
                      <button onClick={() => removeFromCart(dish._id)}>
                        <img src={removeIconRed} alt="Remove" />
                      </button>
                      <span>{itemCount}</span>
                      <button onClick={() => addToCart(dish._id)}>
                        <img src={addIconGreen} alt="Add" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="dish-info">
                  <h3>{dish.name}</h3>
                  <div className="dish-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < 4 ? 'star filled' : 'star'}>★</span>
                    ))}
                  </div>
                  <p className="dish-price">Ghc {dish.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
