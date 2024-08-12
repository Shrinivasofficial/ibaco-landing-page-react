import React from 'react'
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';


export const App = () => {
  return (
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
       <Navbar></Navbar>
       <Hero></Hero>
      
    </div>
   
  )
}
export default App;