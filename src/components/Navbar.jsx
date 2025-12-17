import React from 'react'

function Navbar() {
 return (
  <div className='flex justify-end w-[75%]  bg-blue-600 mx-auto h-12 rounded-2xl '>
   <button className='bg-white text-blue-500 p-2 m-2 flex items-center justify-center rounded-xl'>Add New</button>
   <button className='bg-white text-blue-500 p-2 m-2 text-center rounded-xl flex items-center justify-center'>Show All</button>
  </div>
 )
}

export default Navbar