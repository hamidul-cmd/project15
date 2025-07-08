import React from 'react'
import TestimonialsCard from './Cards/TestimonialsCard';

function Testimonialssection({TestimonialsCardData}) {
  return (
    <>
       <div className="grid grid-cols-1 gap-5 ll:grid-cols-3 3xl:gap-7.5 p-4.9 bg-white-99 border border-white-97 rounded-16 xll:p-5.3 3xl:p-6.9 3xl:rounded-20">
          {TestimonialsCardData.map((card, i) => {
            return <TestimonialsCard key={i} card={card} />;
          })}
        </div>
    </>
  )
}

export default Testimonialssection
