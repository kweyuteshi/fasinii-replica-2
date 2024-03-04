import React from 'react'
import Image from 'next/image';

const SGRphoto = () => {
  return (
    <div className='w-full md:block relative'>
      <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
          <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', paddingTop: '30%'}}></span>
          <img src='/sgr.jpg' style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'}} />
      </span>
      <p className='absolute w-[70%] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9]'>
        <span className='text-[#479ED5]'>Fasinii</span> was created for your convenience,
        <br />
        search for the perfect car to embark on your journey
      </p>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[1]'></div>
  </div>
  )
}

export default SGRphoto