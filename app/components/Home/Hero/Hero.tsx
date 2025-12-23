import React from 'react'
import JobSearch from './JobSearch'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col '>
        <div className=' w-[90%] md:w-[80%] mx-auto a items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
            <div>
                <h1 className='text-3xl font-bold sm:text-6xl '>Join us & Explore Thousands of Jobs</h1>
                <p className=' mt-4  text-xl font-medium '>Find Jobs, Employment & Career Opportunities</p>
                <JobSearch />
            </div>

        </div>
      
    </div>
  )
}

export default Hero
