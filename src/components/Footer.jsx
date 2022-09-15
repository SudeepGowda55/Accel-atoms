import React from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className='w-full h-[50px]'>
        <div className='w-full h-full flex justify-between items-center text-center'>
             <div>
                 <p>Accel Atoms. All rights Reserved</p>
             </div>
             <div className='flex flex-wrap gap-6'>
                 <p>Accel</p>
                 <p>SeedToScale</p>
             </div>
             <div className='flex flex-wrap items-center gap-3 text-center'>
                <p>Follow us</p>
                <AiFillTwitterCircle/>
                <AiFillLinkedin/>
             </div>
        </div>
      
    </div>
  )
}
