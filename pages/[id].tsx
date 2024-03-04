// pages/car-details/[id].tsx
"use client"
import { useRouter } from 'next/router';
import CarDetails from '../data/CarDetails.json';

const CarDetailsPage = () => { 
  const router = useRouter();
  const { id } = router.query;
  const carId = Number(id); 

  // Find the car with the matching id
  const car = CarDetails.cars.find((car) => car.id === carId);

  if (!car) {
    return <div>Loading...</div>; 
  }
  return (
      <div className='w-full h-full'>
        <div className='mx-auto pt-12 mt-12 lg:mt-0 lg:pt-0 flex flex-col'>
          <div className='w-full h-[100%] my-12 lg:pt-52'>
            <h1 className='text-[#003D64] lg:text-5xl text-3xl font-normal'>
              {car.make} {car.model}
            </h1>
            <p className='text-[#479ED5]'>{car.year}</p>
          </div>
          </div>
          <div className='w-full h-fit relative'>
            <div className='w-full md:block relative '>
            <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
          <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', paddingTop: '30%'}}></span>
          <img src={car.image_url} style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'}} />
           </span>
           <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[1]"></div> </div>
    </div>
    <div className='max-w-[1240px] w-full mb-12 h-full mx-auto p-4 m-3 flex r lg:justify-between flex-col-reverse md:flex-row md:justify-between '>
      <div className=' w-full lg:w-[50%] mt-8'>
        <div className='my-4'>
          <h1 className='text-[#479ED5] text-2xl font-normal pb-3'>Price:</h1> 
          <h2 className='text-[#003D64] text-xl'>{car.price_per_day} Ksh/daily</h2>
        </div>
        <div className='my-8'>
          <h1 className='text-[#479ED5] text-2xl font-normal pb-3'>
            Key Details
          </h1>
          <div className='w-full py-7 flex flex-row flex-wrap'>
            <div className='flex flex-row rounded-lg mb-1 mr-1 p-4 shadow-sm items-center'><p>{car.engine} Engine</p></div>
            <div className='flex flex-row rounded-lg mb-1 mr-1 p-4 shadow-sm items-center'><p>{car.seats} Seater</p></div>
            <div className='flex flex-row rounded-lg mb-1 mr-1 p-4 shadow-sm items-center'><p>Conditiion: {car.rental_condition} </p></div>
          </div>
        </div>
        <div className='my-8'>
          <h1 className='text-[#479ED5] text-2xl font-normal pb-3'>Description</h1>
          <p className='text-[#003D64] lg:pr-6 text-ellipsis'>{car.description}</p>
        </div>
        <div className='my-8'>
          <h1 className='text-[#479ED5] text-2xl font-normal pb-3'>
            Rental Conditions
          </h1>
          <p><li>
            {car.key_Details.Driver}
            </li></p>
            <p><li>
            {car.key_Details.max_duration}
            </li></p>
            <p><li>
              Minimum Duration: 
            {car.key_Details.Minimum_duration}
            </li></p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default CarDetailsPage;
