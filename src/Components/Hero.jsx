import React from 'react'
import Features from './features'
import Nabvar from './Nabvar'
import Footer from './Footer'

const Hero = () => {
  return (
    <div className=''>
      
        <h3 className='px-5 text-[35px] font-semibold text-center mt-10'>Cratio 15-Minute Overview</h3>
        <p className='px-5 text-center text-[18px] font-medium mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloribus illum. Sequi velit cupiditate veniam?</p>
        <img className='mt-5 px-5 rounded-lg' src="./images/02.jpg" alt="img" />
      

        <Features/>
        
      
    </div>
  )
}

export default Hero
