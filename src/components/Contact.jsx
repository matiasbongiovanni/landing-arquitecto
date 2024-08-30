import React from 'react'
import { FaLinkedinIn, FaBehance, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <main>
        <section className='flex flex-col items-center p-10 bg-black text-white' id='Contacto'>
            <h2 className='text-3xl text-center font-extrabold mb-5'>Contacto</h2>
            <h3 className='underline mb-5'>Información de contacto.</h3>
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSeEhymYdwE06bo24jKP8sGltNDxhnWlsy1vDo47XlEf7RCT0Q/formResponse?submit=Submit&usp=pp_url" className='flex flex-col w-full max-w-md space-y-4 mb-10'>
            <div>
                <label className='block mb-2'>Nombre</label>
                <input 
                    type="text" name='entry.1848417216'
                    className='w-full p-2 rounded bg-white-900 text-black focus:outline-none' 
                />
            </div>
            <div>
                <label className='block mb-2'>Email</label>
                <input 
                    type="email" name='entry.719439169'
                    className='w-full p-2 rounded bg-white-900 text-black focus:outline-none' 
                />
            </div>
            <div>
                <label className='block mb-2'>Mensaje</label>
                <textarea 
                    className='w-full p-2 rounded bg-white-900 text-black focus:outline-none' 
                    rows="4"
                    name='entry.1789037182'
                />
            </div>
            <button 
                type='submit' 
                className='p-2 mt-4 bg-white text-black rounded font-bold hover:bg-gray-200 transition duration-300'
            >
                Enviar
            </button>
        </form>
        <div className='flex space-x-5'>
            <a href="https://google.com" target='_blank'><FaBehance className='text-2xl hover:text-gray-500 transition duration-300' /></a>
            <a href="https://google.com" target='_blank'><FaLinkedinIn className='text-2xl hover:text-gray-500 transition duration-300' /></a>
            <a href="https://google.com" target='_blank'><FaInstagram className='text-2xl hover:text-gray-500 transition duration-300' /></a>
        </div>
    </section>
    </main>
    <hr />
    </>
  )
}

export default Contact
