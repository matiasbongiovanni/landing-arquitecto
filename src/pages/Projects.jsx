import React from 'react'
import Card from '../components/Card'

const Projects = () => {
  return (
    <main>
      <section className='flex flex-col p-10 bg-[#f5f5f5]'>
        <h2 className='text-3xl text-center text-black font-extrabold'>Proyectos</h2>
        <h3 className='pr-5 underline pt-10'>Unifamiliares</h3>
        <Card />
        <h3 className='pr-5 underline pt-10'>Multifamiliares</h3>
      </section>
    </main>
  )
}

export default Projects