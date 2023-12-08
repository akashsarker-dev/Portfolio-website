import React from 'react'
import { Link } from 'react-router-dom'

const CopyRight = props => {
  return (
    <div className='bg-[#112E42] py-4 mt-4'>
      <p className='text-center text-white text-base '>Designed & Built by <span className='text-[#00ABF0]'><Link to='/'>Akash Sarker </Link></span></p>

        
    </div>
  )
}

export default CopyRight
