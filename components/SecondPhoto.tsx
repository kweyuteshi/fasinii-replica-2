import React from 'react'

const SecondPhoto = () => {
  return (
    <div className='w-full md:block relative'>
        <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
          <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', paddingTop: '30%'}}></span>
          <img src='/field.jpg' style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'}} />
      </span>
        <p className='absolute text-xl w-[70%] text-white m-2 top-1/3 left-40 z-[9] max-w-[1240px]'>
          <span className='text-[#479ED5]'>Everybody</span>
          needs a car to deal with the hustle of the  life,<br />
          purchasing and maintaining vehicles is not the easiest or cheapest
        </p>
      
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[1]'></div>
      </div>
  )
}

export default SecondPhoto

