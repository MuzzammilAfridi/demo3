import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#004C3D] flex flex-col items-center justify-center text-white h-[35vh]'>

        <h3 className='text-center mt-5 text-[30px] font-bold'>Have question ? Contact Us</h3>
        <div className='sm:flex text-center my-5 gap-10 justify-center items-center'>
            <p className='text-[20px] font-medium'>Chat with us</p>
            <p className='text-[20px] my-3 font-medium'>abu@gmail.com</p>
            <p className='text-[20px] font-medium'>9876543212</p>
        </div>
      
    </div>
  )
}

export default Footer
