import React from 'react'

const BookOrRent = () => {
  return (
   <div className='mx-auto pt-12 mt-12 lg:mt-0 lg:pt-0 flex flex-col'>
    <div className='w-full p-2 h-[100%] lg:pt-4'>
        <div className='max-w-[1240px] w-full md:h-full mx-auto flex justify-center flex-col'>
            <div className='flex flex-col lg:flex-row justify-between items-center m-4 md:mx-24 lg:mx-4 lg:my-24 lg:items-start'>
                <div className='py-12 lg:py-5 md:mr-4 lg:border-r-2 border-b-2 lg:border-b-0'>
                    <h1 className='text-[#003D64] text-3xl font-normal mb-2 lg:mb-4'>
                        Book a 
                        <span className='text-[#479ED5]'> vehicle</span>
                    </h1>
                    <p className='text-[#003D64] lg:w-[90%]'>
                    Experience a seamless and stress-free rental process with Fasinii. Discover your ideal ride, book it with ease, and embark on an adventure like no other. With secure payment options and reliable rental agreements.
                    </p>
                    <a className='inline-flex items-center py-2 my-4 px-3 text-sm font-medium text-center text-white bg-[#003D64] rounded-lg hover:bg-[#479ED5] focus:ring-4 focus:outline-none focus:ring-blue-300'>
                        View Vehicles
                    </a>
                </div>
                <div className='py-12 lg:py-5 lg:ml-8'>
                <h1 className='text-[#003D64] text-3xl font-normal mb-2 lg:mb-4'>
                Rent out your 
                        <span className='text-[#479ED5]'> vehicle</span>
                    </h1>
                    <p className='text-[#003D64] lg:w-[90%]'>
                    Turn your vehicle into a source of income with Fasinii. List your ride, approve renters, and earn money hassle-free. With secure payments and rental agreements, renting out your vehicle has never been easier. Join our community and start earning today!
                    </p>
                    <a className='inline-flex items-center py-2 my-4 px-3 text-sm font-medium text-center text-white bg-[#003D64] rounded-lg hover:bg-[#479ED5] focus:ring-4 focus:outline-none focus:ring-blue-300'>
                    Start renting out your vehicle  
                    </a>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default BookOrRent