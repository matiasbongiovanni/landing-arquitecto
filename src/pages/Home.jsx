import React from 'react'
import Projects from './Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
    <section className='flex flex-col items-center text-center p-10 bg-[#f5f5f5]'>
      <h1 className='text-6xl font-extrabold pt-28 text-black'>Estudio de Arquitectura José Lopez</h1>
      <p className='mt-5 text-lg text-gray-700 max-w-2xl'>
        Diseñamos espacios funcionales y estéticamente atractivos, adaptados a las necesidades de cada cliente, con un enfoque en la innovación y la sostenibilidad.
      </p>
      <div className="flex gap-5 mt-10">
        <button className='border-2 border-black p-3 text-black font-bold rounded-lg hover:bg-gray-200'>Proyectos</button>
        <a href="#Contacto" className='bg-black p-3 text-white font-bold rounded-lg text-center'>Contacto</a>
      </div>
    </section>
    <Projects />
    <Contact />
    </>
  )
}

export default Home
