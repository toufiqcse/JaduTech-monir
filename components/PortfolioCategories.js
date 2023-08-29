import { useState } from 'react';

const PortfolioCategories = ({ categories, filterItems }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {categories.map((category, index) => {
            return (
              <button
                type='button'
                className={`cat-btn `}
                key={index}
                onClick={() => {
                  filterItems(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCategories;
