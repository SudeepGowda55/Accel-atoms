import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Atomic from '../components/Atomic'
import Mentoring from '../components/Mentoring'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='max-w-full'>
      <Navbar></Navbar>   
      <Hero></Hero>
      <Atomic></Atomic>
      <Mentoring></Mentoring>
      <Footer></Footer>
    </div>
  )
}
