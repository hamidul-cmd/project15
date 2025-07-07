import React from 'react'

function PruductsCommontitle({title,pera}) {
  return (
    <>
      <div className='space-y-1 3xl:space-y-1.5 mb-7.5 xll:mb-10 3xl:mb-12.5'>
        <h3 className='text-lg font-semibold l-150 text-gray-20 xll:text-xl 3xl:text-2xl'>{title}</h3>
        <p className='text-base l-150 text-gray-40 3xl:text-lg'>{pera}</p>
      </div>
    </>
  )
}

export default PruductsCommontitle
