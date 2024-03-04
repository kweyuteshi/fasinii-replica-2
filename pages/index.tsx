import Form from "@/components/Form";
import Link from "next/link";
import SGRphoto from "@/components/SGRphoto";
import Types from "@/components/Types";
import City from "@/components/City";
import SecondPhoto from "@/components/SecondPhoto";
import BookOrRent from "@/components/BookOrRent";
import CarDetails from '../data/CarDetails.json';
import Testimonials from '../components/Testimonials';
import TestimonialDetails from '../data/TestimonialDetails.json'

export default function Home() {
  return (
    <div className='hero'>
    <div className='w-full h-full'>
        <div className='mx-auto p-4 md:p-8 pt-12 mt-12 lg:mt-0 lg:pt-0 flex'>
            <div className='w-full h-[100%] my-12 lg:pt-52'>
                <div className="max-w-[1240px] w-full md:h-full mx-auto flex justify-center flex-col">
                    <div className='flex flex-col lg:justify-start md:justify-start'>
                        < div className='py-5 sm:py-5'>
    <h1 className="text-[#003D64] text-3xl font-normal">Why buy a car when you can <span className="text-[#479ED5]">rent it?</span></h1>
    <p className='text-[#003D64] text-l font-light mt-2 lg:pl-3 lg:pb-2'>Rent your ideal car today</p></div>
    <Form />
    </div>
    </div>
    </div>
    </div>
    <div className='w-full h-full'>
    <div className='flex-col w-full text-[#003D64] mb-4'>
      <h1 className='text-2xl font-normal mb-2'>Trending cars on <span className='text-[#479ed5]'>Fasinii</span></h1>
      <p className='mt-2'>These cars based in Nairobi have the highest ratings on fasini</p>
    </div>
    <div className='flex flex-row items-center my-8 pb-4 overflow-x-auto w-full duration-300'>
    <div className='flex'>
      {CarDetails.cars.map((car) => (
        <Link href={'/' + car.id} key={car.id}>
          <div className='flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-4 mr-8 mb-8 cursor-pointer'>
            <img src={car.image_url} alt={`${car.make} ${car.model}`} className='w-full h-36 object-cover mb-4' />
            <h2 className='text-xl font-semibold'>{car.make} {car.model}</h2>
            <p className='text-gray-600'>
              Max Duration: {car.key_Details.max_duration}, 
              Minimum Duration: {car.key_Details.Minimum_duration}, 
              Driver: {car.key_Details.Driver}
            </p>
            <div className='flex justify-between items-center mt-4'>
              <p className='text-gray-700'>{car.price_per_day} ksh/day</p>
              {car.available ? (
                <span className='text-green-600'>Available</span>
              ) : (
                <span className='text-red-600'>Not available</span>
              )}
    </div>
  </div>
  </Link>
    ))}
    
  </div>
</div>
</div>
<div className='w-full h-full'>
<SGRphoto />
</div>
<div className='w-full h-full flex flex-col'>
<Types />
</div>
<div className='w-full h-full flex flex-col'>
<City />
</div>
<div className='w-full h-full flex flex-col'>
<SecondPhoto />
</div>
<div className='w-full h-full flex flex-col'>
<BookOrRent />
</div>
<div className='w-full h-full'>
<div className='mx-auto pt-12 mt-12 lg:mt-0 lg:pt-0 flex flex-col'>
<div className='w-full p-2 h-[100%] lg:pt-4'>
  <div className='flex flex-col justify-center items-center lg:my-12 lg:items-start'>
    <div className='py-5'>
      <h1 className='text-[#459ed5] text-2xl font-normal mb-2'>
        Testimonials
      </h1>
      <p className='text-[#003D64]'>Amazing experiences from our trusted clients</p>
    </div>
    <div className='flex flex-wrap justify-center lg:justify-start w-full my-12'>
      {/* Map over testimonials here */}
      {TestimonialDetails.Testimonials.map(testimonial => (
        <Testimonials key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  </div>
</div>
</div>
</div>
    </div>
</div>
  );
}
