import React from 'react'
import { Link } from 'react-router-dom'

const Nabvar = () => {
  return (
    <div className='flex justify-between items-center px-3 h-20 text-white bg-cyan-900'>
        <Link className='texts-3xl font-semibold' to="/">CRM</Link>
        <Link className='texts-3xl font-semibold' to="/form">Demo</Link>      
    </div>
  )
}

export default Nabvar
