import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import groupPhoto from "../assets/groupPhoto.jpg";
import greenTick from "../assets/green-tick.svg";
import AOS from 'aos';

export default function Mentoring() {
  AOS.init();
  return (
    <div className='w-full mt-28 z-50'>
      <div className='w-full' >
        <div className='flex flex-row  ml-[20vw]' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className='w-[30%] left-10 inline-block'>
              <h1 className='text-[#2b0a6c] block font-normal font-[sans-serif] h-[1.2] text-[28px] '>Personalised Mentoring</h1>
              <p className='text-[16px] h-[1.5] block text-[#2b0a6c] font-medium '>One size does not fit all. Atoms makes sure you get the most relevant mentors to guide you personally</p>
              <div className='mt-5'>
              <div className='flex flex-wrap'>
                  <img src={greenTick} alt="" className='mt-[12px]' />
                  <p className='min-h-[26px]  pl-[47px] text-[#2b0a6c] mt-[-26px] font-semibold text-left  text-[16px] h-[1.5]'>Get paired with the most relevant mentors in areas you want to focus on</p>
              </div>
              <div className='flex flex-wrap'>
                  <img src={greenTick} alt="" className='mt-[10px]'/>
                  <p className='min-h-[26px]  pl-[22px] text-[#2b0a6c] mt-[10px] font-semibold text-left block text-[16px] h-[1.5]'>Mentors spend time with you 1:1</p>
              </div>
              <div className='flex flex-wrap'>
                  <img src={greenTick} alt="" className='mt-[30px]' />
                  <p className='min-h-[26px] pl-[47px] mt-[-25px] text-[#2b0a6c] font-semibold text-left  text-[16px] h-[1.5]'>Mentors also have the option to invest in your company</p>
              </div>
              <button className='flex flex-row bg-purple-200 rounded-3xl w-[140px] h-[30px] text-[#511e9f] items-center justify-items-center mt-6'> <span className='p-2 m-1'>Learn More</span> <FiChevronRight/> </button>
              </div>
          </div>
          <div className='ml-12'>
          <iframe width="560" height="315" className='inline-block ' src="https://www.youtube.com/embed/NO5EWuNxeus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className='flex items-center row-auto gap-[32px] text-[#2b0a6c] text-[16px]  ml-[20vw] mt-20 ' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className='inline-block '>
                  <img src={groupPhoto} className=" border-0 max-w-[100%]" alt="" />
              </div>
               <div className='inline-block ml-10 '>
                   <h1 className='text-[#210749] text-[35px] mt-0 mb-[8px] font-extrabold'>Join the Accel Family</h1>
                   <p className='text-[16px] block font-medium'>You are part of the portfolio, not a program. Get access to Accel founders, resources and insights</p>
                   <button className='flex flex-row text-[14px] w-[120px] h-[30px] mt-[32px] items-center justify-items-center  bg-purple-200 rounded-3xl text-[#511e9f] font-medium max-w-[100%]'> <p className='ml-4 p-1'>Learn More</p> <FiChevronRight/> </button>
               </div>
        </div>
      </div>
    </div>
  )
}