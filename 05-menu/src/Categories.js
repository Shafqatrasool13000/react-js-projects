import React from 'react';

const Categories = ({ filterItems, catagories }) => {
  return <section className='btn-container'>
    {
      catagories.map((category, index) => (
        <button className='filter-btn' key={index} onClick={() => filterItems(category)}>
          {category}
        </button>
      ))
    }
  </section>;
};

export default Categories;
