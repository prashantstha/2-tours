import React from 'react';
import Tour from './components/Tour';
import './scss/Tours.scss';

function Tours({tours, removeTour}) {
    return (
        <section className='section-tours'>
            <div className='title'>
                <h2>Our Tours</h2>
            </div>
            <div className="tour-lists">
                {tours.map((tour)=> {
                    return(
                        <Tour key={tour.id} {...tour} removeTour={removeTour} />
                    )
                })}
            </div>  
        </section>
    );
}

export default Tours;