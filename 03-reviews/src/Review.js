import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1

    }
    return number
  }
  const addQuotesHandler = () => {
    setIndex(prev => {
      let newIndex = prev + 1;
      return checkIndex(newIndex);
    });
  }
  const removeQuotesHandler = () => {
    setIndex(prev => {
      let newIndex = prev - 1;
      return checkIndex(newIndex);
    });
  }
  console.log({ index })
  const randomQuoteGenerator = () => {
    let surpriseQuote = Math.floor(Math.random() * people.length);
    if (surpriseQuote === index) {
      surpriseQuote = index + 1;
    }
    setIndex(checkIndex(surpriseQuote));
  }
  console.log({ index })
  const { name, image, text, job } = people[index];
  return <article className='review'>
    <div className="img-container">
      <img className='person-img' src={image} alt={name} />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn">
        <FaChevronLeft onClick={() => addQuotesHandler()} />
      </button>
      <button className="next-btn">
        <FaChevronRight onClick={() => removeQuotesHandler()} />
      </button>
    </div>
    <button className='random-btn' onClick={() => randomQuoteGenerator()}>
      surprise
    </button>

  </article>;
};

export default Review;
