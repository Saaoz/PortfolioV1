import React from 'react'

import { style } from '../style'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`} >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div/>
        </div>
      </div>
    </section>
  )
}

export default Hero