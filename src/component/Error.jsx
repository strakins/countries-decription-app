import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='pt-32 h-screen grid items-center'>
        <h2 className='text-gray-600 text-4xl'>Error Page</h2>
        <Link className='bg-red-400 text-white border-2 shadow-md'>Visit HomePage</Link>
    </div>
  )
}

export default Error