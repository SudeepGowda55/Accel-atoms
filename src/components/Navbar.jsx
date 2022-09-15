import React, {useState} from 'react'
import { Link } from 'react-scroll/modules'
import Logo from '../assets/logo.jpeg'

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const stateChanger = () => {
    setNav(!nav);
  };
  return (
    <div className='w-full h-[45px] sticky z-50 '>
        <div className='w-full h-full bg-gradient-to-r from-[#511e9f] to-[#250851] flex items-center justify-center'>
            <p className='text-white text-sm font-semibold inline-block m-4'>Announcing the Diwali '21 cohort of Accel Atoms</p>
            <button className='text-white rounded-sm font-extrabold text-sm px-1 py-[2px] bg-red-500'>View the list of startups</button>
        </div>
        <div className='w-full h-[60px] bg-black z-50 '>
          <div className=' h-[70px] flex justify-between items-center ml-6 mr-6 2xl:ml-[17vw] 2xl:mr-[17vw]'>
            <div>
               <Link><img src={Logo} alt="#" className='w-[170px] cursor-pointer h-[27px] mb-3' /></Link>
            </div>
            <ul className= {!nav? "hidden lg:flex text-white text-sm font-semibold md:mb-2" : 'lg:hidden mt-4 absolute bg-white text-center text-sm font-semibold text-[#270a52] top-[90px] w-full left-0 '}>
              <li className='p-[1rem] cursor-pointer px-5'><Link to="/">HOME</Link></li>
              <li className='p-[1rem] cursor-pointer px-5'><Link to="/pricing">PROGRAM</Link></li>
              <li className='p-[1rem] cursor-pointer px-5'><Link to="/training">WHY ATOMS</Link></li>
              <li className=' cursor-pointer p-[1rem] px-5'><Link to="/training">STARTUPS</Link></li>
              <li className=' cursor-pointer p-[1rem] px-5'><Link to="/training">BLOGS</Link></li>
              <li className='p-[1rem] cursor-pointer px-6 '><Link to="/contact">PERKS</Link></li>
              <button className={!nav? 'w-[105px] h-12 bg-[#511e9f] rounded-md' : 'w-[95.6%] rounded-md bg-[#511e9f] mx-4 text-white h-11 '}>APPLY</button>
            </ul>
            <div className="md:hidden ml-[1vw]" onClick={stateChanger}>
            {!nav ? ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-white w-10" viewBox="0 0 20 20" fill="currentColor" > <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /> </svg>
            ) : ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-white w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} > <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>)}
            </div>
        </div>
        </div>
      
    </div>
  )
}
