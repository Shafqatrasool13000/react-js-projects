import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
    const [slides, setSlides] = useState(data);
    const [index, setIndex] = useState(0);

    const lastSlide = slides.length - 1;

    const nextSlide = () => {
        setIndex((prevSlide) => {
            const newSlide = prevSlide + 1;
            if (newSlide > lastSlide) {
                return 0;
            }
            return newSlide;
        })
    }
    const prevSlide = () => {
        setIndex((prevSlide) => {
            const newSlide = prevSlide - 1;
            if (newSlide < 0) {
                return lastSlide;
            }
            return newSlide;
        })
    }

    useEffect(() => {
        const slidesInterval = setInterval(() => {
            setIndex((prevSlide) => {
                const newSlide = prevSlide + 1;
                if (newSlide > lastSlide) {
                    return 0;
                }
                return newSlide
            })
        }, 5000);

        return () => {
            clearInterval(slidesInterval)
        }
    }, [index])



    return <section className='section'>
        <div className="title">
            <h2>
                <span>/</span>reviews
            </h2>
        </div>
        <div className="section-center">
            {
                slides.map(({ id, image, name, quote, title }, personIndex) => {
                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide'
                    }
                    if (personIndex === index - 1 || (index === 0 && personIndex === slides.length - 1)) {
                        position = 'lastSlide'
                    }
                    return (
                        <article key={id} className={position}>
                            <img src={image} alt={name} className='person-img' />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className='icon' />
                        </article>
                    )
                })
            }
            <button className="prev">
                <FiChevronLeft onClick={prevSlide} />
            </button>
            <button className="next">
                <FiChevronRight onClick={nextSlide} />
            </button>
        </div>
    </section>;
}

export default App;
