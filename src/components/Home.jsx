import { Carousel } from 'flowbite-react'
import React from 'react'

export const Home = () => {
  return (
    <div className='bg-neutralSilver'>
       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>

       <Carousel className='w-full mx-auto'> 
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
        gap-12 bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div>
            <img src="" alt="imagem" />
          </div>
          <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-neutralSilver md:w-3/4 leading-snug
                '>Primeiro Titulo <span className='text-brandPrimary leading-snug'>Outras Frases</span></h1>
                <p className='text-neutralGrey text-base mb-8'>Um pequeno paragrafo</p>
                <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralGrey transition-all duration-300 
                hover:-translate-y-4'>Register</button>
          </div>
        </div>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
        gap-12 bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div>
            <img src="" alt="imagem" />
          </div>
          <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-neutralSilver md:w-3/4 leading-snug
                '>Primeiro Titulo <span className='text-brandPrimary leading-snug'>Outras Frases</span></h1>
                <p className='text-neutralGrey text-base mb-8'>Um pequeno paragrafo</p>
                <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralGrey transition-all duration-300 
                hover:-translate-y-4'>Register</button>
          </div>
        </div>
        
      </Carousel>

       </div>
    </div>
  )
}