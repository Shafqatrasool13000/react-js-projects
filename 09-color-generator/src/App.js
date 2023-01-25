import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const getColors = (color) => {
    const colors = new Values(color).all(10);
    return colors;
  }
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setlList] = useState(getColors('#f15025'));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = getColors(color);
      setlList(colors)
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return <>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input className={`${error ? 'error' : null}`} type="text" value={color} placeholder='#f15025' onChange={(e) => setColor(e.target.value)} />
        <button className="btn" type='submit'>generate</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color, index) => {
        const hexColor = color.hex;
        return <SingleColor {...color} key={index} index={index} hexColor={hexColor} />

      }
      )}
    </section>
  </>
}

export default App
