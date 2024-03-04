import React from 'react'

const Testimonials = ({testimonial}) => {
  return (
   
        <div className='max-w-sm bg-white rounded-lg border mb-2 lg:w-[30%] lg:h-full lg:mx-2 border-gray-200 shadow-md '>
                    <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
                        <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', paddingTop: '60%'}}></span>
                        <img src={testimonial.image} style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'}} />
                    </span>
                    <div className='p-5'>
                        <h5 className='mb-2 text-lg font-bold tracking-tight text-[#003D64] '>{testimonial.name}</h5>
                        <p className='mb-3 font-normal text-[#003D64]'>{testimonial.testimonial}</p>
                    </div>
                    </div>
                
  )
}

export default Testimonials