import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
   <header>
    <div className='w-full h-[80px] top-0 shadow-sm z-[100] fixed bg-[#ffffff] text-[#003D64] '>
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
<Link href={'/'}><Image alt='logo' src='/logo.png' width={60} height={40}/></Link>
    <div>
    <ul className='md:flex'>
          <li className='ml-4 md:ml-10 text-xs sm:text-sm hover:border-b cursor-pointer text-grey '>View cars</li>
          <li className='ml-4 md:ml-10 text-xs sm:text-sm hover:border-b cursor-pointer  text-grey'>Become a host</li>
          <li className='ml-4  md:ml-10 text-xs sm:text-sm hover:border-b cursor-pointer  text-grey'>login/sign in</li>
</ul>
</div>
</div> 
</div>  
    
   </header>
  )
}

export default Navbar