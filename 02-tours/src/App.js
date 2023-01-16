import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url)
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch {
      setIsLoading(false);
      throw new Error('Someting Went Wrong')
    }
  }
  const removeTourHandler = (id) => {
    const remainTours = tours.filter(tour => tour.id !== id);
    setTours(remainTours);
  }
  useEffect(() => {
    fetchTours();
  }, [])
  if (isLoading) return <main><Loading /></main>
  if (tours.length === 0) {
    return <main className='title'> <h2>Not Tours To Show</h2>
      <button className='btn' onClick={fetchTours}>Refetch</button>
    </main>
  }
  return <main>
    <main className='title'>
      <h2 >Our Tours</h2>
      <div className="underline"></div>
      <Tours tours={tours} removeTourHandler={removeTourHandler} />
    </main>

  </main>
}

export default App
