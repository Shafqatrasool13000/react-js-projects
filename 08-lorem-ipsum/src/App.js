import React, { useState } from 'react';
import data from './data';

function App() {

  const [index, setIndex] = useState(0);
  const [generatedParagraphs, setGeneratedParagraphs] = useState([]);
  const maxParagraphs = data.length;

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = +index;

    if (index > maxParagraphs) {
      amount = maxParagraphs
    }
    if (index <= 0) {
      amount = 1;
    }
    setGeneratedParagraphs(data.slice(0, amount))
  }

  console.log(generatedParagraphs.length);

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor="amount">
          paragraphs
        </label>
        <input type="number" value={index} onChange={e => setIndex(e.target.value)} />
        <button className='btn' type='submit'>Generate</button>
      </form>
      <article>
        {
          generatedParagraphs.map((paragraph, index) => <p key={index} className='lorem-text'>
            {paragraph}
          </p>)
        }
      </article>
    </section>
  )
}

export default App;
