import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTourHandler }) => {
  const [showMore, setShowMore] = useState(false);

  const showMoreTextHandler = (fullText) => {
    const lessText = fullText.slice(0, 200);
    if (showMore) {
      return fullText
    }
    return lessText + '...';
  }

  return <article className='single-tour'>
    <img title={name} src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </div>
      <p>{showMoreTextHandler(info)} <button onClick={() => setShowMore(prev => !prev)}>{showMore ? 'show less' : 'Show More'}</button></p>
      <button className='delete-btn' onClick={() => removeTourHandler(id)}>Not interested</button>
    </footer>
  </article>;
};

export default Tour;
