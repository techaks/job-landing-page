import React from 'react'
import { FaMap } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'

const JobSearch = () => {
  return (
    <div className=' w-full max-w-4xl mx-auto mt-7 '>
        <div className='flex flex-col md:flex-row bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden '>
            <div className=' flex items-center border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-900 px-4 sm:py-6 py-3 w-full md:w-1/2  '>
            <MdSearch className='text-gray-600 text-xl mr-2 ' 
            />
            <input type="text" placeholder='Search jobs, companies...' className=' w-full outline-none bg-transparent text-gray-800 dark:text-gray-200  '/>

            </div>
            <div className=' flex items-center border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-900 px-4 sm:py-6 py-3 w-full md:w-1/2  '>
            <FaMap className='text-gray-600 text-xl mr-2 ' />
            <input type="text" placeholder='Location' className=' w-full outline-none bg-transparent text-gray-800 dark:text-gray-200  '/>

            </div>


        </div>
      
    </div>
  )
}

export default JobSearch
