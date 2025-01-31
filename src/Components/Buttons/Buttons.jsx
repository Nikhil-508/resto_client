
import React, { useState } from 'react';
import './Buttons.css';
import { Assets } from '../../Assets';

const Buttons = ({ onCategorySelect }) => {
  
  const [selectedCategory, setSelectedCategory] = useState('FOOD'); // Default selected category

  // Handle button click to set the selected category
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category); // Pass the selected category to the parent component
  };

  return (
    <div
      className='button-container'
      style={{
        backgroundImage: `url(${Assets.buttonbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='buttons'>
        <button
          className={selectedCategory === 'FOOD' ? 'selected' : ''}
          onClick={() => handleButtonClick('FOOD')}
        >
          FOOD
        </button>
        <button
          className={selectedCategory === 'DRINKS' ? 'selected' : ''}
          onClick={() => handleButtonClick('DRINKS')}
        >
          DRINKS
        </button>
        <button
          className={selectedCategory === 'BRUNCH' ? 'selected' : ''}
          onClick={() => handleButtonClick('BRUNCH')}
        >
          BRUNCH
        </button>
      </div>
    </div>
  );
};

export default Buttons;

