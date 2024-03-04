import React from 'react'
import Footer from './Footer'

const City = () => {
  return (
    
    <div className='mx-auto pt-12 mt-12 lg:mt-0 lg:pt-0 flex flex-col'>
    <div className='w-full p-2 h-[100%] lg:pt-4'>
      <div className='max-w-[1240px] w-full md:h-full mx-auto flex justify-center flex-col'>
        <div className='flex flex-col justify-center items-center lg:my-12 lg:items-start'>
          <div className='py-5'>
            <h1 className='text-[#003D64] text-3xl font-normal mb-2'>
              Browse by <span className='text-[#479ED5]'> City</span></h1>
              <p className='text-[#003D64] '> From urban to rural, browse cars by city and experience them all!</p>
            </div>
            <div className='flex lg:flex-row flex-col items-center lg:justify-between w-full my-12'>
              <div className='max-w-sm bg-white rounded-lg border mb-2 lg:w-[30%] lg:h-full lg:mx-2 border-gray-200 shadow-md '>
                <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '60% 0px 0px'}}>
    </span>
    <img alt='Nairobi' src='/Nairobi.jpg' className='relative w-[100%] h-[50%] rounded-b-none rounded-xl'  style={{ position: 'absolute', inset: 0,boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
  </span>
  <div className='p-5'>
    <a href='#'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-[#003D64] '>Nairobi</h5>
    </a>
    <p className='mb-3 font-normal text-[#003D64]'>Sweet and stylish vehicles to loft you around the city</p>
    <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#003D64] rounded-lg hover:bg-[#479ED5] focus:ring-4 focus:outline-none focus:ring-blue-300'>
      View
      </button>
  </div>
              </div>
              <div className='max-w-sm bg-white rounded-lg border mb-2 lg:w-[30%] lg:h-full lg:mx-2 border-gray-200 shadow-md '>
                <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '60% 0px 0px'}}>
    </span>
    <img alt='Kisumu' src='/Kisumu.jpg' className='relative w-[100%] h-[50%] rounded-b-none rounded-xl'  style={{ position: 'absolute', inset: 0,boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
  </span>
  <div className='p-5'>
    <a href='#'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-[#003D64] '>Kisumu</h5>
    </a>
    <p className='mb-3 font-normal text-[#003D64]'>Cruise the city in style, discover our sweet and stylish vehicles Today!</p>
    <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#003D64] rounded-lg hover:bg-[#479ED5] focus:ring-4 focus:outline-none focus:ring-blue-300'>
      View
      </button>
  </div>
              </div>
              <div className='max-w-sm bg-white rounded-lg border mb-2 lg:w-[30%] lg:h-full lg:mx-2 border-gray-200 shadow-md '>
                <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '60% 0px 0px'}}>
    </span>
    <img alt='Mombasa' src='/Mombasa.jpg' className='relative w-[100%] h-[50%] rounded-b-none rounded-xl'  style={{ position: 'absolute', inset: 0,boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
  </span>
  <div className='p-5'>
    <a href='#'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-[#003D64] '>Mombasa</h5>
    </a>
    <p className='mb-3 font-normal text-[#003D64]'>From beaches to bazaars, rent a car and experience Mombasa's best!</p>
    <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#003D64] rounded-lg hover:bg-[#479ED5] focus:ring-4 focus:outline-none focus:ring-blue-300'>
      View
      </button>
  </div>
              </div>
            </div>
          </div>
        </div> 
    </div>
  </div>
  
  
  )
}

export default City