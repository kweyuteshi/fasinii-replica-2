import React from 'react'
import CarDetails from '../data/CarDetails.json';

const CarCard = ({car}) => {
  return (
    <div className=' min-w-[300px] mr-4 w-full h-full shadow-sm rounded-xl text-[#003D64] hover:shadow-lg duration-75'>
            <div className="relative">
            <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
                            <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', paddingTop: '30%'}}></span>
                            <img src={car.image_url}  className='w-full h-36 object-cover mb-4' />
                            </span>
            <div className="bg-white text-[#003D64] px-4 py-2 rounded-xl absolute bottom-3 right-3 z-20">
              <div className="flex flex-row items-center justify-center">
                <p className="text-xs">{car.location} </p>
                </div>
            </div>
            </div>
            <div className='p-4 h-full'>
              <div className='flex flex-col md:flex-row justify-between'>
            <h2 className='text-xl font-semibold'>{car.make} {car.model}</h2>
            <span className='text-right text-[#459ED5]'> {car.price_per_day} KSH/day</span>
            </div>
            <hr className="mt-6 my-4 border border-slate-50"></hr>
            <div className='flex flex-row '>
              <div className='flex flex-col'>
                <p className='text-sm text-[#459ED5]'>Key Details</p>
                <div className="flex flex-wrap justify-between mt-4 ">
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-slate-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"></path>
                      <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"></path></svg><p className="pl-2 text-xs">{car.key_Details.max_duration}</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-slate-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                          <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M12 14l0 7"></path><path d="M10 12l-6.75 -2"></path>
                          <path d="M14 12l6.75 -2"></path></svg>
                          <p className="pl-2 text-xs">{car.key_Details.Driver}</p>
                          </div></div>
                          <div className="flex flex-row justify-between items-start w-full mt-2">
                            <div className="flex flex-row items-center mt-2">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-slate-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
                              </svg>
                              <p className="pl-2 text-xs">Minimum Days: {car.key_Details.Minimum_duration}</p>
                              </div>
                              </div>
                              </div>
              </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <p className='text-gray-700'>{car.price_per_day} ksh/day</p>
              {car.available ? (
                <span className='text-green-600'>Available</span>
              ) : (
                <span className='text-red-600'>Not available</span>
              )}
              </div>
              
    </div>
   
  </div>
  )
}

export default CarCard