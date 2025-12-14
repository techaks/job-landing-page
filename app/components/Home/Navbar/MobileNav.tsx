import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgCloseO } from "react-icons/cg";
type Props ={
    showNav:boolean;
    closeNav:()=>void;
}

const MobileNav = ({showNav,closeNav}:Props) => {
    const show = showNav ? "translate-x-0 " : "translate-x-[100%] " ; 
 
    return (
        <div>
            {/* overlay bg */}
            <div className={`bg-black z-[200] h-screen w-full fixed inset-0 transform transition-all duration-300 opacity-65 ${show} `}>
            </div>
            {/* navlinks */}
            <div className={` ${show} text-white fixed right-0 transform transition-all duration-300 z-[200] flex flex-col justify-center delay-300 w-[80%] sm:w-[60%]   bg-sky-500  space-y-6 right-0 h-screen `}>
                {
                    NavLinks.map((item) => (
                        <Link href={item.url} key={item.id} >
                            <p className=" text-white w-fit text-2xl ml-14 border-b-[1px] pb-1 border-white sm:text-[32px] font-bold font- " > {item.label}  </p>
                        </Link>
                    ))
                }
                <CgCloseO  onClick={closeNav} className=" text-black  absolute top-3 right-5 sm:w-8 sm:h-8 w-8 h-8 cursor-pointer " />
                

            </div>
            

        </div>
    )
}

export default MobileNav
