import React from 'react'

const contacts = () => {
  return (
    <div className='w-full h-full'>
        <div className='mx-auto p-4 md:p-8 pt-12 mt-12 lg:mt-0 lg:pt-0 flex text-[#003D64]'>
            <div className='w-full h-[100%] md:h-screen mt-12 md:mt-0'>
               <div className='max-w-[1240px] w-full md:h-full mx-auto flex md:justify-center md:items-center flex-col md:flex-row '>
                <div className='flex flex-col md:w-[40%] items-start my-8 md:my-0'>
                    <h1 className='tmb-2 text-4xl'>Contact
                    <span className='text-[#459ED5'> us</span></h1>
                    <p>
                    Thank you for your interest in   
                    <span className="text-[#459ED5]"> Fasinii</span>
                    </p>
                    <h3 className="text-lg mt-8">Please feel free to contact us on:</h3>
                    <div className="flex flex-row items-center hover:bg-[#459ED5]/50 hover:text-white rounded-md p-2 my-2 cursor-pointer">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg><p className=" pl-4">inquiries@fasinii.com
                            </p>
                            </div>
                            <div className="flex flex-row items-center hover:bg-[#459ED5]/50 hover:text-white rounded-md p-2 cursor-pointer">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path><path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
                                </svg>
                                <p className=" pl-4">+254 743505069</p>
                                </div>
                </div>
                <div className='w-full md:block relative'>
                <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
                            <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', paddingTop: '30%'}}></span>
                            <img src="/contact.jpg" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'}} />
                            </span>
                </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default contacts