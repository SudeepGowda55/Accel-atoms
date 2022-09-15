import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import gridArrow from '../assets/gridarrow.svg'
import flexImg from "../assets/atomicflex3.svg";
import AOS from 'aos';

export default function Atomic() {
  AOS.init();
  return (
    <div className='w-full h-[600px]  relative top-[1000px] lg:top-40 ' id='atomic' >
      <div className='w-full h-full flex items-center relative justify-center flex-col top-[-3vh]'>
           <div className='' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
               <h1 className='text-[40px] font-bold text-[#2b0a6c]'>Introducing Atomic Round</h1>
           </div>
          <div className='grid lg:grid-cols-3 ml-3 grid-cols-1 w-[53vw] mt-20 ' data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
               <div className='w-full lg:w-[300px] h-[250px]  text-left'>
                   <h1 className='px-2 text-4xl font-extrabold text-[#2b0a6c]'>$250K</h1>
                   <h1 className='px-2 text-lg'>Investment size</h1>
                   <h1 className='mt-[70px] text-[#2b0a6c] text-xl font-semibold'>We invest $250K and will help you raise upto $2M from a trusted network of angels and funds.</h1>
               </div> 
               <div className='w-full lg:w-[300px] h-[250px]'>
                   <h1 className='px-2 text-4xl font-extrabold text-[#2b0a6c]'>0%</h1>
                   <h2 className='px-2 text-lg'>Dilution</h2>
                   <h1 className='mt-[70px] text-[#2b0a6c] text-xl font-semibold'>Our investment comes from an uncapped convertible, what can be better?</h1>
               </div>  
               <div className='w-full lg:w-[300px] h-[250px] bg-[#5222b4]'>
                   <img src={flexImg} alt="" className='w-[150px]  ml-[150px]' />
                   <h1 className='text-white text-2xl font-black'>Know Your termsheet</h1>
                   <h2 className='text-white text-2xl  font-black'>before you apply</h2>
               </div>   
            </div>
           <button className='flex flex-wrap items-center justify-items-center text-[#511e9f] rounded-3xl bg-purple-200 mt-4' data-aos="fade-up" data-aos-anchor-placement="top-bottom"><span className='m-1'> Learn More </span>  <FiChevronRight /> </button>
      </div>
    </div>
  )
}
