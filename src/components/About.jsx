import React from 'react'

export const About = () => {
  return (
    <div>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div><img src="" alt="img" /></div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Um Titulo de nivel 2</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Um simples paragrafos Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Repellendus officia ea fugit vitae. Eius ab culpa, nulla facilis fugiat,
                 nisi minus illo ducimus officiis voluptatem error tenetur ipsum neque dolorem! </p>
                 <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralGrey transition-all duration-300 
                     hover:-translate-y-4'>Learn More</button>
            </div>
        </div>
      </div>

      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div>
                <div className='md:1/2'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Um Titulo de nivel 2</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Um simples paragrafos Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Repellendus officia ea fugit vitae. Eius ab culpa, nulla facilis fugiat,
                 nisi minus illo ducimus officiis voluptatem error tenetur ipsum neque dolorem! </p>
                </div>

                <div>
                    <div>
                        <div>
                            <img src="" alt="img" />
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>2985,772,222</h4>
                                <p>Member</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}


