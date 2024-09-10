import React from 'react'
import asd from '../assets/ejemplo2.jpg';
import Information from '../components/Information';
import Slider from '../components/Slider';

const Project = () => {
  return (
    <main>
      <section className='relative'>
        <img src={asd} alt="" className="h-[550px] w-full object-cover" />
        <Information />
        <Slider />
      </section>
    </main>
  )
}

export default Project
