import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTourHandler }) => {
  return <section>
    {
      tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTourHandler={removeTourHandler} />
      ))}
  </section>
};

export default Tours;
