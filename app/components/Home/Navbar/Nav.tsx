"use client"
import { NavLinks } from '@/constant/constant'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { LuNetwork } from 'react-icons/lu'

type Props ={
    openNav:()=>void;
}
const Nav = ({openNav}:Props) => {

    const [navbg, setNavbg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbg(true);
            }
            else {
                setNavbg(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={`translate-all duration-300 ${navbg ? "bg-white shadow-md " :" fixed"} h-[12vh] z-[200] fixed w-full  ` }>
            <div className='flex items-center h-full justify-between w-[92%] mx-auto'>
                <div className='flex items-center sm:space-x-20'>
                    <div className='flex items-center  space-x-2'>
                        <div className='w-10 h-10 bg-cyan-800 rounded-full flex items-center flex-col justify-center'>
                            <LuNetwork className='w-5 h-5 text-white' />

                        </div>
                        <h1 className='text-xl hidden sm:block md:text-2xl text-sky-500 font-bold'>HireMe</h1>
                    </div >

                    <div className='hidden lg:flex items-center space-x-10'>

                        {
                            NavLinks.map((item) => (
                                <div key={item.id}>
                                    <a href={item.url} className='text-gray-600 hover:text-sky-500 duration-300 font-bold'>{item.label}</a>
                                </div>
                            ))
                        }
                    </div>


                </div>

                <div className="flex items-center space-x-4">
                    {/* login */}
                    <button className=' px-8 py-2 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-400 transition-all duration-300 font-semibold   '> Login / Register </button>
                    {/* job post */}
                    <button className='px-8 py-2 text-xs sm:text-sm rounded-lg cursor-pointer bg-sky-500 hover:bg-sky-700 transition-all duration-300 text-white font-semibold   '>
                        job Post
                    </button>
                    {/* dark mode */}

                    {/* berger menu */}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer lg:hidden ' />
                </div>

            </div>

        </div>
    )
}

export default Nav
