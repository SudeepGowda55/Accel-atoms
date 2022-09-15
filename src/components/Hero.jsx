import React from 'react'
import gridOne from '../assets/grid1.svg'
import gridTwo from '../assets/grid2.svg'
import gridThree from '../assets/grid2.svg'
import gridArrow from '../assets/gridarrow.svg'
import photoOne from '../assets/photo1.jpeg'
import photoTwo from '../assets/photo2.jpeg'
import photoThree from '../assets/photo3.jpeg'
import photoFour from '../assets/photo4.jpeg'
import photoFive from '../assets/photo5.jpeg'
import photoSix from '../assets/photo6.jpeg'
import photoSeven from '../assets/photo7.jpeg'
import photoEight from '../assets/photo8.jpeg'
import { FiChevronRight } from "react-icons/fi";
import AOS from 'aos';

export default function Hero() {
  AOS.init();
  return (
    <div className='w-full h-[175vh] relative  top-[105px] lg:top-[80px]'>
        <div className=' h-[170vh] ml-12 lg:ml-[320px] w-[80vw] mr-64 lg:mt-12 flex flex-col' >
            <div className='mt-10 lg:w-[30vw] z-10 '>
              <p className='text-[36px] text-center lg:text-left mt-0 mb-[16px] font-normal text-[#2b0a6c]  '>It's time to change pre-seed investing in India</p>
              <h1 className='mb-[32px] text-[18px] h-[1.5] block text-center lg:text-left text-[#2b0a6c] '>If you are an early stage founder in India, come partner with us and be a part of the Accel family. Raise $250K in non-dilutive capital and get 1:1 mentoring from the best operators in the industry</h1>
              <button className='w-[105px] text-[14px] text-center rounded-[4px] h-12 bg-[#511e9f] p-[12px] border-0 cursor-pointer font-semibold text-white '>APPLY</button>
            </div>
            <div>
             <iframe height="315" src="https://www.youtube.com/embed/B8Gsii0VrO4" title="YouTube video player" className='rounded-lg mt-10 lg:w-[560px] w-full lg:top-[-12px] lg:right-[17vw] block lg:absolute object-cover ' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        <div className='bg-gradient-to-r from-[#511e9f] mt-28 grid items-center to-[#250851] rounded-[16px] relative w-[100%]  max-w-[1240px] mr-auto ml-[-20px] text-[16px] h-[1.5] ' >
          <div className='flex flex-row  ml-[20vw] mt-16 h-[130px]'>
              <h1 className='text-[32px]  mt-[-20px] h-[1.2] font-normal block text-white'>Subscribe to our Newsletter for latest insights and news.</h1>
              <form action="#" className='flex flex-col mr-8 ml-12'>
                <input type="text" name="name" placeholder='Full Name*' className='bg-[hsla(0,0%,100%,.12)]  h-10 rounded-[4px] block w-[100%] p-[8px] text-[14px] mb-[10px] -mt-[48px]' />
                <input type="email" name="email" placeholder='Email ID' className='my-2 px-4 bg-[hsla(0,0%,100%,.12)] w-[20vw] rounded-md h-10' />
                <button type="submit" className='text-center bg-[hsla(0,0%,100%,.12)] text-white w-[20vw] h-10 my-2 rounded-md' >Submit</button>
              </form>
          </div>
        </div>
          <div className='mt-24 text-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h1 className='font-extrabold text-[#511e9f] my-10 text-2xl'>What makes Accel Atoms special</h1>
          </div>
          <div className='grid bg-white ml-10 gap-10 lg:grid-cols-3 grid-cols-1'>
              <div className='w-[110%] ml-[-8vw] lg:w-[20vw] h-[34vh] shadow-2xl hover:shadow-2xl flex border rounded-lg  border-[rgba(115,72,178,.2)] flex-col items-center text-[#511e9f] justify-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
               <img src={gridOne} alt="" className='w-10 my-5 h-10 -mt-5' />
               <h1 className='my-5'>1:1 mentoring</h1>
               <p className='text-center'>A dedicated Accel investment manager and our best operating members to help you move the needle</p>
               <div className='w-10 h-10 border rounded-full border-[rgba(115,72,178,.2)]'>
               <img src={gridArrow} alt="" className='w-6 mx-2 opacity-60 h-10' />
               </div>
              </div>
              <div className=' w-[110%] ml-[-8vw] lg:w-[20vw] shadow-2xl hover:shadow-2xl flex border-[rgba(115,72,178,.2)] rounded-lg border flex-col items-center text-[#511e9f] justify-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
               <img src={gridTwo} alt="" className='w-10 my-5 h-10 -mt-5' />
               <h1 className='my-5'>Non-dilutive capital</h1>
               <p className='text-center'>We invest using uncapped convertible notes, and are happy to lead or boost your current round with our investment</p>
               <div className='w-10 h-10 border rounded-full border-[rgba(115,72,178,.2)]'>
               <img src={gridArrow} alt="" className='w-6 mx-2 opacity-60 h-10' />
               </div>
              </div>
              <div className=' w-[110%] ml-[-8vw] lg:w-[20vw] shadow-2xl hover:shadow-2xl flex flex-col border  items-center rounded-lg border-[rgba(115,72,178,.2)] text-[#511e9f] justify-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
               <img src={gridThree} alt="" className='w-10 my-5 -mt-5 h-10' />
               <h1 className='my-5'>The Accel Advantage</h1>
               <p className='text-center'>Atoms makes you a Accel portfolio company, with complete access to our full network and resources</p>
               <div className='w-10 h-10 border rounded-full border-[rgba(115,72,178,.2)]'>
               <img src={gridArrow} alt="" className='w-6 mx-2 opacity-60 h-10' />
              </div>
           </div>
          </div>
        <div className='mt-20 text-2xl font-extrabold' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1 className='text-center text-[#511e9f]'>Access 1:1 advice from our pool of 50+ mentors</h1>
        </div> 
        <div className='w-[80vw] h-[60vh] flex flex-row gap-5  -ml-40 rounded-2xl  mt-10' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className=' h-[260px] rounded-2xl'>
           <img src={photoOne} alt="" className='w-[550px]  rounded-2xl h-full'/>
          </div>
          <div className=' h-[260px] rounded-2xl '>
           <img src={photoTwo} alt="" className='w-[550px] rounded-2xl h-full' />
          </div>
          <div className=' h-[260px] rounded-2xl '>
           <img src={photoThree} alt="" className='w-[550px] rounded-2xl h-full' />
          </div>
          <div className='h-[260px] rounded-2xl '>
           <img src={photoFour} alt="" className='w-[550px] rounded-2xl h-full' />
          </div>
          <div className='h-[260px] rounded-2xl '>
           <img src={photoFive} alt="" className='w-[550px] rounded-2xl h-full' />
          </div>
          <div className=' h-[260px] rounded-2xl '>
           <img src={photoSix} alt="" className='w-[550px] rounded-2xl h-full' />
          </div>
          <div className=' h-[260px] rounded-2xl '>
           <img src={photoSeven} alt="" className='w-[550px] rounded-2xl h-full' />
          </div>
          <div className='h-[260px] rounded-2xl '>
           <img src={photoEight} alt="" className='w-[550px] rounded-2xl h-full' />
          </div>         
        </div>
        <button className='flex flex-wrap items-center ml-[30vw] mt-16 w-44 justify-center  bg-purple-200 rounded-3xl text-[#511e9f] '> <span className='m-1'> See All Mentors </span> <FiChevronRight /> </button>
      </div>
    </div>
  )
}
