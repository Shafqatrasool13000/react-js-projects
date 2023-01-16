import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const itemCategory = ['All', ...new Set(items.map(({ category }) => category))]

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [catagories, setCatagories] = useState(itemCategory);

  const filterItems = (category) => {
    const filteredItems = items.filter(item => item.category === category);
    if (category === 'All') {
      setMenuItems(items);
      return;
    }
    setMenuItems(filteredItems);

  }

  return <main>
    <section className='menu section'>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories catagories={catagories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>;
}

export default App;
