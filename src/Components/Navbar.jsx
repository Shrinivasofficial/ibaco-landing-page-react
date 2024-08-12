import React from 'react'

export const Navbar = () => {
  return (
    <nav className='bg-white py-4'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto px-4'>
        <a href='/' className='flex items-center'>
          <img src='https://mir-s3-cdn-cf.behance.net/projects/404/a72b18142828609.Y3JvcCw5OTksNzgyLDk1Nyww.jpg' alt='ibaco' className='h-14'></img>
        </a>
        <div className='hidden md:block'>
          <ul className='flex space-x-8'>
            <li>
              <a href='/' className='text-brown-700 hover:text-yellow-400'>Home</a>
            </li>
            <li>
              <a href='/product' className='text-brown-700 hover:text-pink-400'>Product</a>
            </li>
            <li>
              <a href='/about' className='text-brown-700 hover:text-orange-400'>About</a>
            </li>
            <li>
              <a href='/find-us' className='text-brown-700 hover:text-green-400'>Find us</a>
            </li>
            <li>
              <a href='/contact' className='text-brown-700 hover:text-red-400'>Contact</a>
            </li>
          </ul>
        </div>
        <button className='md:hidden'>
          <svg className="w-6 h-6 text-brown-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}