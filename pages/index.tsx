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
import CarCard from "@/components/CarCard";

export default function Home() {
  return (
    <div>
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
    </div>
    <div className='w-full h-full'>
    <div className='w-full h-[100%] mb-24 px-4 md:px-8 md:mx-0'>
      <div className="max-w-[1240px] w-full md:h-full mx-auto flex justify-center flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="flex-col w-full text-[#003D64] mb-4">
            <h1 className='text-2xl font-normal mb-2'>Trending cars on <span className='text-[#479ed5]'>Fasinii</span></h1>
            <p className='mt-2'>These cars based in Nairobi have the highest ratings on fasini</p>
          </div>
    <div className="flex flex-row mt-4 w-full items-end justify-end md:items-center">
      <div className="w-8 h-8 mr-2 bg-white shadow-md rounded-full flex items-center justify-center">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#459ED5]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091 6.757 12 17 4.909v14.182z">
            </path>
            </svg>
            </div>
            <div className="w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#459ED5]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z">
                  </path>
                  </svg>
              </div>
      </div>
      </div>
    <div className='flex flex-row items-center my-8 pb-4 overflow-x-auto w-full duration-300'>
      {CarDetails.cars.map((car) => (
        <Link href={'/' + car.id} key={car.id}>
          <CarCard car={car}/>
        </Link>
      ))}
  </div>
</div>
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
<div className='w-full h-full flex flex-col'>
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
      {TestimonialDetails.Testimonials.map(testimonial => (
        <Testimonials key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  </div>
</div>
</div>
</div>
    </div>
  );
}
