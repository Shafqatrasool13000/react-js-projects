import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url)
      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      throw new Error('Someting Went Wrong')
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) return <section className='section loading'><h1>Loading...</h1></section>

  const { company, dates, duties, title } = jobs[value];

  const toggleCompanies = (index) => {
    console.log(index);
    setValue(index);
  }

  return <section className='section'>
    <div className="title">
      <h2>Experience</h2>
      <div className="underline"></div>
    </div>
    {/* btn container */}
    <div className="jobs-center">
      <div className='btn-container'>
        {
          jobs.map(({ company }, index) => (
            <button className={`job-btn ${index === value && 'active-btn'}`} key={index} onClick={() => toggleCompanies(index)}>
              {company}
            </button>
          ))
        }
      </div>
      {/* job Info */}
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {
          duties.map((duty, index) => (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </div>
          ))
        }
      </article>
    </div>

  </section>
}

export default App
